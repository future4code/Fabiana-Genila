import { Button, CircularProgress, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { InputsContainer } from './styled'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'


const CommentForm = () => {
    const [form, onChange, clear] = useForm({text: ""})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const params = useParams()

    const createComment = (body, clear) => {
        axios.post(`${BASE_URL}/posts/${params.postId}/comment`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            alert("Comentário efetuado com sucesso!")
            clear()
        })
        .catch((err) => alert(err))
    }


    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, clear, history, setIsLoading, params)
        console.log(params)
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"text"}
                        value={form.text}
                        onChange={onChange}
                        label={"Comente aqui"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"text"}
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin={"normal"}
                    >
                        {isLoading ? <CircularProgress color="inherit" size="24px"/> : <>Comentar</>}
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default CommentForm
