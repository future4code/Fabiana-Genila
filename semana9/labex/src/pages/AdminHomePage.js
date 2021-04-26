import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToHomePage, goToCreateTripPage, goToLastPage, goToTripDetailsPage } from '../routes/coordinator'
import useProtectedPage from '../hooks/useProtectedPage'

//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    color: orange;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
    border-bottom: 1px solid orange;
`

const AdminHomePage = () => {
    useProtectedPage()
    const history = useHistory()

    const logout = () => {
        window.localStorage.removeItem("token")
        history.push("/login-page")
    }

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <p>AdminHomePage</p>
            <p>Admin Trip Cards</p>
            <button onClick={() => goToTripDetailsPage(history)}>Trip Details Page</button>
            <button onClick={() => goToCreateTripPage(history)}>Create Trip Page</button>
            <button onClick={logout}>Logout</button>
            <br></br>
            <button onClick={() => goToHomePage(history)}>Home Page</button>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
        </div>
    )
}

export default AdminHomePage