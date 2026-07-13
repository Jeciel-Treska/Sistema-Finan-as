import { supabase } from "@/lib/supabase/client";

export async function inserirCategoria(nome: string, tipo: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Usuário não autenticado.");
  }

  const { data, error } = await supabase.from("category").insert({
    nome,
    tipo,
    user_id: user.id,
  });

  console.log(data);
  console.log(error);

  if (error) throw error;

  return data;
}
