import React from "react";
import { Link } from "react-router-dom";
import me from "../../reqFiles/me.jpeg";
import { MdDashboardCustomize } from "react-icons/md";

const UserProfile = () => {
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
        <button>Logout</button>
      </main>
    </section>
  );
};

export default UserProfile;
