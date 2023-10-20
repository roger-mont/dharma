import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {data: sheet, error } = await supabase
  .from('sheet')
  .select(`*,
    persona,
    persona(
      name_persona
    )
  `)
  console.log(sheet);
  
  
  return (
    <>
    {sheet?.map((player) => (
      <>
      <h1 className="flex justify-center p-10 text-4xl" key={player.id}>{player.persona.name_persona}</h1>
      <h2 className="flex pl-20 text-xl" key={player.id}>Corpo: {player.corpo}</h2>
      <h2 className="flex pl-20 text-xl" key={player.id}>Movimento: {player.movimento}</h2>
      <h2 className="flex pl-20 text-xl" key={player.id}>Mente: {player.mente}</h2>
      <h2 className="flex pl-20 text-xl" key={player.id}>Espirito: {player.espirito}</h2>
      <h2 className="flex pl-20 text-xl" key={player.id}>Corpo: {player.corpo}</h2>

      </>
    ))}
    </>
  )
}
