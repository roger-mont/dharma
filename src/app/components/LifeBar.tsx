import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TypeLifeBar } from '../types/TypeLifeBar';
import { DamageSideBar } from './DamageSideBar';

export function LifeBar({ status }: TypeLifeBar) {
  return (
    <aside className="flex justify-center content-around rounded-xl flex-wrap">
      <Card className="max-w[20%] min-w[300px] m-2 text-center">
        <CardHeader>
          <CardTitle> Vida Atual: {status.act_vitalidade} </CardTitle>
          <CardContent className="text-center">
            Vida Maxima: {status.max_vitalidade}
          </CardContent>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <DamageSideBar status={status} />
        </CardFooter>
      </Card>
    </aside>
  );
}
