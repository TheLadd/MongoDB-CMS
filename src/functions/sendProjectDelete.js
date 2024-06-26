export const sendProjectDelete = async (data) => {
    // const ServerUrl = 'http://localhost:8080/portfolio/delete'
    const ServerUrl = process.env.REACT_APP_BACKEND_URL + '/portfolio/delete' 
    try {
        const response = await fetch(ServerUrl, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        return await response.json()
    }
    catch (err) {
        console.log(err)
    }
}