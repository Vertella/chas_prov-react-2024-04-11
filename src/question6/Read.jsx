import React, { useContext } from 'react';
import NewContext from './NewContext';

function Read() {
  const { globalText } = useContext(NewContext);

  return (
    <div>
      <p>Text från Write komponenten:</p>
      <p>{globalText}</p>
    </div>
  );
}

export default Read;
