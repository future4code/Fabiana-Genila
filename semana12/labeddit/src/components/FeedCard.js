import React from 'react';
import { CommentsContainer } from '../components/FeedCard/styled'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: { 
    backgroundColor: 'orangered',
  },
}));

function FeedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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

        <CommentsContainer>
          <Typography variant="paragraph" color="textSecondary">
            Votos: {props.votesCount}
          </Typography>
        </CommentsContainer>

        <CommentsContainer>
          <Typography variant="paragraph" color="textSecondary">
            Comentários: {props.commentsCount}
          </Typography>
        </CommentsContainer>
      </CardActions>
    </Card>
  );
}
export default FeedCard