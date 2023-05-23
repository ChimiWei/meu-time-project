import { useState } from "react";

type Status = {
        sub: {
            active: boolean
        }
}

export function useKey() {
const [key, setKey] = useState<string>('')
const [isValid, setIsValid] = useState<boolean>(false)
const [status, setStatus] = useState<Status[]| null>(null)

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", key);
myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

var requestOptions = {
  method: 'GET',
  headers: myHeaders
};


const handleSetKey = (value: string) => {
    setKey(value)
    if(key != '') {
        fetch("https://v3.football.api-sports.io/status", requestOptions)
        .then(response => response.json())
        .then(response => {
            setStatus(response.response);
        })
        .catch(error => console.log('error', error));
    }
}



if(status) {
    console.log(status)
}
return {status, isValid, setIsValid, key, handleSetKey}
}