import React from 'react'
import { ErrorMessage, FieldProps } from 'formik'
import TextError from '../TextError/TextError';

interface Props extends FieldProps {
  labelText: string,
  type: string,
  isErrorAndTouched: boolean,
}

const CustomInput: React.FC<Props> = ({
  labelText,
  type,
  field,
  isErrorAndTouched,
}) => {

  return (
    <div className='auth-form__input-container'>
      <label className={`auth-form__label ${isErrorAndTouched ? 'auth-form__label_error' : ''}`} >
        {labelText}
      </label>
      <input
        {...field}
        className={`auth-form__input ${isErrorAndTouched ? 'auth-form__input_error' : ''}`}
        type={type}
      />
      <ErrorMessage
        name={field.name}
        component={TextError}
      />
    </div>
  )
}

export default CustomInput;
