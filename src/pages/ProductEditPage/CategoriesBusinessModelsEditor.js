import React from 'react';
import PropTypes from 'prop-types';

const CategoriesBusinessModelsEditor = ({ categories, businessModels, onChange }) => {
  const handleCategoriesChange = (index, newValue) => {
    const newCategories = categories.map((category, i) => {
      if (i === index) {
        return { ...category, name: newValue };
      }
      return category;
    });
    onChange(newCategories, businessModels);
  };

  const handleBusinessModelsChange = (index, newValue) => {
    const newBusinessModels = businessModels.map((businessModel, i) => {
      if (i === index) {
        return { ...businessModel, name: newValue };
      }
      return businessModel;
    });
    onChange(categories, newBusinessModels);
  };

  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold mb-2">Categories and Business Models</h3>
      <div className="mb-4">
        <h4 className="text-md font-bold mb-2">Categories</h4>
        {categories.map((category, index) => (
          <input
            key={category.id}
            type="text"
            value={category.name}
            onChange={(e) => handleCategoriesChange(index, e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          />
        ))}
      </div>
      <div>
        <h4 className="text-md font-bold mb-2">Business Models</h4>
        {businessModels.map((businessModel, index) => (
          <input
            key={businessModel.id}
            type="text"
            value={businessModel.name}
            onChange={(e) => handleBusinessModelsChange(index, e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          />
        ))}
      </div>
    </div>
  );
};

CategoriesBusinessModelsEditor.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  businessModels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CategoriesBusinessModelsEditor;
