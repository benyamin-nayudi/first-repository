import React, { useState } from 'react';
import ComponentToToggle from './ComponentToToggle';
import MenuOption from './MenuOption';
const ParentComponent = () => {
  const [showComponent, setShowComponent] = useState(true);
  const toggleOption = () => {
    setShowOption(!showOption);
  };
  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Component
      </button>
      {showComponent && <ComponentToToggle />}
    </div>
  );
};

export default ParentComponent;