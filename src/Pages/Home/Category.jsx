import React, { useState } from 'react';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    'Action',
    'Adventure',
    'Sport',
    'Racing',
    'Open World',
    'Card',
    'Role Playing',
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container text-left flex justify-between ">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide mb-6">
        Category
      </h2>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`px-4 py-2 m-2 text-sm rounded-md transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-black'
            } hover:bg-blue-500 hover:text-white`}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div>
          <h3 className="mt-4 text-xl font-semibold">
            You selected: {selectedCategory}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Category;
