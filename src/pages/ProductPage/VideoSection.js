import React from 'react';
import PropTypes from 'prop-types';

const VideoSection = () => {
  return (
    <div className="bg-white row-span-2 py-20 px-48 shadow-md rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">Video</h2>
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          title="Product Video"
          className="absolute top-0 left-0 w-full h-full"
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
