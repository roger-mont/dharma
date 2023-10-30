import { TypeDamage } from '@/app/types/TypeDamage';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RotateCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { restoreLife } from '@utils/helpers';
import { DamageSideBar } from '../DamageSideBar';

export function LifeCard({ status }: TypeDamage) {
  const router = useRouter();

  function onClickLife(value: number, id: number) {
    router.refresh();
    return restoreLife(value, id);
  }
  return (
    <Card className="max-w-[50%] min-w-[20%] m-2 text-center">
      <CardHeader>
        <CardTitle> Vida Atual: {status.act_vitalidade} </CardTitle>
        <CardContent>Vida Maxima: {status.max_vitalidade}</CardContent>
      </CardHeader>
      <CardFooter className="flex justify-center gap-4">
        <DamageSideBar status={status} />
        <Button onClick={() => onClickLife(status.max_vitalidade, status.id)}>
          <RotateCcw />
        </Button>
      </CardFooter>
    </Card>
  );
}
