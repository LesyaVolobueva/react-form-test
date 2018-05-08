import React from 'react';
import PropTypes from 'prop-types';
import styles from './results.module.scss';

class Component extends React.Component {
  convertLabel = (label) => {
    return `${label.charAt(0).toUpperCase()}${label.substr(1)}`;
  };

  render() {
    const { user } = this.props;

    return (
      <div>
        {Object.keys(user).map((value, index) => (
          <div
            className={styles.stateItem}
            key={index}
          >
            <div className={styles.stateLabel}>
              {this.convertLabel(value)}
            </div>
            <div className={styles.stateValue}>
              {user[value]}
            </div>
          </div>
        ))
        }
      </div>
    );
  }
}

Component.propTypes = {
  user: PropTypes.shape({
    gender: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
  }),
};

export default Component;
