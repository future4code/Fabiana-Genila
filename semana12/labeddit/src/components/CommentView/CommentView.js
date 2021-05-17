import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { useParams } from 'react-router'
import { BASE_URL } from '../../constants/url'
import CommentCard from '../CommentCard/CommentCard'

const CommentView = () => {
    useProtectedPage()
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.postId}`)
    console.log(comments)

    const commentCards = comments.post && comments.post.comments && comments.post.comments.map((comment) => {
        return (
        <CommentCard
        key={comment.id}
        username={comment.username}
        title={comment.title}
        text={comment.text}
        comments={comment.commentsCount}
        votes={comment.votesCount}
        commentId={comment.id}
        />
        )
    })

    return (
        <div>
            {commentCards}
        </div>
    )
}

export default CommentView
