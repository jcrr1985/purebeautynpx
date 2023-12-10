import { useEffect } from 'react'
import DealButton from './DealButton'
import { Link } from 'react-router-dom'

const CongratulationMessage = ({ setItemCounters }) => {
  useEffect(() => {
    setItemCounters({})
  }, [setItemCounters])

  useEffect(() => {
    // Scroll down to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight)
  }, [])

  return (
    <div className='congratulationsMessage-content-wrapper'>
      <p className='text-italianno'>Thank you for purchase</p>
      <Link to='/'>
        <DealButton message='Continue' />
      </Link>
    </div>
  )
}

export default CongratulationMessage
