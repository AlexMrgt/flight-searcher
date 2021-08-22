import React from 'react'

import './TextError.css';

const TextError:React.FC = ({
  children,
}) => {
  return (
    <p className='text-error'>
      {children}
    </p>
  )
}

export default TextError;
