import React from 'react'
import FeedCard from '../../components/FeedCard/FeedCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/url'
import { FeedListContainer } from './styled'
import PostForm from '../../components/PostForm/PostForm'
import { useHistory, useParams } from 'react-router'
import { goToPosts } from '../../routes/coordinator'

const FeedPage = (props) => {
    useProtectedPage()
    const history = useHistory()
    const params = useParams()
    const posts = useRequestData([], `${BASE_URL}/posts?`)
    const commentsOfPosts = useRequestData({},`${BASE_URL}/posts/${params.postId}`)
    console.log(commentsOfPosts)

    const onClickPost = (postId) => {
        goToPosts(history, postId)
    }

    const feedCards = posts.posts && posts.posts.map((post) => {
        console.log(post.commentId)
        return (
        <FeedCard
        key={post.id}
        title={post.title}
        text={post.text}
        username={post.username}
        comments={post.commentsCount}
        commentId={post.id}
        votes={post.votesCount}
        onClick={() => onClickPost(post.id)}
        />
        )
    })

    return (
        <FeedListContainer>
            <div>
                <PostForm />
            </div>
            {feedCards}
        </FeedListContainer>
    )
}

export default FeedPage
