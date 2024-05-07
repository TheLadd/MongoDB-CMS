export const sendEdit = async ( data ) => {
    // const ServerURL = 'http://localhost:8080/blog/put'
    const ServerUrl = process.env.REACT_APP_BACKEND_URL 
    try {
        const response = await fetch(ServerURL, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        return await response.json()
    }
    catch (err) {
        console.log(`Error sending post edit to ${ServerURL}`, err)
    }
}