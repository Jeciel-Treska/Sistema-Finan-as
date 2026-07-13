import { supabase } from "@/lib/supabase/client";

export async function editarContaBancaria(id: string, nome: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Usuário não autenticado.");
  }

  const { data, error } = await supabase
    .from("Account")
    .update({
      nome,
    })
    .eq("id", id)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) throw error;

  return data;
}
