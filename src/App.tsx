import { useKey } from "./hooks/useKey"
import { CustomInput } from "./components/CustomInput/CustomInput"
import { Section } from "./layouts/section/Section"
import { Title } from "./components/Title/Title"
import { AppMenu } from "./components/appMenu/AppMenu"
import { Loader } from "./components/Loader/Loader"
import { useEffect, createContext, useState } from "react"
import { TeamMenu } from "./components/TeamMenu/TeamMenu"



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
        <TeamMenu></TeamMenu>
      
    </ KeyContext.Provider>
  )
}

export default App
