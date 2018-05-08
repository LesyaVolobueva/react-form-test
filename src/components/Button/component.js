import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Component = ({ children, onClick, type }) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Component.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.string,
};

export default Component;
