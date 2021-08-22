import React from 'react'
import {
  Field,
  Form,
  Formik,
} from 'formik';
import { OptionalObjectSchema } from 'yup/lib/object';
import { RequiredStringSchema } from 'yup/lib/string';
import { AuthFormData } from '../SignIn/SignIn';
import './AuthForm.css';
import CustomInput from '../CustomInput/CustomInput';

interface Props {
  formTitle: string,
  buttonText: string,
  initialValues: AuthFormData,
  validationSchema: OptionalObjectSchema<{
    login: RequiredStringSchema<string | undefined, Record<string, any>>;
    password: RequiredStringSchema<string | undefined, Record<string, any>>;
  }>,
  onSubmit: (email:string) => void,
}

const AuthForm: React.FC<Props> = ({
  formTitle,
  buttonText,
  initialValues,
  validationSchema,
  onSubmit,
}) => {

  const handleSubmit = (values:AuthFormData) => {
    onSubmit(values.login);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {
        ({ isValid, errors, touched, dirty }) => (
          <Form className='auth-form'>
            <h2 className='auth-form__title'>{formTitle}</h2>
            <Field
             isErrorAndTouched={touched.login&&errors.login}
              name='login'
              type='email'
              labelText='Логин'
              component={CustomInput}
            />
            <Field
              isErrorAndTouched={touched.password&&errors.password}
              name='password'
              type='password'
              labelText='Пароль'
              component={CustomInput}
            />
            <button
              className='auth-form__submit'
              disabled={!(isValid && dirty)}
              type='submit'
            >
              {buttonText}
            </button>
          </Form>
        )
      }

    </Formik>
  )
}

export default AuthForm;
