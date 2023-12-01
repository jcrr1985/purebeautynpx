import React from 'react'
import { Link, Tooltip } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

const TooltipComponent = ({ tooltipContent }) => {
  return (
    <Tooltip
      title={tooltipContent}
      arrow
      placement='bottom'
      className='tooltip-login'
    >
      <Link to='/login'>
        <AccountCircle />
      </Link>
    </Tooltip>
  )
}

export default TooltipComponent
