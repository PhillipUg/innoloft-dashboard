import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import getTRL from '../../redux/actions/trlActions';

const TRLSelector = ({ trl, onChange }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTRL());
  }, [dispatch]);

  const trlOptions = useSelector((state) => state.trl.data);

  const handleTRLChange = (event) => {
    const selectedTRL = trlOptions.find((option) => option.id === event.target.value);
    onChange(selectedTRL);
  };

  if (!trl) {
    return null;
  }

  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold mb-2">TRL</h3>
      <select
        value={trl.id}
        onChange={handleTRLChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {trlOptions && trlOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

TRLSelector.propTypes = {
  trl: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
};

TRLSelector.defaultProps = {
  trl: {},
};

export default TRLSelector;
