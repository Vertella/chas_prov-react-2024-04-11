// Återanvändbara komponenter 3p
// 1. Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

// 2. Skapa en komponent ButtonWithChildren som använder children istället
// för en title prop. Använd den 2 gånger med olika title och color.

// 3. Skapa en komponent Article som tar en title och en text som props
// Använd komponenten 2 gånger med olika title och text.
import React from "react";

const Button = ({ color, title }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {title}
    </button>
  );
};

const ButtonWithChildren = ({color, children}) => {
  return (
    <button
    style={{
      backgroundColor: color,
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }}
    >
      {children}
    </button>
  );
};

const Article = ({title, text}) => {
  return (
    <div className="article">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};


function App() {
  return <div>
    <Button color="red" title="Button 1" />
    <Button color="purple" title="Button 2" />

    <ButtonWithChildren color="green">
      Button 3
    </ButtonWithChildren>
    <ButtonWithChildren color="green">
      Button 4
    </ButtonWithChildren>

    <Article
    title="Bioshock"
    text="Down in the deep dark sea lies the city of Rapture.  It's purpose: To be the ultimate Utopia for whoever could afford to come. What it turned out to be: A Dystopian reminder of the infinite greed among people."
    />

    <Article
    title="Bioshock Infinite"
    text="Songbird, Songbird see him fly, drop the children from the sky, when the young ones misbehave, escorts children to their grave. Never back-talk, never lie, or he'll drop you from the sky! "
    />
  </div>;
}

export default App;
