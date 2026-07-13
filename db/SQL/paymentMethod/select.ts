import { MeioPagamento } from "@/db/Interface/paymentMethod";
import { supabase } from "@/lib/supabase/client";

export async function buscarTodosMeiosPagamentos(): Promise<MeioPagamento[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("paymentMethod")
    .select("*")
    .eq("user_id", user.id);

  if (error) throw error;

  return data ?? [];
}

export async function buscarMeioPagamento(meiopago: string) {
  try {
    const { data, error } = await supabase
      .from("paymentMethod")
      .select("id")
      .eq("nome", meiopago)
      .single();

    if (error) {
      console.error(error);
      return null;
    }

    return data;
  } catch (err) {
    alert(err);
  }
}
