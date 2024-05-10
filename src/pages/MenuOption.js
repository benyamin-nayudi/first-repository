import React from 'react';

const MenuOption = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Toggle Option</button>
    </div>
  );
};

export default MenuOption;