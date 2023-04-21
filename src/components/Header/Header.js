import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../SvgComponents/Logo';

const Header = ({ mainColor }) => {
  const headerStyle = mainColor ? { backgroundColor: mainColor } : '';

  return (
    <header className="text-white p-4" style={headerStyle}>
      <a href="/">
        <Logo />
      </a>
    </header>
  );
};

Header.propTypes = {
  mainColor: PropTypes.string,
};

Header.defaultProps = {
  mainColor: '',
};

export default Header;
