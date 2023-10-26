'use client';
import { TypeStatus } from '../types/TypeStatus';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useToast } from '@/components/ui/use-toast';

import { rollADice } from '../../../utils/dice';
import { Dice } from 'dice-typescript';

type StatusProps = {
  status: TypeStatus;
};
export function Status({ status }: StatusProps) {
  const dice = new Dice();
  const { toast } = useToast();
  const keys = Object.keys(status);

  console.log(dice.roll('1d16'));

  return (
    <aside className="flex justify-center p-4 rounded-xl flex-wrap">
      {keys.map((key, index) => {
        return (
          <Card className="m-2 w-40 text-center content-center" key={index}>
            <CardHeader key={index}>
              <CardTitle>{key}</CardTitle>
            </CardHeader>
            <CardContent>{status[key]}</CardContent>
            <CardFooter className="flex justify-center">
              <button
                onClick={() =>
                  toast({
                    duration: 3000,
                    title: `Resultado da rolagem de ${key}:`,
                    description: `${rollADice(status[key])?.dice} : ${rollADice(
                      status[key],
                    )?.total}`,
                  })
                }
              >
                🎲
              </button>
            </CardFooter>
          </Card>
        );
      })}
    </aside>
  );
}
