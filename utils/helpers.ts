import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";

import { PostgrestError } from '@supabase/supabase-js'


export type DbResult<T> = T extends PromiseLike<infer U> ? U : never
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }> ? Exclude<U, null> : never
export type DbResultErr = PostgrestError


export async function getSheet(id:number) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const query = supabase
  .from('sheet')
  .select(`*,
    persona,
    persona(
      name_persona
    )
  `).eq('id', `${id}`)
  
  const {data}: DbResult<typeof query> = await query 
  
  return data?.[0]
}