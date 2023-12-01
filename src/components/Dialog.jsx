import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import React from 'react'

const DialogComponent = ({
  inputs,
  isLoginModalOpen,
  closeLoginModal,
  handleLogin,
  username,
  password,
}) => {
  return (
    <Dialog open={isLoginModalOpen} onClose={closeLoginModal}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        {inputs.map((input) => (
          <TextField
            label={input.label}
            type={input.type}
            onChange={(e) => input.onChange(e.target.value)}
            fullWidth
            margin='normal'
          />
        ))}

        <Button
          fullWidth
          variant='contained'
          color='primary'
          onClick={() => {
            handleLogin(username, password)
          }}
        >
          Login
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default DialogComponent
