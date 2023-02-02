import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

import styles from './feedback.module.css';

const Feedback = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const increaseVotes = name => {
    setVotes(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  const total = votes.good + votes.neutral + votes.bad;
  // Функція може бути використана для підрахунку будь-якого виду оцінки
  const countFeedbackPercentage = propName => {
    if (!total) {
      return 0;
    }
    const value = votes[propName];
    const result = Math.round((value / total) * 100);
    return Number(result);
  };

  const positiveFeedback = countFeedbackPercentage('good');

  return (
    <div className={styles.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(votes)}
          increaseVotes={increaseVotes}
        />
      </Section>
      {total ? (
        <Section title="Statistics">
          <Statistics
            good={votes.good}
            neutral={votes.neutral}
            bad={votes.bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default Feedback;
