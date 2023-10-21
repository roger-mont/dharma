import { TypeStatus } from "../types/TypeStatus";

export function Status({status}: TypeStatus) {
  
  return (
    <aside className="inline-table text-xl border-sky-800 rounded-2xl border-2 ml-40">
      {status?.map((player: any) => (
    <>
    <h2 className="flex p-2 text-2xl" key={player.id}>Corpo: {player.corpo}</h2>
    <h2 className="flex p-2 text-2xl" key={player.id}>Movimento: {player.movimento}</h2>
    <h2 className="flex p-2 text-2xl" key={player.id}>Mente: {player.mente}</h2>
    <h2 className="flex p-2 text-2xl" key={player.id}>Espirito: {player.espirito}</h2>
  </>
  ))}
    </aside>
  )


}