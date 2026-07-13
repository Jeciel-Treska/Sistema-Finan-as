import { supabase } from "@/lib/supabase/client";

export async function inserirMeioPagamento(nome: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Usuário não autenticado.");
  }

  const { data, error } = await supabase.from("paymentMethod").insert({
    nome,
    user_id: user.id,
  });

  console.log(data);
  console.log(error);

  if (error) throw error;

  return data;
}
