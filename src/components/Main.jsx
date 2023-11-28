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
    <div className='main'>
      <div className='main-content'>
        <p className='font-light title'>We are happy that you are here! </p>
        <h3 className='font-light sub-title' style={{ marginTop: '-30px' }}>
          Here you will find something special for you.
        </h3>
        <p>
          <button className='button button-browse' onClick={scrollToCategories}>
            Let's start
          </button>
        </p>
      </div>
    </div>
  )
}

export default Main
