import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()

  const scrollToCategories = () => {
    navigate('/')
    const categoriesElement = document.getElementById('categories')
    categoriesElement.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='main'>
      <div className='main-content'>
        <div className='mrc'>
          <p className='font-light title' style={{ width: 'fit-content' }}>
            We are happy that you are here!{' '}
          </p>
          <button className='button button-browse' onClick={scrollToCategories}>
            Let's start
          </button>
        </div>
      </div>
      <div className='main-right-div'></div>
    </section>
  )
}

export default Main
