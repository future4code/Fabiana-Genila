import { Card } from '@material-ui/core'
import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import CommentForm from '../../components/CommentForm/CommentForm'
import CommentView from '../../components/CommentView/CommentView'
import { BASE_URL } from '../../constants/url'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { PostContainer } from './styled'
import { makeStyles } from '@material-ui/core/styles'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { CardActionArea } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { IconButton } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      width: 700,
      margin: 15,
      fontSize: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fcecdc',
      borderRadius: 20
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: { 
      backgroundColor: 'orangered',
    },
    paragraph: {
      padding: 10,
      textAlign: 'left',
    }
  }))

const PostsPage = (props) => {
    useProtectedPage()
    const classes = useStyles()
    const params = useParams()
    const posts = useRequestData({}, `${BASE_URL}/posts/${params.postId}`)
    console.log(params)

    const voteUp = () => {
        const body ={
          direction: 1
        }
        axios.put(`${BASE_URL}/posts/${params.postId}/vote`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            alert("Voto efetuado com sucesso!")
        })
        .catch((err) => alert("Ocorreu um erro, tente novamente"))
    }
    
    
    const voteDown = () => {
      const body ={
        direction: -1
      }
      axios.put(`${BASE_URL}/posts/${params.postId}/vote`, body, {
          headers: {
              Authorization: localStorage.getItem("token")
          }
      })
      .then((res) => {
          alert("Voto efetuado com sucesso!")
      })
      .catch((err) => alert("Ocorreu um erro, tente novamente"))
    }   
    

    return (
      <PostContainer>
        <Card className={classes.root} variant="outlined">
        <CardActionArea className={classes.paragraph}>
          <CardHeader
            avatar={
              <Avatar aria-label="posts" className={classes.avatar}></Avatar>
            }
            title={posts.post && posts.post.title}
            subheader={posts.post && posts.post.username}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {posts.post && posts.post.text}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <div>
              <Typography variant="paragraph" color="textSecondary">
                <p>
                Votos:
                <IconButton>
                <ArrowUpwardIcon onClick={() => voteUp(params.postId, props.commentId)}> + </ArrowUpwardIcon>{" "}
                </IconButton>
                {posts.post && posts.post.votes}
                <IconButton>
                <ArrowDownwardIcon onClick={() => voteDown(params.postId, props.commentId)}> - </ArrowDownwardIcon>
                </IconButton>
              </p>
              </Typography>
              <Typography variant="paragraph" color="textSecondary">
              {posts.post && posts.post.commentsCount}
              </Typography>
            </div>
          </CardActions>
          </CardActionArea>
        </Card>
        <div>
            <CommentForm />
        </div>
        <div>
            <CommentView />
        </div>
      </PostContainer>
    )
}

export default PostsPage
