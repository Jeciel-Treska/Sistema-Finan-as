import { supabase } from "@/lib/supabase/client";

export async function editaCategoria(id: string, nome: string, tipo: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Usuário não autenticado.");
  }

  const { data, error } = await supabase
    .from("category")
    .update({
      nome,
      tipo,
    })
    .eq("id", id)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) throw error;

  return data;
}
