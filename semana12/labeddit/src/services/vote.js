import axios from 'axios'
import {BASE_URL} from '../constants/url'
import {goToFeed} from '../routes/coordinator'

export const vote = (body, clear, history) => {
    axios.put(`${BASE_URL}/posts/:postId/vote`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => alert("Erro no login"))
}

export const voteComment = (body, clear, history) => {
    axios.put(`${BASE_URL}/posts/:postId/comment/:commentId/vote`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => alert("Erro no login"))
}
