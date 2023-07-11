import { styled } from "styled-components"
import { TeamList } from "../List/TeamList"
import { useFetch } from "../../hooks/useFetch"
import { CenterContainer } from "../../layouts/CenterContainer/CenterContainer"
import { Loader } from "../Loader/Loader"

type TeamMenuProps = {
    league: string,
    season: string,
}

type QueryObject = {
    team: { 
     id: number,
     name: string,
     code: string,
     logo: string
     }
    venue: {
        id: string,
        name: string,
        image: string
    }
}


export const TeamMenu = (props: TeamMenuProps) => {

   const {data, isFetching} = useFetch<QueryObject[]>({
   parameter: 'teams?league=' + props.league + '&season=', 
   value: props.season
    })


    return (<>
        <Container>
        {isFetching ? (
            <CenterContainer>
            <Loader /> 
            </CenterContainer>
       
    ):(
            <List>
                {data?.map((item) => {
                    return (<ListItem key={item.team.name}> 
                    <img src={item.team.logo} alt="" />
                    {item.team.name} 
                    </ListItem>)
                })}
            </List>
    )}
        </Container>
        
    </>)
}


const Container = styled.div`

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

const ListItem = styled.li `
   background-color: white;
   color: #1d0347;
   border-radius: 25em;
   padding: 2px 6px;
   margin: 0.2em;
   min-width: 40em;
`