import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="errorpage">
      <main>
        <div>
          <MdError />
          <h1>404</h1>
        </div>
        <p>Page not Fount, click below to go to homepage</p>
        <Link to="/">Go to Home</Link>
      </main>
    </section>
  );
};

export default Error;
