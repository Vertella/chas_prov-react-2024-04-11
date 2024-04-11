// 3. Custom Hook useInput (3p)
// Skapa en hook useInput som tar hand om state för ett input-fält.
// useInput ska returnera funktionen för att uppdatera state och
// själva värdet från state.
// Använd sedan useInput i App-komponenten nedan för att spara det man
// skriver in i ett input-fält. Det man skriver in ska visas under inputfältet.
import React, {useState} from "react";
import useInput from "./useInput";

const FavoriteBookInput = () => {
  const favoriteBookInput = useInput("");

  return (
    <div>
      <label htmlFor="favoriteBook">Input favorite Book:</label>
      <input
        type="text"
        id="favoriteBook"
        {...favoriteBookInput}
      />
      <p>Your favorite book: <strong>{favoriteBookInput.value}</strong></p>
    </div>
  );
};


function App() {
  console.log("Favorite book value:", FavoriteBookInput.value);

  return (
    <div>
      <h1>My favorite book</h1>
      <FavoriteBookInput />
  </div>
  );
}

export default App;
