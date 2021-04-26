import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostsPage from '../pages/PostsPage/PostsPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage />
                </Route>
                <Route exact path="/feed">
                    <FeedPage />
                </Route>
                <Route exact path="posts/:postId">
                    <PostsPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
