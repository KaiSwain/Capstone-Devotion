


export const GetAllThemes = () => {
    return fetch('http://localhost:9000/themes?_embed=verses').then(res => res.json())
}