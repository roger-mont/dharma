import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';
import { useRouter } from 'next/navigation';
import { restoreResis } from '@utils/helpers';
import { TypeDamage } from '../types/TypeDamage';

export function ResisComponent({ status }: TypeDamage) {
  const router = useRouter();

  function onClickResis(value: number, id: number) {
    router.refresh();
    return restoreResis(value, id);
  }

  return (
    <>
      <Label className="border-2 rounded-xl">
        Resistencia Maxima: {status.max_resis}
      </Label>
      <Label className="border-2 rounded-xl">
        Resistencia Atual: {status.act_resis}
      </Label>
      <Button onClick={() => onClickResis(status.max_resis, status.id)}>
        Reiniciar a Resitencia Atual
      </Button>
    </>
  );
}
