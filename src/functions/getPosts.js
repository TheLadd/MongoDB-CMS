// NOTE: this is the exact same function as 'client/src/functions/blog.js'...
export const getPosts = async () => {
    // const backendUrl = 'http://localhost:8080/blog/get'
    const backendUrl = process.env.REACT_APP_BACKEND_URL + 'blog/get'
    try {
        const posts = await fetch(backendUrl, {
        // const posts = await fetch(process.env.REACT_APP_BACKEND_URL, {
            method: 'GET',
            headers: {
                Accept:'application/json',
                "Content-type": "application/json"
            }
        });
        return await posts.json()
    }
    catch (err) {
        console.log(`Couldn't retrieve posts from ${backendUrl}`, err)
        // console.log(`Couldn't retrieve posts from ${process.env.REACT_APP_BACKEND_URL}`, err)
    }
}