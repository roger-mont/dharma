import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { PostgrestError } from '@supabase/supabase-js';
import { Dice } from 'dice-typescript';

export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }>
  ? Exclude<U, null>
  : never;
export type DbResultErr = PostgrestError;

export async function getSheet(id: number) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const query = supabase
    .from('sheet')
    .select(
      `*,
    persona,
    persona(
      name_persona
    )
  `,
    )
    .eq('id', `${id}`);

  const { data }: DbResult<typeof query> = await query;

  return data?.[0];
}

export function rollADice(value: number) {
  const dice = new Dice();
  switch (value) {
    case 1:
      dice.roll('1d2').total;
      break;
    case 2:
      dice.roll('1d4');
  }
}
