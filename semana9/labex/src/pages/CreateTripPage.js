import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { goToHomePage, goToLastPage } from '../routes/coordinator'
import useProtectedPage from '../hooks/useProtectedPage'

//Formulário para o administrador criar uma nova viagem

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    color: orange;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
    border-bottom: 1px solid orange;
`

const CreateTripPage = () => {
    useProtectedPage()
    const [trip, setTrip] = useState({})
    const params = useParams()
    const history = useHistory()
    
    console.log(params)

    useEffect(() =>{
        createTrip()
    },[])

    const createTrip = () => {
        const token = window.localStorage.getItem("token")

        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabiana-pereira-cruz/trips", {
                headers: {
                    auth: token
                    }
                }
            )
            .then((res) => {
                setTrip(res.data.trip)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const logout = () => {
        window.localStorage.removeItem("token")
        history.push("/login-page")
    }

    console.log(trip)

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <p>Create Trip Page</p>
            <p>Trip Cards</p>
            <h2>{trip.name}</h2>
            <h3>{trip.planet}</h3>
            <p>{trip.date}</p>
            <p>{trip.description}</p>
            <button>Submit!</button>
            <button onClick={logout}>Logout</button>
            <button onClick={() => goToHomePage(history)}>Home Page</button>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
        </div>
    )
}

export default CreateTripPage