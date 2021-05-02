import React from 'react';
import useRequestData from '../../hooks/useRequestData'
import axios from 'axios'
import { useParams } from 'react-router'
import { BASE_URL } from '../../constants/url'
import useProtectedPage from '../../hooks/useProtectedPage'
import { CommentsContainer, CommentsDiv, ArrowContainer } from './styled'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { CardActionArea } from '@material-ui/core'
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import { IconButton } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    width: 1200,
    margin: 15,
    fontSize: 34,
    justifyContent: 'center',
    alignItems: 'center',
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
}));

const Feed = (props) => {
  useProtectedPage()
  const classes = useStyles()
  const params = useParams()
  const feed = useRequestData({}, `${BASE_URL}/posts/${params.postId}`)
  console.log(feed)

  const voteUp = () => {
    const body = {  
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
  const body = {
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
    <>
    <Card className={classes.root} variant="outlined" onClick={props.onClick}>
      <CardActionArea className={classes.paragraph}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="posts"
            className={classes.avatar}
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

        <CommentsContainer>
          <Typography variant="paragraph" color="textSecondary">
            <CommentsDiv>
              <ArrowContainer>
              <Typography variant="paragraph" color="textSecondary">
              <p>
                Votos: 
                {props.votes}
                <IconButton>
                <HowToVoteIcon> - </HowToVoteIcon>
                </IconButton>
              </p>
                {/* <p>
                Votos:
                <IconButton>
                <ArrowUpwardIcon onClick={() => voteUp(props.postId)}> + </ArrowUpwardIcon>{" "}
                </IconButton>
                {props.votes}
                <IconButton>
                <ArrowDownwardIcon onClick={() => voteDown(props.postId)}> - </ArrowDownwardIcon>
                </IconButton>
              </p> */}
              </Typography>
            </ArrowContainer>
              <p>Comentários: {props.comments}</p>
              </CommentsDiv>
          </Typography>
        </CommentsContainer>

      </CardActions>
      </CardActionArea>
    </Card>
    </>
  );
}
export default Feed