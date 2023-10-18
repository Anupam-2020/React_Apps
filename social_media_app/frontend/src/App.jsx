import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/blogs' element={<Blogs />}/>
          <Route path='/myBlogs' element={<UserBlogs />}/>
          <Route path='/myBlog/:id' element={<BlogDetails />}/>
          <Route path='/blog/add' element={<AddBlog />}/>
        </Routes>
      </main>
    </Provider> 
  );
}

export default App;
