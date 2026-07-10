import { supabase } from "@/lib/supabase/client";

export async function buscarTodasTransacoes() {
  const { data, error } = await supabase.from("transactions").select("*");

  console.log(data);
  console.log(error);
}
