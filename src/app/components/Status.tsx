import { TypeStatus } from "../types/TypeStatus";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  // CardTitle,
} from "@/components/ui/card"

type StatusProps = {
  status: TypeStatus
}
export function Status({status}: StatusProps) {

  console.log(status, 'acola');
  const keys = Object.keys(status)
  
  return (
    <aside className="flex flex-col rounded-xl">
      {keys.map((key, index) => {
        return (
          <Card key={index}>
          <CardHeader key={index}>{key}</CardHeader>
          <CardContent>{status[key]}</CardContent>
          <CardFooter>Rodar</CardFooter>
          </Card>
        )

      })}
  </aside>
  )
}