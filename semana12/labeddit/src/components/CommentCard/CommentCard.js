import React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { CardActionArea } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { IconButton } from '@material-ui/core'
import { useParams } from 'react-router'
import { BASE_URL } from '../../constants/url'


const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    margin: 15,
    fontSize: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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

const CommentCard = (props) => {
  const classes = useStyles()
  const params = useParams()

  const voteUp = () => {
    const body ={
      direction: 1
    }
    axios.put(`${BASE_URL}/posts/${params.postId}/comment/${props.commentId}/vote`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        alert("Voto efetuado com sucesso!")
    })
    .catch((err) => alert(err))
}


const voteDown = () => {
  const body ={
    direction: -1
  }
  axios.put(`${BASE_URL}/posts/${params.postId}/comment/${props.commentId}/vote`, body, {
      headers: {
          Authorization: localStorage.getItem("token")
      }
  })
  .then((res) => {
      alert("Voto efetuado com sucesso!")
  })
  .catch((err) => alert(err))
}   

  return (
    <>
    <Card className={classes.root} variant="outlined">
      <CardActionArea className={classes.paragraph}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="posts"
            className={classes.avatar}
            username={props.username}
          ></Avatar>
        }
        title={props.title}
        subheader={props.username}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <div>
          <Typography variant="paragraph" color="textSecondary">
            <div>
            <p>
                Votos:
                <IconButton>
                <ArrowUpwardIcon onClick={() => voteUp(params.postId, props.commentId)}> + </ArrowUpwardIcon>{" "}
                </IconButton>
                {props.votes}
                <IconButton>
                <ArrowDownwardIcon onClick={() => voteDown(params.postId, params.commentId)}> - </ArrowDownwardIcon>
                </IconButton>
              </p>
              </div>
          </Typography>
        </div>

      </CardActions>
      </CardActionArea>
    </Card>
    </>
  )
}
export default CommentCard