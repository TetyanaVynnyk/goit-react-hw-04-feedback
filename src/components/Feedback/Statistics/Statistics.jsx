import PropTypes from 'prop-types';

import styles from '../feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <p className={styles.statistics}>Good:{good}</p>
      <p className={styles.statistics}>Neutral:{neutral}</p>
      <p className={styles.statistics}>Bad:{bad}</p>
      <p className={styles.statistics}>Total:{total}</p>
      <p className={styles.statistics}>Positive feedback:{positiveFeedback}%</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
