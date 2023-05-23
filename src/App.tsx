import { useKey } from "./hooks/useKey"
import { useState } from "react"
import { CustomInput } from "./components/CustomInput/CustomInput"

function App() {
 const { status, isValid, setIsValid, key, handleSetKey } = useKey()
 console.log(key)
  return (
    <>
      <div>
        <CustomInput value={key} setValue={handleSetKey}/> 
      </div>
      <div>
        <p> Oi </p>
      </div>
    </>
  )
}

export default App
