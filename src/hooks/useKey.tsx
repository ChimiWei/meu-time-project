import { useState, useEffect } from "react";


export function useKey() {
const [key, setKey] = useState<string>('')
const [isValid, setIsValid] = useState<boolean>(false)
const [isFetching, setIsFetching] = useState<boolean>(false)
const [error, setError] = useState<string | boolean>('')

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");
myHeaders.append("x-rapidapi-key", key);


var requestOptions = {
  method: 'GET',
  headers: myHeaders
};


const handleSetKey = (value: string) => {
    setKey(value)
}



useEffect(() => {
    if(key != '') {
        setIsFetching(true)
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
        .finally(()=> {
            setIsFetching(false)
        })

        
    }
}, [key])


return {error, isValid, key, handleSetKey, isFetching}
}