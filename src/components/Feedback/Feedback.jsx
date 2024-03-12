import css from "./Feedback.module.css";

const Feedback = ({ feedback, total }) => {
  const positiveFeedback =
    total !== 0
      ? Math.round(((feedback.good + feedback.neutral) / total) * 100)
      : "😴";

  const emoji = () => {
    if (positiveFeedback >= 90) {
      return "😎";
    } else if (positiveFeedback >= 50) {
      return "😃";
    } else if (positiveFeedback < 50) {
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
            Positive: {positiveFeedback}
            {total ? "%" : ""} {emoji()}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
