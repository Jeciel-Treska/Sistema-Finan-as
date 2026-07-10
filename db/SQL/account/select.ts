import { supabase } from "@/lib/supabase/client";

export async function buscarTodasContas() {
  try {
    const { data, error } = await supabase.from("Account").select("*");

    if (error) {
      console.error(error);
      return [];
    }

    return data;
  } catch (err) {
    alert(err);
  }
}

export async function buscarConta(conta: string) {
  try {
    const { data, error } = await supabase
      .from("Account")
      .select("id")
      .eq("nome", conta)
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
