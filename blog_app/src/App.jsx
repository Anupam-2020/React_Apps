import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { actions } from "./store/authSlice";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  async function getCurrUser() {
    try {
      const user = await authService.getCurrentUser();
      if (user) {
        console.log(user);
        dispatch(actions.login({ user }));
      } else {
        console.log("error");
        dispatch(actions.logout());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // getCurrUser();

      authService.getCurrentUser()
      .then(user => {
        console.log(user);
        dispatch(actions.login({ user }));
      })
      .finally(() => {
        setLoading(false)
        console.log(loading);
      })
      .catch(error => console.log(error))
  }, []);

  return !loading && (
    <div className="min-h-screen flex flex-wrap content-between bg-grey-400">
       <div>
        <Header />
        <main>
          TODO <Outlet />
        </main>
        <Footer />
       </div>
    </div>
  )
}

export default App;
