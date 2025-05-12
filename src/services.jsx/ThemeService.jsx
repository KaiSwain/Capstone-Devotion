


export const GetAllThemes = () => {
    return fetch('http://localhost:8001/themes?_embed=verses').then(res => res.json())
}