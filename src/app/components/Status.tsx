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
    <aside className="flex justify-center p-4 rounded-xl">
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
                    description: `${rollADice(Number(status[key]))}`,
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
