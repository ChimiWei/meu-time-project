import { useState, useEffect, useContext } from "react";
import { KeyContext } from "../App";

export function useFetch<T = unknown>(query: string) {
const [data, setData] = useState<T | null>(null)
const [isFetching, setIsFetching] = useState<boolean>(false)
const validKey = useContext(KeyContext)


var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", validKey);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders
};

useEffect(() => {
  if(query) {
    console.log(validKey)
    setIsFetching(true)
    fetch('https://v3.football.api-sports.io/' + query, requestOptions)
    .then(response => response.json())
    .then(response => {
        setData(response.response);
        console.log(response.response)
    })
    .catch(error => console.log('error', error))
    .finally(() => {
      setIsFetching(false)
    })
  }
  }, [query])
return {data, isFetching}
}