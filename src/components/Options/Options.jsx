import css from "./Options.module.css";
import { useState } from "react";

const Options = ({ good, neutral, bad, reset, total }) => {
  return (
    <div>
      <ul className={css.btnList}>
        <li>
          <button onClick={good} type="button">
            Good
          </button>
        </li>
        <li>
          <button onClick={neutral} type="button">
            Neutral
          </button>
        </li>
        <li>
          <button onClick={bad} type="button">
            Bad
          </button>
        </li>
        {total !== 0 && (
          <li>
            <button onClick={reset} type="button">
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
