import { useState, useEffect } from "react";


export function useKey() {
const [key, setKey] = useState<string>('')
const [isValid, setIsValid] = useState<boolean>(false)
const [fetched, setFetched] = useState<boolean>(true)
const [error, setError] = useState<string | boolean>('')

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");
myHeaders.append("x-rapidapi-key", key);


var requestOptions = {
  method: 'GET',
  headers: myHeaders
};


const handleSetKey = (value: string) => {
    setFetched(false)
    setKey(value)
}



useEffect(() => {
    if(key != '') {
        fetch("https://v3.football.api-sports.io/status", requestOptions)
        .then(response => response.json())
        .then(response => {
            if(response.errors.token) {
                
                setError(response.errors.token)
            } else {
                setIsValid(response.response.subscription.active)
            }
        })
        .catch(error => console.log('error', error))

        
    }
}, [key])


return {error, isValid, key, handleSetKey}
}