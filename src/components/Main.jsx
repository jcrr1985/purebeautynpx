import React from 'react'
import { useNavigate } from 'react-router-dom'
import mainRightImage from './../assets/images/main-right-img.png'

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
      <div className='main-right-div'>
        <p className='rotated-text'>
          Here you may find something special for you. Crafts from around the
          world{' '}
        </p>
        <img src={mainRightImage} alt='second logo' />
      </div>
    </div>
  )
}

export default Main
