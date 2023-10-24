import { getSheet } from "../../../utils/helpers"
import { PersonaName } from "../components/PersonaName"
import { Status } from "../components/Status"

export default async function Home() {

  const data = await getSheet(1)
  const status = {
      corpo: Number(data?.corpo),
      movimento: Number(data?.movimento),
      mente: Number(data?.mente),
      espirito: Number(data?.espirito),
    }
  
  return (
    <>
      <PersonaName name={data?.persona.name_persona}/>
      <Status status={status}/>
    </>
  )
}
