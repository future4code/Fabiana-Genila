export const goToLogin = (history) => {
    history.push("/")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToFeed = (history) => {
    history.push("/feed")
}

export const goToPosts = (history, postsId) => {
    history.push(`/posts/${postsId}`)
}