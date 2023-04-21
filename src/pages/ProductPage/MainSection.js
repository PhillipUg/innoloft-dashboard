import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const MainSection = ({ product }) => {
  const sanitizedHTML = DOMPurify.sanitize(product.description);

  return (
    <div className="row-span-3 bg-white">
      <img className="w-full h-64 object-cover rounded-md mb-4" src={product.picture} alt={product.name} />
      <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-600 mb-4">{product.type.name}</p>
      {/* eslint-disable-next-line */}
      <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  );
};

MainSection.propTypes = {
  product: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainSection;
