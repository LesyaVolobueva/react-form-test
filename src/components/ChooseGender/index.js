import React from 'react';
import PropTypes from 'prop-types';
import styles from './chooseGender.module.scss';

const Component = ({ gender, onChange, error }) => {
  const genders = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    }];
  return (
    <div className={styles.block}>
      <label className={styles.blockLabel}>Gender</label>
      <div className={styles.block}>
        {genders.map((element, index) => (
          <div
            className={styles.radioItem}
            key={index}
          >
            <label
              className={styles.label}
              htmlFor={element.value}
            >
              {element.label}
            </label>
            <input
              checked={gender === element.value}
              id={element.value}
              name='gender'
              onChange={onChange}
              type='radio'
              value={element.value}
            />
          </div>
        ))}
      </div>
      {error && <div className='error'>{error}</div>}
    </div>
  );
};

Component.propTypes = {
  onChange: PropTypes.func,
  gender: PropTypes.string,
  error: PropTypes.string,
};

export default Component;
