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

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleEditClick = () => {
    navigate(`/product/${product.id}/edit`);
  };

  return (
    <div className="py-20">
      <button
        type="button"
        onClick={handleEditClick}
        className="text-white font-bold py-2 px-4 rounded"
        style={{ backgroundColor: config.mainColor }}
      >
        Edit
      </button>
      <div className="grid grid-rows-5 gap-6">
        <div className="grid grid-cols-1 grid-rows-3 grid-flow-col row-span-2 gap-6 rounded-2xl shadow-md p-8">
          <MainSection product={product} />
          <UserInfo product={product} />
          <Map product={product} />
        </div>
        <VideoSection product={product} />
        <DetailsSection product={product} />
      </div>

    </div>
  );
};

export default ProductView;
