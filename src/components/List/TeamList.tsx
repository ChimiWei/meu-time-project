import { styled } from "styled-components"
import { useFetch } from "../../hooks/useFetch"
import { CenterContainer } from "../../layouts/CenterContainer/CenterContainer"
import { Loader } from "../Loader/Loader"
import { TeamMenu } from "../TeamMenu/TeamMenu"

type TeamListProps = {
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


export const TeamList = (props: TeamListProps) => {

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
                    <P> <Logo src={item.team.logo} alt="" />
                    {item.team.name} </P> 
                    </ListItem>)
                })}
            </List>
    )}
        </Container>
        
    </>)
}


const Container = styled.div`
    margin-top: 3px;
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
  
`

const ListItem = styled.li `
   margin: 0.2em;
   min-width: 40em;
   transition: all ease-in-out 0.2s;

   &:hover {
      cursor: pointer;
      transform: translateY(-2px);

    }
`

const Logo = styled.img`
    width: 3%;
    vertical-align: -3px;
    padding-right: 4px;
`