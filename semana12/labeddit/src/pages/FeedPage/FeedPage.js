import React from 'react'
import FeedCard from '../../components/FeedCard/FeedCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/url'
import { FeedListContainer } from './styled'
import PostForm from '../../components/PostForm/PostForm'
import { useHistory } from 'react-router'
import { goToPosts } from '../../routes/coordinator'

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts?`)
    console.log(posts)

    const onClickPost = (postId) => {
        goToPosts(history, postId)
    }

    const feedCards = posts.posts && posts.posts.map((post) => {
        console.log(post.commentsCount)
        return (
        <FeedCard
        key={post.id}
        title={post.title}
        text={post.text}
        username={post.username}
        comments={post.commentsCount}
        commentId={post.id}
        votes={post.votes}
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
