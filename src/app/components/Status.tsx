export function Status({status}: any) {
  console.log(status);
  
  return (
    <>
      {status?.map((player: any) => (
    <>
    <h2 className="flex pl-20 text-xl" key={player.id}>Corpo: {player.corpo}</h2>
    <h2 className="flex pl-20 text-xl" key={player.id}>Movimento: {player.movimento}</h2>
    <h2 className="flex pl-20 text-xl" key={player.id}>Mente: {player.mente}</h2>
    <h2 className="flex pl-20 text-xl" key={player.id}>Espirito: {player.espirito}</h2>
  </>
  ))}
    </>
  )


}