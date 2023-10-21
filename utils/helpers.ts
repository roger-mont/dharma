import { TypeSheet } from "@/app/types/TypeSheet";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";

export async function getSheet(id:number): Promise<TypeSheet> {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {data} = await supabase
  .from('sheet')
  .select(`*,
    persona,
    persona(
      name_persona
    )
  `).eq('id', `${id}`)
  
  return data
}