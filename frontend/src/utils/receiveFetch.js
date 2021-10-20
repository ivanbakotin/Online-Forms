async function receiveFetch(url, request, body_data) {
    try {
        const data = await fetch(url, {
            method: request,
            mode: "cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body_data)
        })  
        return data.json()
    } catch {
        alert("Website down")
    }
}

export default receiveFetch;
