import { Button, CircularProgress, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { InputsContainer } from './styled'
import { login } from '../../services/login'
import { useHistory } from 'react-router'
import { CreateRounded } from '@material-ui/icons'


const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText, setIsLoading)
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                     <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin={"normal"}
                    >
                        {isLoading ? <CircularProgress color="inherit" size="24px"/> : <>Fazer Login</>}
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default LoginForm
