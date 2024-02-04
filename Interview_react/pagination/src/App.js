import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)


  async function getProducts() {
    fetch(`https://dummyjson.com/products?limit=100`)
    .then(response => response.json())
    .then(data => {
      console.log(data.products)
      setProducts(data.products)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getProducts()
  },[])

  return (
    <>
    <div className="App">
      {products.slice((page-1)*10, (page-1)*10+10).map((data) => {
        return (
          <div className='api_data'>
              <p>{data.title}</p>
              <img src={data.images[0]} alt={data.brand} style={{width: "200px", height: "200px"}}/>
          </div>
        )
      })}
    </div>
    <div className='page'>
        <p onClick={() => setPage(page => page > 1 ? page - 1 : 1)} className='arrow'>◀️</p>
        <p>{page}</p>
        <p onClick={() => setPage(page => page < 9 ? page + 1 : 10)} className='arrow'>▶️</p>
      </div>
    </>
  );
}

export default App;