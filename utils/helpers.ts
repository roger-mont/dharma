'use-client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../supabase/supabase';

// import { PostgrestError } from '@supabase/supabase-js';

// export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;
// export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }>
//   ? Exclude<U, null>
//   : never;
// export type DbResultErr = PostgrestError;

export async function getSheet(id: number) {
  const data = await fetch(
    `https://qydrdpgikrvsejkkemre.supabase.co/rest/v1/sheet?id=eq.${id}&select=*,persona,persona(name_persona)`,
    {
      headers: {
        apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZHJkcGdpa3J2c2Vqa2tlbXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MTg0NjAsImV4cCI6MjAxMzM5NDQ2MH0.oPV3-WqNPFjfJmi2A2vOHPecCW5P4mkZg3bxBiCCbfA`,
      },
      cache: 'no-store',
    },
  );

  const response = await data.json();

  console.log(response);
  return response[0];
}

export async function decreaseResis(damage: number, id: number) {
  const supabase = createClientComponentClient<Database>();

  const query = supabase
    .from('sheet')
    .update({
      act_resis: damage,
    })
    .eq('id', id);

  return query;
}

export async function decreaseLife(damage: number, id: number) {
  const supabase = createClientComponentClient<Database>();

  const query = supabase
    .from('sheet')
    .update({
      act_vitalidade: damage,
    })
    .eq('id', id);

  return query;
}

export async function restoreResis(value: number, id: number) {
  const supabase = createClientComponentClient<Database>();

  const query = supabase
    .from('sheet')
    .update({
      act_resis: value,
    })
    .eq('id', id);

  return query;
}

export async function restoreLife(value: number, id: number) {
  const supabase = createClientComponentClient<Database>();

  const query = supabase
    .from('sheet')
    .update({
      act_vitalidade: value,
    })
    .eq('id', id);

  return query;
}
