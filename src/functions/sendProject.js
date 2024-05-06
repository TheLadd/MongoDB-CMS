export const sendProject = async ( data ) => {
    // const serverUrl = 'http://localhost:8080/portfolio/post'
    const serverUrl = process.env.REACT_APP_BACKEND_URL 
    try {
        const response = await fetch(serverUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": 'application/json; charset=UTF-8'
            }
        })
        return await response.json()
    }
    catch (err) {
        console.log(`Error sending project to ${serverUrl}`)
    }
}