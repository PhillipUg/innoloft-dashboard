import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const UserInfo = ({ product }) => {
  const config = useSelector((state) => state.config.data);
  const {
    firstName,
    lastName,
    profilePicture,
  } = product.user;
  const name = `${firstName} ${lastName}`;

  return (
    <div className="bg-white rounded-md col-span-2">
      <h2 className="text-xl font-semibold mb-4">Offered by</h2>
      <div className="flex flex-col justify-between h-28">
        <img src={config.logo} alt="Innoloft" className="w-32" />
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <img className="inline-block h-full w-16 rounded-full" src={profilePicture} alt={name} />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-600">{name}</p>
            <p className="text-slate-500">{product.company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  product: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
    }).isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default UserInfo;
