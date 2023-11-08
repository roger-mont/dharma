'use client';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useToast } from '@/components/ui/use-toast';

import { rollADice } from '@utils/dice';
import { Button } from '@/components/ui/button';
import { Dices } from 'lucide-react';
import { TypeStatus } from '../types/TypeStatus';

export function StatusSection({ status }: { status: TypeStatus }) {
  const { toast } = useToast();
  const keys = Object.keys(status);

  return (
    <section className="flex justify-center p-4 rounded-xl flex-wrap">
      {keys.map((key, index) => {
        return (
          <Card className="m-2 w-40 text-center content-center" key={index}>
            <CardHeader key={index}>
              <CardTitle className="text-xl capitalize">{key}</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-light">
              {`${status[key]}`}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                name={`roll dice for ${key}`}
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
                <Dices />
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
}
