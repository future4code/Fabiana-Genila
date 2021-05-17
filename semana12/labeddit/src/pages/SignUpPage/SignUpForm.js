import { Button, TextField, CircularProgress } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { InputsContainer, SignUpFormContainer } from './styled'
import { signUp } from '../../services/login'


const SignUpForm = (setRightButtonText) => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [form, onChange, clear] = useForm({username: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText, setIsLoading)
        console.log(form)
    }

    return (
            <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
            <InputsContainer>
                <TextField
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        autoFocus
                    />
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
                        {isLoading ? <CircularProgress color="inherit" size="24px"/> : <>Fazer Cadastro</>}
                    </Button>
            </InputsContainer>
            </SignUpFormContainer>
            </form>
    )
}
export default SignUpForm
