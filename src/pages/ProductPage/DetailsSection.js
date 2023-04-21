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
      <h2 className="text-xl font-semibold mb-4">Offer details</h2>
      <div className="grid grid-cols-2 gap-8 place-items-stretch">
        <div className="">
          <p className="mb-2">Technology</p>
          <div className="flex flex-row flex-wrap ">
            {categories.map((category) => (
              <span className="p-2 mx-2 bg-slate-100 rounded-2xl" key={category.id}>{category.name}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2">Business Model</p>
          <div className="flex flex-row flex-wrap">
            {businessModels.map((model) => (
              <span className="p-2 mx-2 bg-slate-100 rounded-2xl" key={model.id}>{model.name}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2">TRL</p>
          <span className="p-2 mx-2 bg-slate-100 rounded-2xl inline-block">{trl.name}</span>
        </div>
        <div>
          <p className="mb-2">Costs</p>
          <span className="p-2 mx-2 bg-slate-100 rounded-2xl inline-block">{investmentEffort}</span>
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
