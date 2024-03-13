import css from "./Feedback.module.css";

const Feedback = ({ feedback, total, rate }) => {
  const emoji = () => {
    if (rate >= 90) {
      return "😎";
    } else if (rate >= 50) {
      return "😃";
    } else if (rate < 50) {
      return "🤬";
    }
  };

  // ----------------------------------------------------------
  return (
    <div>
      <ul className={css.feedbackList}>
        <li>
          <p>Good: {feedback.good}</p>
        </li>
        <li>
          <p>Neutral {feedback.neutral}</p>
        </li>
        <li>
          <p>Bad: {feedback.bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>
            Positive: {rate}
            {total ? "%" : ""} {emoji()}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
