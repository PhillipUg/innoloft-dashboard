import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';

const DescriptionEditor = ({ description, onChange }) => {
  const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Description</h2>
      <ReactQuill
        value={sanitizedDescription}
        onChange={onChange}
        theme="snow"
        className="w-full h-64"
      />
    </div>
  );
};

DescriptionEditor.propTypes = {
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DescriptionEditor;
