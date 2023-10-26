import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Sword } from 'lucide-react';

export function LifeBar({
  max_vitalidade,
  act_vitalidade,
}: {
  max_vitalidade: number;
  act_vitalidade: number;
}) {
  return (
    <aside className="flex justify-center content-around rounded-xl flex-wrap">
      <Card className="max-w[20%] min-w[300px] m-2 text-center">
        <CardHeader>
          <CardTitle> Vida Maxima </CardTitle>
          <CardContent className="text-center">{max_vitalidade}</CardContent>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button>
            <Sword />
          </Button>
        </CardFooter>
      </Card>
      <Card className="max-w[20%] min-w[300px] m-2 text-center">
        <CardHeader>
          <CardTitle> Vida Atual </CardTitle>
          <CardContent className="text-center">{act_vitalidade}</CardContent>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button>
            <Sword />
          </Button>
        </CardFooter>
      </Card>
    </aside>
  );
}
