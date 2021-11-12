export default function sendFetch(url, request, body_data) {
    try {
        fetch(url, {
            method: request,
            mode: "cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body_data)
        })  
    } catch {
        alert("Website down")
    }
}
