import styled from 'styled-components'


export const Button = styled.button`
    background-color:#f6921d;
    font-family: 'Oswald', sans-serif;
    color: #180101;
    font-weight: 100px;
    font-size: 1.05em;
    letter-spacing: .05em;
    padding: 0.8em 3em;
    border: 0;
    box-shadow: 0 8px 8px rgba(31, 30, 30, 0.3);
    border-radius: 7px;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color:#d87a0f;
    }

    &:active {
        cursor: pointer;
        background-color:#fda239;
    }
`