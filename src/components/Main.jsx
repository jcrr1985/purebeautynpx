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
        <h3 className='font-light'>Special moment</h3>
        <h1 className='font-light font-title'>Time to create your </h1>
        <h1 className='font-light font-title' style={{ marginTop: '-30px' }}>
          own style
        </h1>
        <p>
          <button className='button button-browse' onClick={scrollToCategories}>
            Browse
          </button>
          <button className='button button-customize'>Customize</button>
        </p>
      </div>
    </div>
  )
}

export default Main
