import PropTypes from "prop-types";

import styles from './section.module.css';

const Section = ({ children, title }) => {
  return (
    <div className={styles.feedbacSection}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

export default Section;

Section.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}