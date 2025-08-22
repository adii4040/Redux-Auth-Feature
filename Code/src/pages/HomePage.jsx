import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/authSlice";

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      {!user ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Login to access the feature</h1>
          <Link
            to="/login"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            Hello, welcome <span className="text-blue-600">{user.username}</span> 🎉
          </h1>
          <button
            onClick={() => dispatch(logout())}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
