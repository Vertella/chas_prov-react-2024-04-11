// 1. En lista med filmer (3p)
// Sidan ska visa en lista med filmer
// Användaren ska kunna lägga till nya filmer i listan genom att skriva in filmens namn
// i ett inputfält och sedan klicka på en "Lägg till"-knapp.
// Varje film i listan ska ha en ta bort knapp som tar bort den filmen ur listan
import React from "react";

const initialMovies = [
  {
    id: '1',
    title: 'Prometheus'
  },
  {
    id: '2',
    title: 'Interstellar'
  },
  {
    id: '3',
    title: 'Sinbad'
  },
];


function App() {
  const [movies, setMovies] = React.useState(initialMovies);
  const [title, setTitle] = React.useState('');

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleAdd() {
    const newMovies = movies.concat({ title })
    
    setMovies(newMovies);
  }

  function handleRemove(id) {
    const newMovies = movies.filter((item) => item.id !== id);
    setMovies(newMovies);
  }

  return (
  <div>
    <div>
      <input type="text" value={title} onChange={handleChange} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>

    <ul>
      {movies.map((item) => (
        <li key={item.id}>
          {item.title}
          <button type="button" onClick={() => handleRemove(item.id)}>
            Remove
          </button></li>
      ))}
    </ul>
  </div>
  );
};

export default App;
