import { Select } from "../Select/Select"
import { GridContainer } from "../../layouts/GridContainer/GridContainer"
import { useState } from "react"
import { Button } from "../Button/Button"
import { TeamMenu } from "../TeamMenu/TeamMenu"
import { SelectLeague } from "../Select/SelectLeague"



export const AppMenu = () => {
const [country, setCountry] = useState<string>('')
const [league, setLeague] = useState<string>('')
const [team, setTeam] = useState<string>('')

const reset = () => {
    setCountry('')
    setLeague('')
    setTeam('')
}

    return (
        <>
        <Select text="Selecione o País" selected={country} setSelected={setCountry} isDisabled={country != '' ? true : false} query={'countries'} /> <Button onClick={reset} > Mudar o país </Button>
        <GridContainer>
        <SelectLeague text="Selecione a Liga" selected={league} isDisabled={country == '' ? true : false} setSelected={setLeague} query={'leagues?code=' + country} />
        <Select text="Selecione o Time" selected={team} isDisabled={league == '' ? true : false} setSelected={setTeam} query={league} />
        </GridContainer>
        <TeamMenu />
        </>
    )
}