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