import { useState } from 'react';
import './App.css';

const countries = [
  {name: 'India', id: 'IN', cities: ['Delhi', 'Mumbai']},
  {name: 'USA', id: 'US', cities: ['Los Angeles', 'New York']},
  {name: "Nepal", id: "NEP", cities: ['Kathmandu']}
];


function App() {
  const [cities, setCities] = useState(["Delhi"]);


  const selectHanlder = (event) => {
    console.log(event.target.value);
    const selectedCounty = countries.find((country) => country.name === event.target.value)
    setCities(selectedCounty.cities)
  }

  return (
    <div className="App">
      <select onChange={selectHanlder}>
        {countries.map((country) => {
          return (
            <option>{country.name}</option>
          )
        })}
      </select>
      <select>
        {cities.map((city) => {
          return (
            <option>
              {city}
            </option>
          )
        })}
      </select>
    </div>
  );
}

export default App;
