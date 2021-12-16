import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'; 

// PLACEHOLDER API FOR TESTING -  https://jsonplaceholder.typicode.com/posts


function App() {

  const [hello, setHello] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
      { hello ? <div>{hello}</div> : null }
    </div>
  );
}

export default App;
