import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostsPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>POSTS</h1>
            <div>
                <h2>Nome do usuário</h2>
                <p>Texto do Post</p>
                <p><b>comentários</b></p>
                <p><b>likes</b></p>
            </div>
            <div>
                <h2>Escreva seu comentário</h2>
                <button>Comentar</button>
            </div>
            <div>
                <h2>Nome do usuário</h2>
                <p>Texto do comentário</p>
                <p><b>likes</b></p>
            </div>
        </div>
    )
}

export default PostsPage
