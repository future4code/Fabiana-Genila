import React from "react"
import styled from 'styled-components'

const TripCardContainer = styled.div`
    width: 100%;
    padding: 10px 20px;
    margin: 20px 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    max-width: 500px;
    background-color: #faebcf;
    
`

const TripCard = (props) => {
    const {name, description, planet, durationInDays, date} = props.trip

    return(
        <TripCardContainer>
            <p><b>Nome:</b>{name}</p>
            <p><b>Descrição:</b>{description}</p>
            <p><b>Planeta:</b>{planet}</p>
            <p><b>Duração:</b>{durationInDays}</p>
            <p><b>Data:</b>{date}</p>
        </TripCardContainer>
    )
}

export default TripCard