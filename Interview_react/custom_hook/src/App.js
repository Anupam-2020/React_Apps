import './App.css';
import useApi from './useApi';
import useCounter from './useCounter';

function App() {
  const {count, increment, decrement} = useCounter(10);
  const {apiData} = useApi("https://fakestoreapi.com/users");

  console.log(apiData)
  
  return (
    <div className="App">
      <p>Counter - {count}</p>
      <button onClick={increment}>Incement</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        {apiData?.map((data) => {
          return (
            <p>{data.username}</p>
          )
        })}
      </div>
    </div>
  );
}
 
export default App;
