// 2. Visa lista med Posts (Inlägg) via API-Anrop (3p)
// Hämta post-data från https://jsonplaceholder.typicode.com/posts.
// Komponenten ska visa titlarna på de första 10 posts.
// Varje titel ska ha en knapp märkt "Visa detaljer".
// När denna knapp klickas på, ska inläggets body visas under sin titel.
import { useState, useEffect } from "react";


function App() {
  const [posts, setPosts] = useState([]);
  const [details, setDetails] = useState(false);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  function handleShowMore(id) {
    setDetails((prevId) => (prevId === id ? null : id));
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            {details === post.id && <p>{post.body}</p>}
            <button type="button" onClick={() => handleShowMore(post.id)}>
              {details === post.id ? "visa mindre" : " visa detaljer"}
            </button>
          </li>

        ))}
      </ul>
    </div>
  );
};



export default App;
