import { TypeDamage } from '@/app/types/TypeDamage';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Minus, Plus } from 'lucide-react';

import { useRouter } from 'next/navigation';

import { onClickConsequences } from '@utils/helpers';

export function ConsequencesCard({ status }: TypeDamage) {
  const router = useRouter();

  function onClick(value: number, id: number) {
    router.refresh();

    return onClickConsequences(value, id);
  }

  return (
    <Card className="max-w-[50%] min-w-[20%] m-2 text-center">
      <CardHeader>
        <CardTitle>Consequencias</CardTitle>
      </CardHeader>
      <CardContent className="text-2xl">{status.consequencias}</CardContent>
      <CardFooter className="flex justify-center gap-4">
        <Button onClick={() => onClick(status.consequencias - 1, status.id)}>
          <Minus />
        </Button>
        <Button onClick={() => onClick(status.consequencias + 1, status.id)}>
          <Plus />
        </Button>
      </CardFooter>
    </Card>
  );
}
