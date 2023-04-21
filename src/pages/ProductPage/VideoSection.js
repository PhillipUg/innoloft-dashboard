import React from 'react';
import PropTypes from 'prop-types';

const VideoSection = () => {
  return (
    <div className="bg-white row-span-1 md:row-span-2  shadow-md rounded-2xl md:p-6">
      <h2 className="text-xl font-semibold mb-4">Video</h2>
      <div className="relative h-5/6 flex justify-center items-center">
        <iframe
          title="Product Video"
          className="w-full h-full md:w-5/6 md:h-5/6"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

VideoSection.propTypes = {
  product: PropTypes.shape({
    video: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoSection;
