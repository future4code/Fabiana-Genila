import { Button, Card, CardContent, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CommentIcon from '@material-ui/icons/Comment'
import React from 'react'
import useForm from '../../hooks/useForm'
import { InputsContainer } from './styled'
import { useHistory, useParams } from 'react-router'
import { createPost } from '../../services/posts'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
      margin: 30,
      padding: 20,
      backgroundColor: '#fcecdc',
      borderRadius: 20,
    },
    input: {
        backgroundColor: '#ffffff',
    },
    commentIcon: {
        fontSize: 40,
        color: 'orangered', 
        margin: 0    }
  }));

const PostForm = () => {
    const classes = useStyles();
    const [form, onChange, clear] = useForm({text: "", title: ""})
    const history = useHistory()
    const params = useParams()
    console.log(params)

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        createPost(form, clear, history, params.postId)
        
    }

    return (
        <Card className={classes.root}>
        <div>
        <InputsContainer>
        <CommentIcon 
        className={classes.commentIcon}
        >
        </CommentIcon>
        <form onSubmit={onSubmitForm}>
            <TextField
                className={classes.input}
                name={"title"}
                value={form.title}
                onChange={onChange}
                label={"Título do post"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"text"}
            />
             <TextField
                className={classes.input}
                name={"text"}
                value={form.text}
                onChange={onChange}
                label={"Texto do post"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"text"}
                multiline
            />
            <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
                margin={"normal"}
            >
                Postar
            </Button>
        </form>
    </InputsContainer>
    </div>
    </Card>
    )
}

export default PostForm
