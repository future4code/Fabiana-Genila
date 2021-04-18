import React from "react"
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { goToTripDetailsPage } from '../../routes/coordinator'
import ListTripsPage from '../pages/ListTripsPage'


const AdminTripCard = (props) => {
    const { id, name, getTrips } = props
    const history = useHistory()

    const deleteTrip = (id, getTrips) => {

        const token = window.localStorage.getItem("token")

        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabiana-pereira-cruz/trips/${id}`, 
            {
                headers: {
                    auth: token
                }
            }
        )
        .then(() => {
            alert("Viagem deletada!")
            getTrips()
        })
        .catch((err) => alert(err.response.data.message))
    }

    const onClickDelete = (e) => {
        e.stopPropagation()
        if (window.confirm(`Tem certeza que deseja deletar a viagem ?`)) {
            deleteTrip(id, getTrips)
        }
    }

    return (
        <div onClick={() => goToTripDetailsPage(history, id)}>
            <p>{name}</p>
            <button onClick={onClickDelete}/>
        </div>
    )
}

export default AdminTripCard