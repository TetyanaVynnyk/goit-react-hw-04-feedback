import PropTypes from "prop-types";

import styles from '../feedback.module.css';

const FeedbackOptions = ({ options, increaseVotes }) => {
  const elements = options.map(name => <li key={name} >
    <button className={styles.btn} onClick={() => increaseVotes(name)} type="button">{name}</button>
</li>)
  return (
    <>
      <ul className={styles.btnWrapper}>
        {elements}
      </ul>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  increaseVotes: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}