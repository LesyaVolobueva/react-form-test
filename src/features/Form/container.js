import React from 'react';
import Component from './component';

class Container extends Component {
  state = {
    user: {
      name: '',
      email: '',
      gender: 'female',
      city: 'Kyiv',
      technologies: '',
    },
    errors: {},
    showData: null,
  };

  componentWillMount() {
    this.setState({
      user: {
        ...this.state.user,
        birthday: this.getDate(),
      },
    });
  }

  changeTechnologies = (name, value) => {
    const list = this.state.user[name]
      ? this.state.user[name].split(', ')
      : [];

    if (list.includes(value)) {
      return list.filter(item => item !== value).join(', ');
    }
    return [...list, value].join(', ');
  };

  inputOnChange = (event) => {
    const { name, value, type } = event.target;

    if (type !== 'checkbox') {
      this.setState({
        user: {
          ...this.state.user,
          [name]: value,
        },
      });
    } else {
      this.setState({
        user: {
          ...this.state.user,
          [name]: this.changeTechnologies(name, value),
        },
      });
    }
  };

  getDate = () => {
    const date = new Date();
    let day = date.getDate();
    day = day > 10 ? `${day}` : `0${day}`;
    let month = date.getMonth() + 1;
    month = month > 10 ? `${month}` : `0${month}`;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  };

  validate = () => {
    const errors = {};
    const { name, email, birthday, technologies } = this.state.user;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!name) {
      errors.name = 'Enter the name';
    } else if (!/^[a-z ,.'-]+$/i.test(name)) {
      errors.name = 'invalid name';
    }

    if(!email) {
      errors.email = 'Enter the email';
    } else if (!emailRegex.test(email)) {
      errors.email = 'invalid email';
    }

    if(!birthday) {
      errors.birthday = 'Enter the birthday';
    }

    if(!technologies) {
      errors.technologies = 'Choose the technologies';
    }

    this.setState({
      errors,
    });

    return JSON.stringify(errors) === JSON.stringify({});
  };

  showState = () => {
    if (this.validate()) {
      this.setState({
        showData: { ...this.state.user },
      });
    }
  };

  render() {
    return (
      <div>
        <Component
          errors={this.state.errors}
          inputOnChange={this.inputOnChange}
          showData={this.state.showData}
          showState={this.showState}
          user={this.state.user}
        />
      </div>
    );
  }
}


export default Container;

