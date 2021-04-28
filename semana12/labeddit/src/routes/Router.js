import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostsPage from '../pages/PostsPage/PostsPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'

const Router = ({setRightButtonText}) => {
    return (
            <Switch>
                <Route exact path="/">
                    <LoginPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path="/feed">
                    <FeedPage />
                </Route>
                <Route exact path="comments/:postId">
                    <PostsPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
    )
}

export default Router
