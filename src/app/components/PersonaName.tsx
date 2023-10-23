import {
  Card,
  CardTitle,
} from "@/components/ui/card"

export function PersonaName({name}: {name:string}) {
  console.log(typeof name, 'aqui');
  
  return (
    <Card className="flex justify-center">
      <CardTitle>{name}</CardTitle>
    </Card>
  )
}