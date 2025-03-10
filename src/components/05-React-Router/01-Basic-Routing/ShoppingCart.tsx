import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Shopping Cart</h2>
          <Link 
            to="/"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
        
        {/* Sample cart items */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold">Sample Product</h3>
            <p className="text-gray-600">$99.99</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold">Another Product</h3>
            <p className="text-gray-600">$149.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;