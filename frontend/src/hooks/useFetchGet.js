import { useState, useEffect } from "react"

export default function useFetchGet(url) {
    const [ data, setData ] = useState()

    function getDataFromServer(url) {
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => alert("Website down"))
    }

    useEffect(() => getDataFromServer(url), [])

    return data
};
