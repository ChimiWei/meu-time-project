import { styled } from "styled-components";



export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 100% 100%;
    width: 500px;
    padding-top: 50px;
    gap: 10em;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width:1160px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
        grid-template-columns: none;
        
       
        
    }
`