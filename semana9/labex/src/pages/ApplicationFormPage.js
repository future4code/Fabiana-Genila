import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToHomePage, goToLastPage } from '../routes/coordinator'
import useForm from '../hooks/useForm'
import { countries } from '../constants/countries'

//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição

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
const ApplicationFormParagraph = styled.p`
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

const ApplicationFormPage = () => {
    const [listTrips, setListTrips] = useState({})
    const [tripId, setTripId] = useState("")
    const [name, onChangeName] = useForm("")
    const [country, onChangeCountry] = useForm("")
    const [age, onChangeAge] = useForm("")
    const [applicationText, onChangeApplicationText] = useForm("")
    const [profession, onChangeProfession] = useForm("")
    const history = useHistory()

    useEffect(() => {
        getAllTrips()
    },[])

        const getAllTrips = () => {
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
                console.log(err.res.message)
            })            
        }

        const clearFieldForm = () => {
            setTripId("")
        }

        const sendApplication = (tripId) => {

            const body = {
                name: name,
                age: age,
                applicationText: applicationText,
                profession: profession,
                country: country
            }
            
            axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabiana-pereira-cruz/trips/${tripId}/apply`,
            body
            )
            .then((res) => {
                console.log(res.data)
                alert("Aplicação enviada com sucesso!")
                setListTrips(res.data)
                
            })
            .catch((err) => {
                alert("Ocorreu um erro")
                console.log(err)
            })            
        }
    
        const onChangeTrip = (e) => {
            setTripId(e.target.value)
        }
    
        const onSubmitForm = (e) => {
            e.preventDefault()
            sendApplication(tripId)
        }

        const tripOptions = listTrips.trips && listTrips.trips.map((trip) => {
            return <option key={trip.id}>{trip.name}</option>
        })

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <ApplicationFormParagraph>Tela de inscrição</ApplicationFormParagraph>
            <FormContainer SubmitForm={onSubmitForm}>
                <SelectForm onChange={onChangeTrip}>
                    {tripOptions}
                </SelectForm>
                <InputForm
                    required
                    placeholder={"Nome"}
                    name={"name"}
                    value={name}
                    onChange={onChangeName}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    pattern={"^.{3,}$"}
                    />
                <InputForm
                    required
                    placeholder={"Idade"}
                    name={"age"}
                    value={age}
                    onChange={onChangeAge}
                    min={18}
                    />
                <InputForm
                    required
                    placeholder={"Texto para se candidatar"}
                    name={"applicationText"}
                    value={applicationText}
                    onChange={onChangeApplicationText}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                    pattern={"^.{30,}$"}
                    />
                <InputForm
                    required
                    placeholder={"Profissão"}
                    name={"profession"}
                    value={profession}
                    onChange={onChangeProfession}
                    title={"O texto deve ter no mínimo 10 caracteres"}
                    pattern={"^.{10,}$"}
                    />
                <SelectForm
                    required
                    placeholder={"País"}
                    name={"country"}
                    value={country}
                    onChange={onChangeCountry}
                    >
                    <option value="" disabled>Escolha um País</option>
                    {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </SelectForm>
                <LabeXButton type="submit">Enviar</LabeXButton>
            </FormContainer>
            <br></br>
            <br></br>
            <LabeXButton onClick={() => goToLastPage(history)}>Voltar</LabeXButton>
            <LabeXButton onClick={() => goToHomePage(history)}>Home Page</LabeXButton>
        </div>
    )
}

export default ApplicationFormPage