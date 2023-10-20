import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";

export async function getSheet(id:number) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {data: sheet, error } = await supabase
  .from('sheet')
  .select(`*,
    persona,
    persona(
      name_persona
    )
  `).eq('id', `${id}`)
  console.log(sheet, 'aa');

  return sheet
}