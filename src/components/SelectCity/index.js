import React from 'react';
import PropTypes from 'prop-types';
import styles from './selectCity.module.scss';

const SelectCity = ({ onChange, value }) => {
  const cities = ['Kyiv', 'Dnipro', 'Kharkiv', 'Vinnytsia', 'Lviv'];
  return (
    <div className={styles.block}>
      <label
        className={styles.label}
        htmlFor='city'
      >Your city</label>
      <select
        className={styles.select}
        id='city'
        name='city'
        onChange={onChange}
        value={value}
      >
        {cities.map((city, index) => (
          <option
            key={index}
            value={city}
          >{city}</option>
        ))}
      </select>
    </div>
  );
};

SelectCity.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SelectCity;
