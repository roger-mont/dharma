import { TypeStatus } from "../types/TypeStatus";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type StatusProps = {
  status: TypeStatus
}
export function Status({status}: StatusProps) {

  const keys = Object.keys(status)
  
  return (
    <aside className="flex justify-center p-4 rounded-xl">
      {keys.map((key, index) => {
        return (
          <Card className="m-2 w-40 text-center content-center" key={index}>
          <CardHeader key={index}>
            <CardTitle>{key}</CardTitle>
            </CardHeader>
          <CardContent >{status[key]}</CardContent>
          <CardFooter className="flex justify-center">
            <button>🎲</button>
          </CardFooter>
          </Card>
        )

      })}
  </aside>
  )
}