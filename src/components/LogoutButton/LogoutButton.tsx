import React from 'react'
import './LogoutButton.css';

interface Props {
  onLogout: () => void
}

export const LogoutButton: React.FC<Props> = ({
  onLogout
}) => {

  const handleLogoutClick =() =>{
    onLogout();
  }

  return (
    <button
      className='logout-btn'
      type='button'
      onClick={handleLogoutClick}
    >
      Выйти
    </button>
  )
}
