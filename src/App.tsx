import { useKey } from "./hooks/useKey"
import { CustomInput } from "./components/CustomInput/CustomInput"
import { Section } from "./layouts/section/Section"
import { Title } from "./components/Title/Title"



function App() {
 const { error, isValid, key, handleSetKey } = useKey()
 
 console.log(isValid)
  return (
    <>
      <Section>
      <Title>
        Meu Time
      </Title>
      {isValid == false && <>
        <CustomInput value={key} setValue={handleSetKey}/> 
        <small>{error}</small>
      </>}
      {isValid == true && <>
        <p> Login Realizado! </p>
      </>}
      </Section>
    </>
  )
}

export default App
