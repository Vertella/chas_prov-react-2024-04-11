// 6. Global state med Redux eller Context (3p)
// Skapa två komponenter: En som heter Read och en som heter Write.
// Write ska ha ett inputfält och det som skrivs ska sparas i global state.
// Read ska visa en valfri text som skrivs i Write.
// Read ska visa det som sparas i global state.
// Lägg in Read och Write komponenterna i App-komponenten.

import React from 'react';
import Write from './Write';
import Read from './Read';
import NewContext from './NewContext';

function App() {
  const [globalText, setGlobalText] = React.useState('');

  return (
    <NewContext.Provider value={{ globalText, setGlobalText }}>
    <div className='App'>
      <Write />
      <Read />
    </div>
    </NewContext.Provider>

  );
}

export default App;
