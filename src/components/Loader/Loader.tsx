import { styled } from "styled-components";

export const Loader = styled.div`
    border: 5px solid #f3f3f3;
    border-top: 5px solid #922db9;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1.5s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
    }
`