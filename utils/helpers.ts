'use-client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@db/supabase';
import { TypeDamage } from '@/app/types/TypeDamage';
import { TypeStatus } from '@/app/types/TypeStatus';

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

  const [response] = await data.json();

  const status: TypeStatus = {
    corpo: Number(response.corpo),
    movimento: Number(response.movimento),
    mente: Number(response.mente),
    espirito: Number(response.espirito),
  };

  const lifeBar: TypeDamage = {
    id: Number(response.id),
    max_resis: Number(response.max_resis),
    act_resis: Number(response.act_resis),
    max_vitalidade: Number(response.max_vitalidade),
    act_vitalidade: Number(response.act_vitalidade),
    movimento: Number(response.movimento),
    consequencias: Number(response.consequencias),
  };

  return { status, lifeBar, persona: response.persona.name_persona };
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

export async function consequencesUpdate(
  value: Database['public']['Enums']['consequencias'],
  id: number,
) {
  const supabase = createClientComponentClient<Database>();

  const query = supabase
    .from('sheet')
    .update({
      consequencias: value,
    })
    .eq('id', id);

  return query;
}

export function onClickConsequences(value: number, id: number) {
  switch (value) {
    case 0: {
      return consequencesUpdate('0', id);
    }
    case 1: {
      return consequencesUpdate('1', id);
    }
    case 2: {
      return consequencesUpdate('2', id);
    }
    case 3: {
      return consequencesUpdate('3', id);
    }
    case 4: {
      return consequencesUpdate('4', id);
    }
    case 5: {
      return consequencesUpdate('5', id);
    }
    case 6: {
      return consequencesUpdate('6', id);
    }
  }
}

export async function getTechiniques() {
  const data = await fetch(
    `https://qydrdpgikrvsejkkemre.supabase.co/rest/v1/techniques?select=*`,
    {
      headers: {
        apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZHJkcGdpa3J2c2Vqa2tlbXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MTg0NjAsImV4cCI6MjAxMzM5NDQ2MH0.oPV3-WqNPFjfJmi2A2vOHPecCW5P4mkZg3bxBiCCbfA`,
      },
      next: {
        revalidate: false,
      },
    },
  );

  const response = await data.json();
  console.log('store');

  return response;
}
