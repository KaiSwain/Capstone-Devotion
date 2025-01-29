export const PostDevotion = (devotion) => {
    const post = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(devotion)
    }
    fetch("http://localhost:9000/devotions",post)
}


export const GetAllDevotions = () => {
    return fetch('http://localhost:9000/devotions').then(res => res.json())
}