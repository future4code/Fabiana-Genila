import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
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
    const [listTrips, setListTrips] = useState({})
    const history = useHistory()

    useEffect(() => {
        getTrips()
    },[])

    const getTrips = () => {

        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabiana-pereira-cruz/trips")
            .then((res) => {
                setListTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })            
    } 

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <p>List Trips Page</p>
            <p>Trip Cards</p>
            {listTrips.trips && listTrips.trips.map ((trip) => {
                console.log(trip.name)
                return (
                <div key={trip.id}>
                    <h2>{trip.name}</h2>
                    <p>{trip.planet}</p>
                    <p>{trip.description}</p>
                    <p>{trip.date}</p>
                    <p>{trip.durationInDays}</p>
                </div>
                )
            } 
            )}
            <button onClick={() => goToApplicationFormPage(history)}>Sign up to travel!</button>
            <button onClick={() => goToHomePage(history)}>Home Page</button>
        </div>
    )
}

export default ListTripsPage

// const meuObjeto = {
//     nome: 'Textinho',
//     idade: 10,
//     hobies: ['hobie1', 'hobie2', 'hobie3']
//   }
//   //acessando
//   meuObjeto.nome
//   meuObjeto.idade
//   meuObjeto.hobies // <= isso eh um array, um lista
//   meuObjeto.hobies.map(hobie => <p>hobie</p>) //faz um map normal assim
  