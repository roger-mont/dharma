'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { formSchema } from '../types/zodSchema';
import { TypeDamage } from '../types/TypeDamage';
import { decreaseLife, decreaseResis } from '@utils/helpers';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useRouter } from 'next/navigation';

export function DamageForm({ status }: TypeDamage) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      damage: '',
      defense: `${status.movimento}`,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const reducedDamage = Number(values.damage) - Number(values.defense);

    if (status.act_resis > 0 && reducedDamage >= 1) {
      const realDamage = status.act_resis - reducedDamage;

      router.refresh();

      form.reset();

      return decreaseResis(realDamage, status.id);
    } else if (status.act_resis == 0 && reducedDamage >= 1) {
      const realDamage = status.act_vitalidade - reducedDamage;

      router.refresh();

      form.reset();

      return decreaseLife(realDamage, status.id);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="damage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dano</FormLabel>
              <FormControl>
                <Input placeholder="0" {...field} />
              </FormControl>
              <FormDescription>
                Escreva o dano total dado pelo mestre
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="defense"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Defesa</FormLabel>
              <FormControl>
                <Input
                  placeholder={`${status.movimento}`}
                  defaultValue={`${status.movimento}`}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Escreva o seu valor de Defesa (Movimento + Armadura + Bonus)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="m-2" type="submit">
          Adicionar Dano
        </Button>
      </form>
    </Form>
  );
}
