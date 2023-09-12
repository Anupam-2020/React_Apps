import './App.css';
import Pagination from './Pagination';
import Search from './Search';
import Stories from './Stories';

function App() {
  return (
    <div className='news-app'>
      <h2>Welcome to news-application.</h2>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App;
