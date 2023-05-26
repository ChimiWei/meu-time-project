import { Select } from "../Select/Select"
import { GridContainer } from "../../layouts/GridContainer/GridContainer"
import { useState } from "react"
import { Button } from "../Button/Button"



export const AppMenu = () => {
const [country, setCountry] = useState<string>('')
const [league, setLeague] = useState<string>('')
const [team, setTeam] = useState<string>('')

const reset = () => {
    setCountry('')
    setLeague('')
    setTeam('')
}


const Paises = [
    {
        name: 'Brasil',
        code: 'BR',
        icon: 'test'
    },
    {
        name: 'Estados Unidos',
        code: 'EUA',
        icon: 'test'
    }
]

    return (
        <>
        <Select text="Selecione o País" selected={country} setSelected={setCountry} isDisabled={country != '' ? true : false} object={Paises} /> <Button onClick={reset} > Mudar o país </Button>
        <GridContainer>
        <Select text="Selecione a Liga" selected={league} isDisabled={country == '' ? true : false} setSelected={setLeague} object={Paises}/>
        <Select text="Selecione o Time" selected={team} isDisabled={league == '' ? true : false} setSelected={setTeam} object={Paises} />
        </GridContainer>
        </>
    )
}