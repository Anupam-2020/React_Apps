import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [apiData, setApiData] = useState([]);
  const [input, setInput] = useState("");

  async function getApiData() {
    try {
      const data = await fetch(`https://dummyjson.com/products/category/${input}`)
      const jsonResponse = await data.json()
      setApiData(jsonResponse.products);
      console.log(jsonResponse.products);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const id = setTimeout(() => {
      getApiData()
    },800)
    
    return () => {
      clearTimeout(id)
    }

  },[input])

  function inputHandler(event) {
    setInput(event.target.value)
  }

  return (
    <div>
      <input placeholder='Search' type='text' onChange={inputHandler}/>
      {apiData && apiData.map((data) => {
        return (
          <div key={data.id}>
            {data.title}
          </div>
        )
      })}
    </div>
  );
}

export default App;