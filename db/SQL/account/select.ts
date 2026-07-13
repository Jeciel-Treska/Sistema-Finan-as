import { Account } from "@/db/Interface/account";
import { supabase } from "@/lib/supabase/client";

export async function buscarTodasContas(): Promise<Account[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("Account")
    .select("*")
    .eq("user_id", user.id);

  if (error) throw error;

  return data ?? [];
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
