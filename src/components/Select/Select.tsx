import { SetStateAction, useState, Dispatch } from "react"
import styled from "styled-components"


type SelectProps = {
    text: string,
    selected: string | '',
    setSelected: Dispatch<SetStateAction<string>>,
    isDisabled: boolean,
    object?: {
        id?: number
        name: string,
        code : string,
        icon: string

    }[]
}

export const Select = (props: SelectProps) => {

const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.setSelected(event.target.value)
}

const handleClick = (event: any) => {
 console.log(event.target.value)
}

return(
    <StyledSelect value={props.selected} onChange={handleSelect} onClick={handleClick} disabled={props.isDisabled}>
        <option value='' disabled={true} >{props.text}</option>
        { props.object?.map((item) => {
            return <option key={item.id ? item.id : item.code} value={item.id ? item.id : item.code}>{item.name}</option>
        })}
    </StyledSelect>
)
}

const StyledSelect = styled.select`
    display: block;
    min-width: 50%;
    font-size: 0.94em;
    text-align: center;
    padding: 0.5em 0.5em;
    color: #000000;
    background-color: #ffffff;
    border-radius: 25px;
    box-shadow: 0 8px 8px rgba(31, 30, 30, 0.3);
    outline: 2px solid #3e1c33;
    transition: all 0.2s ease-in-out;
    appearance:none;
    animation: fadeIn 2s;

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
        
    }
}

    &:focus-visible {
        outline: 2px solid #635d57dd;
    }
    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
        outline: 2px solid #635d57dd;
    }
    @media (max-width:1160px) {
        min-width: 80%;
    }
`