import { useKey } from "./hooks/useKey"
import { CustomInput } from "./components/CustomInput/CustomInput"
import { Section } from "./layouts/section/Section"
import { Title } from "./components/Title/Title"
import { AppMenu } from "./components/appMenu/AppMenu"
import { Loader } from "./components/Loader/Loader"
import { createContext, useState} from "react"
import styled from "styled-components";
import { TeamMenu } from "./components/TeamMenu/TeamMenu"


export const KeyContext = createContext('');

function App() {
 const { error, isValid, key, handleSetKey, isFetching } = useKey()

const [open, setOpen] = useState<boolean>(true)

const handleClick = () => {
  setOpen(!open)
}

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
      <TeamMenu teamID={1} season={111}/>
    <List>
      <ListItem> 
               <P onClick={handleClick}> <Logo src='https://media-3.api-sports.io/football/teams/119.png' alt="" />
                 Test </P>

                <MenuContainer className={open ? 'open' : ''}>
                  
                 </MenuContainer>  
        </ListItem>
        <ListItem> 
               <P onClick={handleClick}> <Logo src='https://media-3.api-sports.io/football/teams/119.png' alt="" />
                 Test </P>

                <MenuContainer className={open ? 'open' : ''}>
                  
                 </MenuContainer>  
        </ListItem>
                </List>
    </ KeyContext.Provider>
  )
}

const MenuContainer = styled.div`
   min-width: 40em;
   min-height: 0em;
   background-color: #e9891b1d;
   border-radius: 15px;
   z-index: -999;
   opacity: 0;
   transition: all ease-in-out 1.1s;
   &.open {
    min-height: 8em;
    opacity: 1;
   }
`

const List = styled.ul `
   display: flex;
   flex-direction: column;
   text-decoration: none;
   list-style: none;
   margin: 0;
   padding: 0;
   justify-content: center;
   align-items: center;


`
const P = styled.p`
  margin: 0;
  padding: 2px 6px;
  background-color: white;
  color: #1d0347;
  border-radius: 25em;
  &:hover {
      cursor: pointer;
  }
`
const ListItem = styled.li `
   margin: 0.2em;
   min-width: 40em;
   transition: all ease-in-out 0.2s;

   &:hover {
      transform: translateY(-2px);
    }
`

const Logo = styled.img`
    width: 3%;
    vertical-align: -3px;
    padding-right: 4px;

    
`
export default App



