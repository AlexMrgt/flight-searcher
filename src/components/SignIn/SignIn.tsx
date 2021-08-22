import React from 'react';
import * as Yup from 'yup';
import { validationErrors } from '../../utils/constants';
import AuthForm from '../AuthForm/AuthForm';
import './SignIn.css';

export interface AuthFormData {
  login: string,
  password: string,
}

interface Props {
  onSubmit: (data: string) => void,
}

const SignIn: React.FC<Props> = ({
  onSubmit
}) => {

  const initialValues: AuthFormData = {
    login: '',
    password: '',
  };

  const validationSchema = Yup.object({
    login: Yup
      .string()
      .required(validationErrors.REQUIRED_FIELD)
      .email(validationErrors.INVALID_EMAIL),
    password: Yup
      .string()
      .required(validationErrors.REQUIRED_FIELD)
      .min(8, validationErrors.INVALID_PASSWORD_LENGTH)
      .matches(/^[^А-Яа-я]+$/, validationErrors.INVALID_PASSWORD_SYMBOLS),
  });

  const handleLoginSubmit = (email: string) => {
    onSubmit(email);
  }

  return (
    <section className='sign-in'>
      <div className='sign-in__wrapper'>


        <AuthForm
          formTitle='Simple Flight Check'
          buttonText='Войти'
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLoginSubmit}
        />
      </div>
    </section>
  )
}

export default SignIn;
