import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { goToHomePage, goToLastPage } from '../routes/coordinator'
import useProtectedPage from '../hooks/useProtectedPage'
import { planets } from '../constants/planets'
import useForm from '../hooks/useForm'

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
const FormContainer = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
padding: 8px;
width: 500px;
`
const InputForm = styled.input`
    padding: 8px;
    margin: 4px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid;
    background-color: #f2e4c9;
`
const SelectForm = styled.select`
    padding: 8px;
    margin: 4px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid;
    background-color: #f2e4c9;
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
const ApplicationFormParagraph = styled.p`
    margin: 10px;
    padding: 10px;
    font-size: 18px;
`


const CreateTripPage = () => {
    useProtectedPage()
    const [trip, setTrip] = useState({})
    const [name, onChangeName] = useForm("")
    const [planet, onChangePlanet] = useForm("")
    const [date, onChangeDate] = useForm("")
    const [description, onChangeDescription] = useForm("")
    const [durationInDays, onChangeDurationInDays] = useForm("")
    const history = useHistory()

    const today = new Date()
    const stringToday = today.getFullYear() + "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) + "-"
    + ("0" + today.getDate()).substr(-2)

    const createTrip = () => {

        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }
        
        const token = window.localStorage.getItem("token")

        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabiana-pereira-cruz/trips", 
            body, 
            {
                headers: {
                    auth: token
                    }
                }
            )
            .then((res) => {
                setTrip(res.data)
                alert(console.log(res.data.message))
            })
            .catch((err) => {
                console.log(err)
                alert(console.log(err.message))
            })
    }

    const onClickCreateTrip = (e) => {
        e.preventDefault()
        createTrip()
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
            <ApplicationFormParagraph>Crie uma viagem</ApplicationFormParagraph>
            <FormContainer onSubmit={onClickCreateTrip}>
                <InputForm
                required
                placeholder={"Nome"}
                name={"name"}
                value={name}
                onChange={onChangeName}
                pattern={"^.{5,}$"}
                title={"O nome da viagem deve ter no mínimo 5 caracteres"}
                />
                <SelectForm 
                required
                placeholder={"Planeta"}
                name={"planet"}
                onChange={onChangePlanet}
                defaultValue={""}
                >
                <option
                value={""} 
                disable>Escolha um planeta</option>
                {planets.map((planet) => {
                    return <option value={planet} key={planet}>{planet}</option>
                })}
                </SelectForm>
                <input
                required
                placeholder={"Data"}
                type={"date"}
                name={"date"}
                onChange={onChangeDate}
                value={date}
                min={stringToday}
                />
                <InputForm
                required
                placeholder={"Descrição"}
                name={"decription"}
                value={description}
                onChange={onChangeDescription}
                pattern={"^.{30,}$"}
                min={50}
                />
                <InputForm
                required
                placeholder={"Duração em dias"}
                type={"number"}
                name={"durantionInDays"}
                onChange={onChangeDurationInDays}
                name={durationInDays}
                min={50}
                />
            </FormContainer>
            <LabeXButton onClick={logout}>Logout</LabeXButton>
            <LabeXButton type={"submit"}>Criar viagem</LabeXButton>
            <LabeXButton onClick={() => goToLastPage(history)}>Voltar</LabeXButton>
        </div>
    )
}

export default CreateTripPage