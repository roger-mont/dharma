import { TypeStatus } from '../types/TypeStatus';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Dice } from 'dice-typescript';

type StatusProps = {
  status: TypeStatus;
};
export function Status({ status }: StatusProps) {
  const dice = new Dice();

  console.log(dice.roll('{1d10}>=8'));

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
              <button>🎲</button>
            </CardFooter>
          </Card>
        );
      })}
    </aside>
  );
}
