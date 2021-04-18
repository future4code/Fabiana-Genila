import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { goToLastPage } from '../routes/coordinator'
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
    const [tripDetails, setTripDetails] = useState({})
    const { id } = useParams()
    const history = useHistory()

    const getTripDetail = () => {
        const token = window.localStorage.getItem("token")

        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabiana-pereira-cruz/trip/${id}`, 
            {
                headers: {
                    auth: token
                    }
                }
            )
            .then((res) => {
                console.log(res.data)
                setTripDetails(res.data.trip)
                history.push('/admin/trips/list')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const logout = () => {
        window.localStorage.removeItem("token")
        history.push("/login-page")
    }

    const candidates = tripDetails && 
    tripDetails.trip && tripDetails.trip.candidates.map((candidate) => {
        return <div key={candidate.id}>{candidate.id}{getTripDetail}</div>
    })

    const approvedCandidates = tripDetails && 
    tripDetails.trip && tripDetails.trip.approved.map((candidate) => {
        return <li key={candidate.id}>{candidate.name}</li>
    })

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <div>
            {tripDetails && tripDetails.trip && 
            <h1>{tripDetails.trip.name}</h1>}
            {tripDetails && tripDetails.trip && 
            <div>
                <p><b>Nome:</b> {tripDetails.trip.name}</p>
                <p><b>Descrição:</b> {tripDetails.trip.description}</p>
                <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
                <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
                <p><b>Data:</b> {tripDetails.trip.date}</p>
            </div>}
            </div>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
            <button onClick={logout}>Logout</button>

            <h2>Candidatos Aprovados</h2>
            {approvedCandidates && approvedCandidates.length > 0 ? 
                approvedCandidates : <p>Não há candidatos aprovados</p>}

            <h2>Candidatos Pendentes</h2>
            {candidates && candidates.length > 0 ? 
                candidates : <p>Não há candidatos pendentes</p>}
           
        </div>
    )
}

export default TripDetailsPage