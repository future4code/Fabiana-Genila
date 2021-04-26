import React from "react"
import styled from 'styled-components'

const CandidateCardContainer = styled.div`
    width: 100%;
    padding: 10px 20px;
    margin: 20px 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    max-width: 500px;
    background-color: #faebcf;
    
`

const CandidateCard = (props) => {
    const { applicationText, profession, age, name, country } = props.candidate


    return (
        <CandidateCardContainer>
            <p><b>Nome:</b> {name}</p>
            <p><b>Profissão:</b> {profession}</p>
            <p><b>Idade:</b> {age}</p>
            <p><b>País:</b> {country}</p>
            <p><b>Texto de Candidatura:</b> {applicationText}</p>
            <div>
                <button onClick={() => (true)}>Aprovar</button>
                <button onClick={() => (false)}>Reprovar</button>
            </div>

        </CandidateCardContainer>
    )
}

export default CandidateCard