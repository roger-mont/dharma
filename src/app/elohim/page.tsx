import { getSheet } from "../../../utils/helpers"
import { PersonaName } from "../components/PersonaName"
import { Status } from "../components/Status"

export default async function Home() {

  const data = await getSheet(1)
  const status = {
      corpo: Number(data?.[0].corpo),
      movimento: Number(data?.[0].movimento),
      mente: Number(data?.[0].mente),
      espirito: Number(data?.[0].espirito),
    }

  console.log(status);
  
  return (
    <>
    {data?.map((player) => (
      <>
      <PersonaName name={player.persona.name_persona}/>
      <Status status={status}/>
      </>
    ))}
    </>
  )
}
