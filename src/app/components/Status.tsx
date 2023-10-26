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

type StatusProps = {
  status: TypeStatus;
};
export function Status({ status }: StatusProps) {
  const { toast } = useToast();
  const keys = Object.keys(status);

  return (
    <aside className="flex justify-center p-4 rounded-xl flex-wrap">
      {keys.map((key, index) => {
        return (
          <Card
            className="m-2 w-[173px] text-center content-center"
            key={index}
          >
            <CardHeader key={index}>
              <CardTitle>{`${key[0].toUpperCase()}${key.substring(
                1,
              )}`}</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-light">
              {status[key]}
            </CardContent>
            <CardFooter className="flex justify-center">
              <button
                onClick={() =>
                  toast({
                    duration: 3000,
                    title: `Resultado da rolagem de ${key[0].toUpperCase()}${key.substring(
                      1,
                    )}:`,
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
