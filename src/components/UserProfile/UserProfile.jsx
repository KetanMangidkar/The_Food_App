import React from "react";
import { Link } from "react-router-dom";
// import me from "../../reqFiles/me.jpeg";
import { MdDashboardCustomize } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/user";
import Loader from "../Layouts/Loader";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="userProfile">
      {loading === false ? (
        <main>
          <img src={user.photo} alt="User" />
          <h5>{user.name}</h5>
          {user.role === "admin" && (
            <div>
              <Link
                to="/admin/dashboard"
                style={{
                  borderRadius: 0,
                  backgroundColor: "rgb(40,40,40)",
                }}
              >
                <MdDashboardCustomize />
                Dashboard
              </Link>
            </div>
          )}
          <div>
            <Link to="/orders">My Order</Link>
          </div>
          <button onClick={logoutHandler}>Logout</button>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default UserProfile;
