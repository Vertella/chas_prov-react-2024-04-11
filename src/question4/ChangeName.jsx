import React, { useState } from 'react';

const ChangeName = ({ onChangeName }) => {
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    const updatedName = event.target.value;
    setNewName(updatedName);
  };

  const handleNameSubmit = () => {
    // Call the parent component's callback function
    onChangeName(newName);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Byt namn här"
        value={newName}
        onChange={handleNameChange}
      />
      <button onClick={handleNameSubmit}>Ändra</button>
    </div>
  );
};

export default ChangeName;
