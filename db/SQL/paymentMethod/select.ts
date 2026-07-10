import { supabase } from "@/lib/supabase/client";

export async function buscarTodosMeiosPagamentos() {
  try {
    const { data, error } = await supabase.from("paymentMethod").select("*");

    if (error) {
      console.error(error);
      return [];
    }

    return data;
  } catch (err) {
    alert(err);
  }
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
