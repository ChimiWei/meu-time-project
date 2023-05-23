import { useFetch } from './hooks/useFetch'

function App() {
  const { data } = useFetch<string>('https://api-football-v1.p.rapidapi.com/v3/teams?id=33')
  console.log(data)
  return (
    <>
      <div>
        <p> Oi </p>
        <p>{ data }</p>
      </div>
    </>
  )
}

export default App
