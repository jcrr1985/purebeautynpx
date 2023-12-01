import { Height } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import React, { useEffect } from 'react'

const ItemsInCheckout = ({ cart, removeFromCart }) => {
  useEffect(() => {
    //get Height of sibling form

    const formHeight = document.querySelector(
      '.checkout-form--form',
    ).clientHeight
    console.log('formHeight', formHeight)

    document.querySelector(
      '.items-in-checkout',
    ).style.height = `${formHeight}px`
  }, [])

  return (
    <div
      className='items-in-checkout'
      style={{ overflowY: 'scroll', overflowX: 'hidden' }}
    >
      {cart.map((item, index) => (
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            minWidth: 500,
            margin: '1rem auto',
            padding: '2rem',
          }}
          key={index}
          style={{ marginBottom: '1rem' }}
        >
          <img
            src={item.imageSrc}
            alt={item.name}
            style={{ maxWidth: '100px', marginRight: '1rem' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography variant='body2'>Name: {item.name}</Typography>
              <Typography variant='body2'>Qty: {item.quantity}</Typography>
              <Typography variant='body2'>Size: {item.size}</Typography>
              <Typography variant='body2'>Price: {item.price}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size='small'
                onClick={() => removeFromCart(item)}
                xs={{ color: 'black' }}
              >
                Remove
              </Button>
            </CardActions>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default ItemsInCheckout
