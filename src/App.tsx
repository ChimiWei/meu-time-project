import { useKey } from "./hooks/useKey"
import { useState } from "react"
import { CustomInput } from "./components/CustomInput/CustomInput"
import { Section } from "./layouts/section/Section"
import { Title } from "./components/Title/Title"


function App() {
 const { status, isValid, setIsValid, key, handleSetKey } = useKey()
 console.log(key)
  return (
    <>
      <Section>
      <Title>
        Meu Time
      </Title>
      <div>
        <CustomInput value={key} setValue={handleSetKey}/> 
      </div>
      </Section>
    </>
  )
}

export default App
