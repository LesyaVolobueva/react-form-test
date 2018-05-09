import React from 'react';
import PropTypes from 'prop-types';
import styles from './field.module.scss';

const Component = ({ name, label, type, onChange, value = '', error }) => {
  return (
    <div className={styles.field}>
      <label
        className={styles.label}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
      {error && <div className='error'>{error}</div>}
    </div>
  );
};

Component.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default Component;
