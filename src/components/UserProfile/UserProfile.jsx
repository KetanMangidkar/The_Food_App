import React from "react";
import { Link } from "react-router-dom";
import me from "../../reqFiles/me.jpeg";
import { MdDashboardCustomize } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user";

const UserProfile = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="userProfile">
      <main>
        <img src={me} alt="User" />
        <h5>Ketan Mangidkar</h5>
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
        <div>
          <Link to="/orders">My Order</Link>
        </div>
        <button onClick={logoutHandler}>Logout</button>
      </main>
    </section>
  );
};

export default UserProfile;
