import { useEffect, useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
const key = "912873u1h231";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const good = () => setFeedback({ ...feedback, good: feedback.good + 1 });
  const neutral = () =>
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  const bad = () => setFeedback({ ...feedback, bad: feedback.bad + 1 });
  const reset = () => {
    setFeedback({ good: 0, bad: 0, neutral: 0 });
    localStorage.removeItem(key);
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  const rate = Math.round(((feedback.good + feedback.neutral) / total) * 100);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(key)) || {
      good: 0,
      bad: 0,
      neutral: 0,
    };
    setFeedback({ ...data });
  }, []);

  useEffect(() => {
    if (total > 0) localStorage.setItem(key, JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        good={good}
        neutral={neutral}
        bad={bad}
        reset={reset}
        total={total}
      />
      {total !== 0 ? (
        <Feedback feedback={feedback} total={total} rate={rate} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
