import { styled } from "styled-components"
import { useFetch } from "../../hooks/useFetch"
import { CenterContainer } from "../../layouts/CenterContainer/CenterContainer"
import { Loader } from "../Loader/Loader"

type TeamMenuProps = {
    teamID: number,
    season: number,
    
}

type QueryObject = {
    team: { 
     id: number,
     name: string,
     logo: string
     }
    fixtures: {
        played: {
            home: number,
            away: number,
            total: number
        },
        
    }
}


export const TeamMenu = (props: TeamMenuProps) => {

  // const {data, isFetching} = useFetch<QueryObject[]>({
 //  parameter: 'teams?season=' + props.season + '&team=' ,
  // value: props.teamID
   // })


    return (<>
        <MenuContainer>
            <Table>
                <tr>
                  <th>      </th>  
                  <th> Home </th>
                  <th> Away </th> 
                  <th> All </th>
                </tr>
                <tr>
                    <td> Wins </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>
                    <td> Draws </td>
                    <td> 1</td>
                    <td>1 </td>
                    <td> 1</td>
                </tr>
                <tr>
                    <td> Loss </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
            </Table>
        </MenuContainer>
        
    </>)
}


const MenuContainer = styled.div`
   min-width: 40em;
   color: white;
   min-height: 0em;
   background-color: #e9891b;
   border-radius: 15px;
   z-index: -999;
   opacity: 1;
   transition: all ease-in-out 1.1s;
   &.open {
    min-height: 8em;
    opacity: 1;
   }
`

const Table = styled.table`
    
`
