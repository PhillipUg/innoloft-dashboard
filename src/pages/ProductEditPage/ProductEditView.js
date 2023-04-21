import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import DescriptionEditor from './DescriptionEditor';
import CategoriesBusinessModelsEditor from './CategoriesBusinessModelsEditor';
import TRLSelector from './TRLSelector';
import { editProduct } from '../../redux/actions/productActions'; // Assuming updateProduct is defined in your API

const ProductEditView = () => {
  const product = useSelector((state) => state.product.data);
  const [editedProduct, setEditedProduct] = useState(product);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      await editProduct(product.id, editedProduct);
      setUpdateSuccess(true); // Add this line

      // Option 1: Show a success message
      setTimeout(() => {
        navigate(`/product/${product.id}`);
        setUpdateSuccess(false);
      }, 1000);
    } catch (error) {
      // Handle error during the update (e.g., show an error message)
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {updateSuccess && <div className="bg-green-500 text-white p-2 mb-4 rounded">Product updated successfully!</div>}
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
      <button
        type="submit"
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
