import React from 'react';
import PropTypes from 'prop-types';
import styles from './results.module.scss';

const Component = ({ user, convertLabel }) => (
  <div>
    {Object.keys(user).map((value, index) => (
      <div
        className={styles.stateItem}
        key={index}
      >
        <div className={styles.stateLabel}>
          {convertLabel(value)}
        </div>
        <div className={styles.stateValue}>
          {user[value]}
        </div>
      </div>
    ))
    }
  </div>
);

Component.propTypes = {
  user: PropTypes.shape({
    gender: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
  }),
  convertLabel: PropTypes.func,
};

export default Component;
