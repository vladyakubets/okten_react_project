const getDataJsonPlaceholder = (linkEnding, setter) => {
    fetch(`https://jsonplaceholder.typicode.com/${linkEnding}`)
        .then(res => res.json())
        .then(res => setter(res))
}


export default getDataJsonPlaceholder