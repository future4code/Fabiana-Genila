import axios from 'axios'
import {BASE_URL} from '../constants/url'
import {goToFeed} from '../routes/coordinator'

export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToFeed(history)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message)
    })
}

export const signUp = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToFeed(history)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message)
    })
}