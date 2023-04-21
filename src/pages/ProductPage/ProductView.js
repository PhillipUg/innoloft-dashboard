import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainSection from './MainSection';
import DetailsSection from './DetailsSection';
import VideoSection from './VideoSection';
import UserInfo from './UserInfo';
import Map from './Map';

const ProductView = () => {
  const product = useSelector((state) => state.product.data);
  const config = useSelector((state) => state.config.data);
  const navigate = useNavigate();
  const btnStyle = config.mainColor ? { backgroundColor: config.mainColor } : '';

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleEditClick = () => {
    navigate(`/product/${product.id}/edit`);
  };

  return (
    <div className="py-8">
      <button
        type="button"
        onClick={handleEditClick}
        className="text-white font-bold py-2 px-4 ml-4 mb-2 rounded"
        style={btnStyle}
      >
        Edit
      </button>
      <div className="grid md:grid-rows-5 gap-6 sm:grid-cols-1">
        <div className="flex flex-col md:grid md:grid-cols-1 md:grid-rows-3 md:grid-flow-col md:row-span-2 md:gap-6 rounded-2xl shadow-md md:p-8 w-full">
          <MainSection product={product} />
          {config.hasUserSection && <UserInfo product={product} />}
          <Map product={product} />
        </div>
        <VideoSection product={product} />
        <DetailsSection product={product} />
      </div>

    </div>
  );
};

export default ProductView;
