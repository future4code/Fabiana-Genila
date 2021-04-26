import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToApplicationFormPage, goToHomePage } from '../routes/coordinator'
import TripCard from '../components/TripCard'

//Para vermos todas as viagens

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: orange;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
    border-bottom: 1px solid orange;
`
const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 32% 35%;
    grid-template-rows: auto;
    justify-content: start;
    align-itens: center;
`
const TripCardParagraph = styled.p`
    margin: 10px;
    padding: 10px;
    font-size: 18px;
`
const LabeXButton = styled.button`
    background-color: orange;
    color: white;
    font-size: 16px;
    padding: 10px;
    margin-left: 60px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
`


const ListTripsPage = () => {
    const [listTrips, setListTrips] = useState({})
    const history = useHistory()

    useEffect(() => {
        getTrips()
    },[])

    const getTrips = () => {

        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabiana-pereira-cruz/trips",
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }
            )
            .then((res) => {
                setListTrips(res.data)
            })
            .catch((err) => {
                console.log(err)
            })            
    } 

    const tripsList = listTrips.trips && listTrips.trips.map((trip) => {
        return <TripCard key={trip.id} trip={trip}>{trip} /</TripCard>
    })

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <TripCardParagraph>Veja nossas viagens e escolha a sua!</TripCardParagraph>
            <LabeXButton onClick={() => goToApplicationFormPage(history)}>Inscreva-se!</LabeXButton>
            <LabeXButton onClick={() => goToHomePage(history)}>Home Page</LabeXButton>
            <CardContainer>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
            </CardContainer>
        </div>
    )
}

export default ListTripsPage