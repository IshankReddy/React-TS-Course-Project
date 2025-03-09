 import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
}

const RouteParameters = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  
  // Mock product data
  const products: Product[] = [
    { id: 1, name: 'Laptop', description: 'Powerful laptop with high performance.' },
    { id: 2, name: 'Smartphone', description: 'Latest smartphone with amazing camera.' },
    { id: 3, name: 'Headphones', description: 'Noise cancelling wireless headphones.' }
  ];
  
  const selectedProduct = products.find(p => p.id === selectedProductId);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Route Parameters</h3>
      
      <div className="mb-4">
        <h4 className="text-md font-medium text-gray-700 mb-2">Products List:</h4>
        <div className="space-y-2">
          {products.map(product => (
            <button
              key={product.id}
              onClick={() => setSelectedProductId(product.id)}
              className={`block w-full text-left px-3 py-2 rounded ${
                selectedProductId === product.id 
                  ? 'bg-blue-100 border-l-4 border-blue-500' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        {selectedProduct ? (
          <div className="border rounded p-4">
            <div className="text-sm text-gray-500 mb-2">
              URL: /products/<span className="font-medium">{selectedProduct.id}</span>
            </div>
            <h4 className="text-lg font-medium mb-2">{selectedProduct.name}</h4>
            <p className="text-gray-600">{selectedProduct.description}</p>
            <button 
              onClick={() => setSelectedProductId(null)}
              className="mt-3 text-sm text-blue-500 hover:underline"
            >
              Back to list
            </button>
          </div>
        ) : (
          <div className="text-center p-4 bg-gray-50 rounded">
            <p className="text-gray-500">Select a product to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RouteParameters;