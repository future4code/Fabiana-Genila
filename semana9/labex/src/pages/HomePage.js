import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator'

//Para o usuário escolher entre Área Administrativa e Lista de Viagens

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
    padding: 20px 40px 0px 40px;
    height: 250px;
    width: 400px;
    background-color: #f2e4c9;
    border-radius: 10px;
    border: 1px solid orange;
    color: #b85809;
`
const SeeLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    padding-top: 20px;
    padding-bottom: 10px;
    width: 90%;
    height: 100px;
`
const SeeTripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
    width: 100%;
    height: 100px;
`
const LabeXButton = styled.button`
    background-color: orange;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
`

const HomePage = () => {
  const history = useHistory()

    return (
      <HomePageContainer>
        <TitleContainer>
          <Title>LabeX</Title>
          <Phrase1>Viaje com a pioneira em turismo interplanetário</Phrase1>
        </TitleContainer>
        <LoginContainer>
          <br></br>
          <SeeLoginContainer>
          <p>Bem-vindos!</p>
            <p>Clique abaixo para saber mais sobre suas viagens.</p>
            <LabeXButton onClick={() => goToLoginPage(history)}>
              Entrar
            </LabeXButton>
          </SeeLoginContainer>
          <SeeTripsContainer>
            <p>`</p>
            <p>Clique abaixo para saber mais sobre os locais de viagem.</p>
            <LabeXButton onClick={() => goToListTripsPage(history)}>
              Viagens
            </LabeXButton>
          </SeeTripsContainer>
        </LoginContainer>
      </HomePageContainer>
    );
}

export default HomePage