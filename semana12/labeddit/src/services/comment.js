import axios from 'axios'
import {BASE_URL} from '../constants/url'
import {goToFeed} from '../routes/coordinator'

export const createComment = (body, clear, history) => {
    axios.post(`${BASE_URL}/posts/:postId/comment`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => alert("Erro no login"))
}

