import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { useState, useEffect } from "react";
import { addTocart, remove } from "./utility/fakeDb";

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const clickBtn = (id) => {
    addTocart(id);
  };

  const removeItem = (id) => {
    remove(id)
  };

  return (
    <div className="container mx-auto">
      {post.map((data) => (
        <div>
          <h1>Nmae:{data.name}</h1>
          <h5>User Name:{data.username}</h5>
          <p>Email:{data.email}</p>
          <button
            onClick={() => {
              clickBtn(data.id);
            }}
          >
            add to cart
          </button>
          <button
            onClick={() => {
              removeItem(data.id);
            }}
          >
            remove item
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
