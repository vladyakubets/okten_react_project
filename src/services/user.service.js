const getAll =() => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

export const userService = {
    getAll
}