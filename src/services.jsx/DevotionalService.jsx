export const PostDevotion = (devotion) => {
    const post = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(devotion)
    }
    fetch("http://localhost:9000/devotions", post)
}


export const GetAllDevotions = () => {
    return fetch('http://localhost:9000/devotions').then(res => res.json())
}

export const GetUsersDevotions = (id) => {
    return fetch(`http://localhost:9000/devotions?userId=${id}`).then(res =>res.json()).then(

        console.log("DEVOTIONS FETCHED")
    )

}

export const PutDevotion = (input) => {
    return fetch(`http://localhost:9000/devotions/${input.id}`,
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
    })

}


export const DeleteDevotion = (input) => {
    
        const deleteDev = {
            method: "DELETE"
        }
            fetch(`http://localhost:9000/devotions/${input.id}`, deleteDev)

    
}