import React from 'react';
// import PropTypes from 'prop-types';
import styles from './form.module.scss';
import Field from '../../components/Field';
import ChooseGender from '../../components/ChooseGender';
import ChooseTechnologies from '../../components/ChooseTechnologies';
import SelectCity from '../../components/SelectCity';
import Button from '../../components/Button';
import Results from '../Results';


class Form extends React.Component {
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
    const { user, showData, errors } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <form action=''>
            <Field
              error={errors.name}
              label='Your name'
              name='name'
              onChange={this.inputOnChange}
              type='text'
              value={user.name}
            />
            <Field
              error={errors.email}
              label='Your email'
              name='email'
              onChange={this.inputOnChange}
              type='text'
              value={user.email}
            />
            <Field
              error={errors.birthday}
              label='Your birthday'
              name='birthday'
              onChange={this.inputOnChange}
              type='date'
              value={user.birthday}
            />
            <ChooseGender
              gender={user.gender}
              onChange={this.inputOnChange}
            />
            <SelectCity
              onChange={this.inputOnChange}
              value={user.city}
            />
            <ChooseTechnologies
              error={errors.technologies}
              onChange={this.inputOnChange}
            />

            <div className={styles.btn}>
              <Button
                onClick={this.showState}
                type='button'
              >
                Send
              </Button>
            </div>
          </form>
        </div>
        <div className={styles.results}>
          {showData &&
          <Results
            user={showData}
          />
          }
        </div>

      </div>
    );
  }
}

export default Form;
