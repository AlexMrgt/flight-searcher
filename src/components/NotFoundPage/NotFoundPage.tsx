import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundPage.css';

 const NotFoundPage = () => {
  return (
    <section className='not-found'>
      <h1 className='not-found__title'>
        404
      </h1>
      <p className='not-found__description'>
        Похоже, этой страницы не существует. Пожалуйста, проверьте URL-адрес в адресной строке
      </p>
      <Link
        className='not-found__return-link'
        to='/'
      >
        Назад
      </Link>
    </section>
  )
}

export default NotFoundPage;
