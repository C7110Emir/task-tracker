import React from 'react';
import Button from './Button';
//import PropTypes from 'prop-types';

const Header = ({ title }) => {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color="purple"
        text="Show Add Task Bar"
        handleClick={handleClick}
      />
    </header>
  );
};

// Header.defaultProps = {
//   title: 'Task Tracker',
// };

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Header;