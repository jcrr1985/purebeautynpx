import React from 'react'
import { useNavigate } from 'react-router-dom'
import mainRightImage from './../assets/images/brooch.jpg'

const Main = () => {
  const navigate = useNavigate()

  const scrollToCategories = () => {
    navigate('/')
    const categoriesElement = document.getElementById('categories')
    categoriesElement.scrollIntoView({ behavior: 'smooth' })
  }

  console.log('mainRightImage', mainRightImage)

  return (
    <div className='main'>
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
      <div
        className='main-right-div'
        style={{
          backgroundImage: `url(${mainRightImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100%',
        }}
      >
        <p className='rotated-text'>
          Here you may find something special for you. Crafts from around the
          world{' '}
        </p>
        {/* <img src={mainRightImage} alt='second logo' /> */}
      </div>
    </div>
  )
}

export default Main
