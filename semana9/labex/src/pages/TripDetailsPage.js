import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { goToHomePage, goToLastPage } from '../routes/coordinator'
import useProtectedPage from '../hooks/useProtectedPage'


//Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    color: orange;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
    border-bottom: 1px solid orange;
`


const TripDetailsPage = () => {
    useProtectedPage()
    const [trip, setTrip] = useState({})
    const params = useParams()
    const history = useHistory()
    
    console.log(params)

    useEffect(() =>{
        getTripDetail("NoIFVcOiSgTKTIPVZwXS")
    },[])

    const getTripDetail = (id) => {
        const token = window.localStorage.getItem("token")

        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabiana-pereira-cruz/trip/${id}`, {
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

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <p>Trip Details Page</p>
            <p>Trip Cards</p>
            <p>Approval Candidates Cards</p>
            <h2>{trip.name}</h2>
            <p>{trip.date}</p>
            <p>{trip.description}</p>
            <button>Approved!</button>
            <button>Desapproved!</button>
            <p>Desapproval Candidates Cards</p>
            <button onClick={logout}>Logout</button>
            <button onClick={() => goToHomePage(history)}>Home Page</button>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage