import { useDispatch, useSelector } from "react-redux";
import authService from "../../appwrite/auth";
import { actions } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  // const login = useSelector((state) => state.auth);

  const logoutHandler = () => {
    authService.logout().then(() => dispatch(actions.logout()));
    // console.log(login.status);
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
