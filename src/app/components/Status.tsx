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
import { Button } from '@/components/ui/button';
import { Dices } from 'lucide-react';

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
          <Card className="m-2 w-40 text-center content-center" key={index}>
            <CardHeader key={index}>
              <CardTitle className="text-xl">{`${key[0].toUpperCase()}${key.substring(
                1,
              )}`}</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-light">
              {status[key]}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
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
                <Dices />
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </aside>
  );
}
