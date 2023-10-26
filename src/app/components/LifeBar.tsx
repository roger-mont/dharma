import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DamageSideBar } from './DamageSideBar';

export function LifeBar({
  max_vitalidade,
  act_vitalidade,
  max_resis,
  act_resis,
  id,
}: {
  max_vitalidade: number;
  act_vitalidade: number;
  max_resis: number;
  act_resis: number;
  id: number;
}) {
  const status = {
    max_resis,
    act_resis,
    id,
  };
  return (
    <aside className="flex justify-center content-around rounded-xl flex-wrap">
      <Card className="max-w[20%] min-w[300px] m-2 text-center">
        <CardHeader>
          <CardTitle> Vida Atual: {act_vitalidade} </CardTitle>
          <CardContent className="text-center">
            Vida Maxima: {max_vitalidade}
          </CardContent>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <DamageSideBar status={status} />
        </CardFooter>
      </Card>
    </aside>
  );
}
