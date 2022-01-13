const getAll = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

const getPostsById = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
        .then(value => value.json())
}

export const userService = {
    getAll,
    getPostsById
}