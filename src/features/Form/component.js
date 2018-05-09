import React from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.scss';
import Field from '../../components/Field';
import ChooseGender from '../../components/ChooseGender';
import ChooseTechnologies from '../../components/ChooseTechnologies';
import SelectCity from '../../components/SelectCity';
import Button from '../../components/Button';
import Results from '../Results';


class Form extends React.Component {
  render() {
    const { user, showData, errors, inputOnChange, showState } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <form action=''>
            <Field
              error={errors.name}
              label='Your name'
              name='name'
              onChange={inputOnChange}
              type='text'
              value={user.name}
            />
            <Field
              error={errors.email}
              label='Your email'
              name='email'
              onChange={inputOnChange}
              type='text'
              value={user.email}
            />
            <Field
              error={errors.birthday}
              label='Your birthday'
              name='birthday'
              onChange={inputOnChange}
              type='date'
              value={user.birthday}
            />
            <ChooseGender
              gender={user.gender}
              onChange={inputOnChange}
            />
            <SelectCity
              onChange={inputOnChange}
              value={user.city}
            />
            <ChooseTechnologies
              error={errors.technologies}
              onChange={inputOnChange}
            />

            <div className={styles.btn}>
              <Button
                onClick={showState}
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

Form.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    birthday: PropTypes.string,
    city: PropTypes.string,
    gender: PropTypes.string,
    technologies: PropTypes.string,
  }),
  showData: PropTypes.shape(Object),
  errors: PropTypes.shape(Object),
  inputOnChange: PropTypes.func,
  showState: PropTypes.func,
};

export default Form;
