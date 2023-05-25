import { useKey } from "./hooks/useKey"
import { CustomInput } from "./components/CustomInput/CustomInput"
import { Section } from "./layouts/section/Section"
import { Title } from "./components/Title/Title"
import { useEffect, createContext, useState } from "react"


export const KeyContext = createContext<string | null>(null);

function App() {
 const { error, isValid, key, handleSetKey } = useKey()
 const [validKey, setValidKey] = useState<string>('')
 
 useEffect(() => {
  setValidKey(key)
 }, [isValid])
 
  return (
    <KeyContext.Provider value={validKey }>
      <Section>
      <Title>
        Meu Time
      </Title>
      {isValid == false && <>
        <CustomInput value={key} setValue={handleSetKey}/> 
        <small>{error}</small>
      </>}
      {isValid == true && <>
        <p> Login Realizado com a chave {validKey}! </p>
      </>}
      </Section>
    </ KeyContext.Provider>
  )
}

export default App
