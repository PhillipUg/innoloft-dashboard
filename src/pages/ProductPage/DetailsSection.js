import React from 'react';
import PropTypes from 'prop-types';

const DetailsSection = ({ product }) => {
  const {
    trl,
    investmentEffort,
    businessModels,
    categories,
  } = product;
  return (
    <div className="row-span-1 shadow-md p-8 rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">Details</h2>
      <div className="grid grid-cols-2 gap-8 place-items-stretch">
        <div className="">
          <strong>Technologies/Categories:</strong>
          <div className="flex flex-row flex-wrap ">
            {categories.map((category) => (
              <span key={category.id}>{category.name}</span>
            ))}
          </div>
        </div>
        <div className="">
          <strong>Business Models:</strong>
          <div className="flex flex-row flex-wrap">
            {businessModels.map((model) => (
              <span key={model.id}>{model.name}</span>
            ))}
          </div>
        </div>
        <div className="">
          <strong>TRL</strong>
          <p>{trl.name}</p>
        </div>
        <div className="">
          <strong>Cost:</strong>
          <p>{investmentEffort}</p>
        </div>
      </div>
    </div>
  );
};

DetailsSection.propTypes = {
  product: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    businessModels: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    trl: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    investmentEffort: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsSection;
