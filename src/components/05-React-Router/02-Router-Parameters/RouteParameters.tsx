import { Link, Routes, Route } from 'react-router-dom';

interface ShoppingItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const items: ShoppingItem[] = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 1299.99,
    description: "High-performance gaming laptop with RTX 3080",
    image: "💻"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 899.99,
    description: "Latest model with advanced camera system",
    image: "📱"
  },
  {
    id: 3,
    name: "Headphones",
    price: 299.99,
    description: "Noise-cancelling wireless headphones",
    image: "🎧"
  }
];

const ItemDetail = () => {
  const itemId = Number(window.location.pathname.split('/').pop());
  const item = items.find(i => i.id === itemId);

  if (!item) return <div>Item not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{item.image}</div>
          <h1 className="text-3xl font-bold text-gray-800">{item.name}</h1>
          <p className="text-2xl text-blue-600 mt-2">${item.price}</p>
        </div>
        <p className="text-gray-600 mb-8">{item.description}</p>
        <Link 
          to="/shopping-items"
          className="inline-flex items-center text-blue-500 hover:text-blue-600"
        >
          ← Back to Items
        </Link>
      </div>
    </div>
  );
};

const ItemsList = () => (
  <div className="min-h-screen bg-gray-50 py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shopping Items</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(item => (
          <Link 
            key={item.id}
            to={`/shopping-items/${item.id}`}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4 text-center">{item.image}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
            <p className="text-blue-600 font-bold">${item.price}</p>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link 
          to="/"
          className="inline-flex items-center text-blue-500 hover:text-blue-600"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  </div>
);

const RouteParameters = () => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Route Parameters Demo</h2>
      <Link 
        to="/shopping-items"
        className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        View Shopping Items →
      </Link>
      <Routes>
        <Route path="/shopping-items" element={<ItemsList />} />
        <Route path="/shopping-items/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
};

export default RouteParameters;
export { ItemsList, ItemDetail };