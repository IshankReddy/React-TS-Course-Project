import { Link } from 'react-router-dom';

const BasicRouting = () => {
  return (
    <div className="p-4">
      <Link 
        to="/shopping-cart"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block"
      >
        View Shopping Cart
      </Link>
    </div>
  );
};

export default BasicRouting;