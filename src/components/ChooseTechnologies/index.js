import React from 'react';
import PropTypes from 'prop-types';
import styles from './chooseTechnologies.module.scss';

const Component = ({ onChange, error }) => {
  const technologies = ['HTML5', 'SCSS', 'CSS', 'Java', 'ES6', 'C#', 'Webpack', 'NodeJS', 'Assembler'];

  return (
    <div className={styles.block}>
      <label className={styles.blockLabel}>Choose technologies</label>
      <div className={styles.block}>
        {technologies.map((element, index) => (
          <div
            className={styles.checkboxItem}
            key={index}
          >
            <input
              id={element}
              name='technologies'
              onChange={onChange}
              type='checkbox'
              value={element}
            />
            <label
              className={styles.label}
              htmlFor={element}
            >
              {element}
            </label>
          </div>
        ))}
      </div>
      {error && <div className='error'>{error}</div>}
    </div>
  );
};

Component.propTypes = {
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default Component;
