import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { useParams } from 'react-router'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { IconButton } from '@material-ui/core'

//APAGAR
const VoteComment = (props) => {
    const params = useParams()
    console.log(params.commentId) 


    const voteUp = (postId, commentId, clear, props) => {
      const body ={
        direction: 1
      }
      axios.put(`${BASE_URL}/posts/${params.postId}/comment/${props.commentId}/vote`, body, {
          headers: {
              Authorization: localStorage.getItem("token")
          }
      })
      .then((res) => {
          alert("Comentário efetuado com sucesso!")
          clear()
          console.log(params.commentId)
      })
      .catch((err) => alert(err))
  }

  
  const voteDown = (postId, commentId, clear) => {
    const body ={
      direction: -1
    }
    axios.put(`${BASE_URL}/posts/${params.postId}/comment/${params.commentId}/vote`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        alert("Comentário efetuado com sucesso!")
        clear()
    })
    .catch((err) => alert(err))
    console.log(voteUp())
}   


    return (
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
    );
}


export default VoteComment
