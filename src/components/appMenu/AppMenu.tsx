import { Select } from "../Select/Select"
import { GridContainer } from "../../layouts/GridContainer/GridContainer"
import { useState } from "react"
import { Button } from "../Button/Button"
import { TeamMenu } from "../TeamMenu/TeamMenu"
import { SelectLeague } from "../Select/SelectLeague"
import { SelectTeam } from "../Select/SelectTeam"



export const AppMenu = () => {
const [country, setCountry] = useState<string>('')
const [league, setLeague] = useState<string>('')
const [season, setSeason] = useState<string>('')

const reset = () => {
    setCountry('')
    setLeague('')
    setSeason('')
}

    return (
        <>
        <Select text="Selecione o País" selected={country} setSelected={setCountry} isDisabled={country != '' ? true : false} query={'countries'} /> <Button onClick={reset} > Mudar o país </Button>
        <GridContainer>
        <SelectLeague text="Selecione a Liga" selected={league} seasonSelected={season} isDisabled={country == '' ? true : false} setSelected={setLeague} setSeasonSelected={setSeason} query={country} />
        </GridContainer>

         {season != '' && <TeamMenu league={league} season={season} />}
        </>
    )
}