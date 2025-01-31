

export const GetThemedVerses = (themeId) => {

    return fetch(` http://localhost:9000/verses?themeId=${themeId}&_expand=theme`).then(res => res.json())
}

export const GetAllVerses = () => {
    return fetch('http://localhost:9000/verses?&_expand=theme').then(res => res.json())
}


export const PutFavoriteVerse = (user) => {


    return fetch(`http://localhost:9000/users/${user.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
}