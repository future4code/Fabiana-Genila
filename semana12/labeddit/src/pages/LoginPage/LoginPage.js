import { Button } from '@material-ui/core'
import React from 'react'
import logo from '../../assets/logo.png'
import { ScreenContainer, LogoImage, SignUpButtonContainer } from './styled'
import { goToSignUp } from '../../routes/coordinator'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
                <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
                <Button 
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Não possui conta? Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage
