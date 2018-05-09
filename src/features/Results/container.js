import React from 'react';
import PropTypes from 'prop-types';
import Component from './component';


class Container extends React.Component {
  convertLabel = (label) => {
    return `${label.charAt(0).toUpperCase()}${label.substr(1)}`;
  };

  render() {
    return (
      <div>
        <Component
          convertLabel={this.convertLabel}
          user={this.props.user}
        />
      </div>
    );
  }
}

Container.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    birthday: PropTypes.string,
    city: PropTypes.string,
    gender: PropTypes.string,
    technologies: PropTypes.string,
  }),
};

export default Container;
