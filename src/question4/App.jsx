// 3. Uppdatera ett namn med callback 3p
// En namn ska visas på sidan och namnet ska vara kopplat till useState i App-komponenten.
// Skapa en komponent: ChangeName som har ett inputfält som ska användas för att ändra
// namnet i App-komponenten via en callback-funktion.
import React, {useState} from "react";
import ChangeName from "./ChangeName";

function App() {
    const [name, setName] = useState('Booker Dewitt');

    const changeNameCallback = (newName) => {
        setName(newName);
    }

    return (
        <div>
            <p> {name} </p>
            <ChangeName onChangeName={changeNameCallback} />
        </div>
    );
};

export default App;
