import React from "react";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.txtBlock}>
      <ul className={css.textList}>
        <li>
          <p className={css.text}>
            Welcome to my website, where you can register and save your
            important mobile phone numbers for future use. My goal is to create
            a simple and intuitive environment.
          </p>
        </li>
        <li>
          <p className={css.text}>
            The technologies used to create this website include HTML, CSS,
            React for dynamic user interface, Redux for managing the application
            state, Axios for interacting with the server, and React Hot Toast
            for visual notifications.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Home;
