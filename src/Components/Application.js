import axios from "axios"
import { useState, useEffect } from "react"
export const Application = () => {
    const [items, setItems] = useState([]);
    const [userid, setUserId] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
        .then(Response => setItems(Response.data))
    }, [userid]);

    return (
    <>
    <input type = "number" onChange={(event) => setUserId(Number(event.target.value))}/>

<pre>{JSON.stringify(items, null, 2)}</pre>       
    </>
    )
}