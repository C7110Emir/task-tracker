import React from 'react';
import Button from './Button';
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
export default Header;
