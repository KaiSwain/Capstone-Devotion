

export const GetThemedVerses = (selectedTheme) => {

    return fetch(` http://localhost:9000/verses?theme=${selectedTheme}`).then(res => res.json())
}

export const GetAllVerses = () => {
    return fetch('http://localhost:9000/verses').then(res => res.json())
}