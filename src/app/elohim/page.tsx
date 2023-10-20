import { cookies } from "next/headers"
import { getSheet } from "../../../utils/helpers"
import { PersonaName } from "../components/PersonaName"

export default async function Home() {
  const sheet = await getSheet(1)
  return (
    <>
    {sheet?.map((player) => (
      <>
      <PersonaName name={player.name}/>
      <h1 className="flex justify-center p-10 text-4xl" key={player.id}>{player.persona.name_persona}</h1>
      <h2 className="flex pl-20 text-xl" key={player.id}>Corpo: {player.corpo}</h2>
      <h2 className="flex pl-20 text-xl" key={player.id}>Movimento: {player.movimento}</h2>
      <h2 className="flex pl-20 text-xl" key={player.id}>Mente: {player.mente}</h2>
      <h2 className="flex pl-20 text-xl" key={player.id}>Espirito: {player.espirito}</h2>
      </>
    ))}
    </>
  )
}
