import { useState, useEffect } from "react";


export function useFetch<T = unknown>(url: string) {
const [data, setData] = useState<T | null>(null)

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", import.meta.env.VITE_MY_KEY);
myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

var requestOptions = {
  method: 'GET',
  headers: myHeaders
};

useEffect(() => {
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(response => {
        setData(response.response);
    })
    .catch(error => console.log('error', error));
}, [])
return {data}
}