import axios from 'axios'
import {BASE_URL} from '../constants/url'
import {goToFeed} from '../routes/coordinator'

export const createPost = (body, clear) => {
    axios.post(`${BASE_URL}/posts?`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        alert(res.message)
        clear()
    })
    .catch((err) => alert(err.response.message))
}

export const getPost = (body, clear, history) => {
    axios.get(`${BASE_URL}/posts?`, body)
    .then((res) => {
        localStorage.getItem("token", res.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => alert("Erro no login"))
}

export const getPostDetail = (body, clear, postId) => {
    axios.get(`${BASE_URL}/posts/:postId`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        alert(res.message)
        clear()
    })
    .catch((err) => alert("Erro ao postar comentário! Tente novamente"))
}