import React from 'react';
import PropTypes from 'prop-types';
import LocationIcon from '../../components/LocationIcon';

const Map = ({ product }) => {
  const {
    latitude,
    longitude,
    city,
    country,
    street,
    house,
    zipCode,
  } = product.company.address;
  const addressName = `${street} ${house}, ${zipCode} ${city.name}, ${country.name} `;

  return (
    <div className="flex flex-col items-between bg-white row-span-2 col-span-2">
      <div className="flex py-4">
        <LocationIcon />
        <p className="break-words">{addressName}</p>
      </div>
      <div className="relative h-64 p-2">
        <iframe
          title="Company Address"
          className="w-full h-full"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAMReDKFnQ0-6-Pw5R8evmC-pyUY4aTal8&q=${latitude},${longitude}`}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

Map.propTypes = {
  product: PropTypes.shape({
    company: PropTypes.shape({
      address: PropTypes.shape({
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired,
        street: PropTypes.string,
        house: PropTypes.string,
        zipCode: PropTypes.string,
        city: PropTypes.shape({
          name: PropTypes.string,
        }),
        country: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    }).isRequired,
  }).isRequired,
};

export default Map;
