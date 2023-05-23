import styled from "styled-components";


export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 84vh;
    flex-direction: column;
    animation: fadeIn 2s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

`