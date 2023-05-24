import { useState } from "react"
import { Button } from "../Button/Button"
import styled from "styled-components"

type InputProps = {
    value: string
    setValue:  (value: string) => void
}


export const CustomInput = (props: InputProps) => {
    const [key, setKey] = useState<string>('')
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKey(event.target.value)
        console.log('value is:', event.target.value);
      };
    const handleClick = () => {
        props.setValue(key)
    }

return(
    <>
    <div>
    <p><StyledInput value={key} onChange={handleChange} placeholder="Insira sua chave" /></p>
    <Button onClick={handleClick}> ENTRAR </Button>
    </div>
    
    </>
)

}

const StyledInput = styled.input`
    text-decoration: none;
    text-align: center;
    padding: 10px 10px;
    width: 450px;
    font-size: 1em;
    border: 1px solid #602749;
    border-radius: 0.25rem!important;
    color: white;
    background-color: #602749;
    transition: all 0.4s ease-in-out;
    animation: fadeIn 2s;
    
    &:focus-visible {
        outline: 1px solid #602749;
    }



    @media screen and (max-width: 920px) {
        position: relative;
        

    }

    

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

`
