'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { formSchema } from '../types/zodSchema';
import { TypeDamage } from '../types/TypeDamage';
import { decreaseDamage } from '../../../utils/helpers';

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
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (status.act_resis > 0) {
      const realDamage = status.act_resis - Number(values.damage);
      router.refresh();
      return decreaseDamage(realDamage, status.id);
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
        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  );
}
