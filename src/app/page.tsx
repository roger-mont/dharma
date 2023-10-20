import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {data: sheet, error } = await supabase
  .from('sheet')
  .select(`*,
    persona,
    persona(
      name_persona
    )
  `)
  console.log(sheet);
  
  
  return (
    <>
    <h1 className="text-4xl flex justify-center">Hello Word!</h1>
    </>
  )
}
