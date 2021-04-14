import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { goToApplicationFormPage, goToHomePage } from '../routes/coordinator'

//Para vermos todas as viagens

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    color: orange;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
    border-bottom: 1px solid orange;
`

const ListTripsPage = () => {
    const [trip, setTrip] = useState({})
    const params = useParams()
    const history = useHistory()

    useEffect(() =>{
        getTrips()
    },[])

    const getTrips = () => {

        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabiana-pereira-cruz/trips")
            .then((res) => {
                setTrip(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
            console.log(trip)
    }

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <p>List Trips Page</p>
            <p>Trip Cards</p>
            <p></p>
            <button onClick={() => goToApplicationFormPage(history)}>Sign up to travel!</button>
            <button onClick={() => goToHomePage(history)}>Home Page</button>
        </div>
    )
}

export default ListTripsPage