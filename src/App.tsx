import { useKey } from "./hooks/useKey"
import { CustomInput } from "./components/CustomInput/CustomInput"
import { Section } from "./layouts/section/Section"
import { Title } from "./components/Title/Title"
import { AppMenu } from "./components/appMenu/AppMenu"
import { Loader } from "./components/Loader/Loader"
import { createContext} from "react"


export const KeyContext = createContext('');

function App() {
 const { error, isValid, key, handleSetKey, isFetching } = useKey()


  return (
    <KeyContext.Provider value={key}>
      <Section>
      <Title>
        Meu Time
      </Title>
      {isValid ? (<>
        <AppMenu></AppMenu>
      </>)
      :
     (<>
        {isFetching ? (
      <Loader/> 
      ):( 
      <>
       <CustomInput value={key} setValue={handleSetKey}/> 
        <small>{error}</small>
      </>)}
      </>)}
      </Section>
    
      
      
    </ KeyContext.Provider>
  )
}

export default App
