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
      console.log(loading);
    }
  }

  useEffect(() => {
    getCurrUser();
      // authService.getCurrentUser()
      // .then(user => {
      //   console.log(user);
      //   if(user) {
      //     dispatch(actions.login({ user }));
      //   } else {
      //     dispatch(actions.logout());
      //   }
      // })
      // .finally(() => {
      //   setLoading(false)
      //   console.log(loading);
      // })
      // .catch(error => console.log(error))
  }, []);

  return !loading && (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
       <div className="w-full block">
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        {/* <Footer /> */}
       </div>
    </div>
  )
}

export default App;
