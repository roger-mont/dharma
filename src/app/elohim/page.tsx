import { cookies } from "next/headers"
import { getSheet } from "../../../utils/helpers"
import { PersonaName } from "../components/PersonaName"
import { Status } from "../components/Status"

export default async function Home() {
  const sheet = await getSheet(1)
  return (
    <>
    {sheet?.map((player) => (
      <>
      <PersonaName name={player.persona.name_persona}/>
      <Status status={sheet}/>
      </>
    ))}
    </>
  )
}
