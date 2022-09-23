import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../reqFiles/me.jpeg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>The Food App</h4>
          <p>We are The Food App. The place for test the various Dishes.</p>
          <p>
            Explore the various type of food and the Dishes. Click below to see
            the Menu
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Ketan Mangidkar</h3>
            </div>
            <p>
              An ambitious and Self-motivated full stack web developer.
              Self-disciplined and goal-oriented professional capable of
              completing assignments within a given timeline. Team collaborator
              with good communication and interpersonal skills who can adapt to
              new ideas and create innovative solutions. Look forward to working
              on a challenging project in a growth oriented organisation.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
