import React, { useState } from 'react'
import { StyledToolBar } from './styled'
import { useHistory } from 'react-router-dom'
import { goToFeed, goToLogin } from '../../routes/coordinator'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'


const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token")
  const history = useHistory()
  const logout = () => {
    localStorage.removeItem('token')
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() => goToFeed(history)} color="inherit">Labeddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolBar>
      </AppBar>
  );
}

export default Header

