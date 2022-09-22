import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GoBriefcase } from "react-icons/go";

function Footer() {
  return (
    <footer>
      <div>
        <h2>The Food App</h2>
        <p>
          We are trying to give you the best food with the teste with hygiene...
        </p>
        <br />
        <em>We like to see your valuable feedback.</em>
        <strong>All recived @TheFoodapp</strong>
      </div>
      <aside>
        <h4>Follow On</h4>
        <a href="https://www.linkedin.com/in/mangidkar-ketan/">
          <AiFillLinkedin></AiFillLinkedin>
        </a>
        <a href="https://portfolio-ten-inky-34.vercel.app/">
          <GoBriefcase></GoBriefcase>
        </a>
        <a href="https://github.com/KetanMangidkar">
          <AiFillGithub></AiFillGithub>
        </a>
      </aside>
    </footer>
  );
}

export default Footer;
