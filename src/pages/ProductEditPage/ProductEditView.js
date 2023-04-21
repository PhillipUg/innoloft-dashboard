import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import DescriptionEditor from './DescriptionEditor';
import CategoriesBusinessModelsEditor from './CategoriesBusinessModelsEditor';
import TRLSelector from './TRLSelector';
import { editProduct } from '../../redux/actions/productActions';

const ProductEditView = () => {
  const navigate = useNavigate();
  const product = useSelector((state) => state.product.data);
  const config = useSelector((state) => state.config.data);

  const [editedProduct, setEditedProduct] = useState(product);
  const btnStyle = config.mainColor ? { backgroundColor: config.mainColor } : '';

  const handleSave = async () => {
    await editProduct(product.id, editedProduct);
    navigate(`/product/${product.id}`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:p-4 py-4">
      <div className="grid grid-cols-1 gap-8 grid-rows-2">
        <DescriptionEditor
          description={editedProduct.description}
          onChange={
            (newDescription) => setEditedProduct({ ...editedProduct, description: newDescription })
          }
        />
        <CategoriesBusinessModelsEditor
          categories={editedProduct.categories}
          businessModels={editedProduct.businessModels}
          onChange={
            (newCategories, newBusinessModels) => setEditedProduct({
              ...editedProduct,
              categories: newCategories,
              businessModels: newBusinessModels,
            })
          }
        />
        <TRLSelector
          trl={{ ...editedProduct.trl, id: String(editedProduct.trl.id) }}
          onChange={(newTRL) => setEditedProduct({ ...editedProduct, trl: newTRL })}
        />
      </div>
      <button
        type="submit"
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        style={btnStyle}
      >
        Save
      </button>
    </div>
  );
};

ProductEditView.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    categories: PropTypes.shape({}),
    businessModels: PropTypes.shape({}),
  }),
};

ProductEditView.defaultProps = {
  product: {},
};

export default ProductEditView;
