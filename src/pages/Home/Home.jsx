import React from "react";
import css from "./Home.module.css";
import { FaReact } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className={css.wrapp}>
        <div className={css.txtBlock}>
          <p className={css.text}>
            Welcome to my website, where you can register and save your
            important mobile phone numbers for future use. My goal is to create
            a simple and intuitive environment.
          </p>
        </div>
        <div className={css.txtBlockTwo}>
          <FaReact
            style={{
              width: "160px",
              height: "60px",
              margin: "20px",
              color: "#61DBFB",
            }}
          />
          <p className={css.text}>
            The technologies used to create this website include HTML, CSS,
            React for dynamic user interface, Redux for managing the application
            state, Axios for interacting with the server, and React Hot Toast
            for visual notifications.
          </p>
        </div>
        <div className={css.txtBlockThree}>
          <p className={css.text}>
            User-Friendly Interface: Our website features a user-friendly
            interface designed to streamline the process of adding, editing, and
            deleting contacts. With intuitive navigation and clear instructions,
            users can easily navigate through the application and perform tasks
            efficiently. Whether you're a tech-savvy individual or new to
            digital platforms, our user interface ensures a smooth and
            hassle-free experience for all users.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
