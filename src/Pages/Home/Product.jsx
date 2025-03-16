import React, { useState } from 'react';

const Product = ({ product }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    console.log(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-xs rounded-lg shadow-lg overflow-hidden border border-gray-200 p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl font-semibold text-gray-800 mt-4">{product.name}</h3>
      <p className="text-lg font-bold text-gray-600 mt-2">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600 transition"
      >
        Add to Cart
      </button>
      {cartCount > 0 && <p className="text-gray-500 mt-2">{cartCount} item(s) in cart</p>}
    </div>
  );
};



export default Product;
