import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToAdminHomePage, goToHomePage, goToLastPage, goToLoginPage } from '../routes/coordinator'

//Para fazermos login como administrador

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-itens: center;
    padding: 80px 40px;
    height: 100vh;
    background-color: #faebcf;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itens: center;
    text-align: center;
    padding: 40px;
    height: 600px;
    width: 400px;
    background-color: white;
    border-radius: 10px;

`
const Title = styled.h1`
    color: orange;
    font-size: 50px;
`
const Phrase1 = styled.h2`
    font-weight: light;
`
const RocketIcon = styled.img`
    object-fit: contain;
    height: 150px;
    width: 150px;
    margin-left: 80px;
    margin-top: 80px;
    float: center;
`
const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-itens: center;
    text-align: left;
    margin: 200px 40px 0px 40px;
    padding: 0px 40px 0px 40px;
    height: 230px;
    width: 400px;
    background-color: #f2e4c9;
    border-radius: 10px;
    border: 1px solid orange;
`
const LabeXButton = styled.button`
    background-color: orange;
    color: white;
    float: left;
    padding: 10px;
    margin-left: 60px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
`
const InputAdminContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
    width: 100%;
    height: 100px;
`
const InputAdmin = styled.input`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
`
const AdminLoginParagraph = styled.p`
    color: #db7f32;
    font-weight: bold;
`

const LoginPage = () => {
    const history = useHistory()

    return(
        <HomePageContainer>
            <TitleContainer>
                <Title>LabeX</Title>
                <Phrase1>Viaje com a pioneira em turismo interplanetário</Phrase1>
                <RocketIcon 
                src="https://www.flaticon.com/svg/vstatic/svg/1063/1063231.svg?token=exp=1618256284~hmac=b8ee34ff54348ef76725265468411d38" 
                alt="rocket" />
            </TitleContainer>
        
            <LoginContainer>
                <InputAdminContainer>
                    <AdminLoginParagraph>Área Exclusiva</AdminLoginParagraph>
                    <InputAdmin type="email" placeholder="Digite seu e-mail" />
                    <InputAdmin type="password" placeholder="Digite sua senha"/>
                        <div>
                            <LabeXButton onClick={() => goToAdminHomePage(history)}>Entrar</LabeXButton>
                            <LabeXButton onClick={() => goToLastPage(history)}>Voltar</LabeXButton>
                        </div>
                </InputAdminContainer>
            </LoginContainer>
        </HomePageContainer>
    )
}

export default LoginPage