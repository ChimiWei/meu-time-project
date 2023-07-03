import { useState, useEffect, useContext } from "react";
import { KeyContext } from "../App";

type QueryObject = {
  parameter: string,
  value: string | number
}


export function useFetch<T = unknown>(query: QueryObject) {
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
  if(query.value != '') {
    console.log(validKey)
    setIsFetching(true)
    fetch('https://v3.football.api-sports.io/' + query.parameter + query.value, requestOptions)
    .then(response => response.json())
    .then(response => {
        setData(response.response);
        console.log(response)
    })
    .catch(errors => console.log('error', errors))
    .finally(() => {
      setIsFetching(false)
    })
  }
  }, [query.value])
return {data, isFetching}
}