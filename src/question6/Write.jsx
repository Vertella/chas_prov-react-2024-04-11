import React, { useContext } from 'react';
import NewContext from './NewContext';

function Write() {
  const { setGlobalText } = useContext(NewContext);

  const handleInputChange = (e) => {
    setGlobalText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Skriv här..."
      />
    </div>
  );
}

export default Write;
