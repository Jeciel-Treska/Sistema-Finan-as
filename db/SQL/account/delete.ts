import { supabase } from "@/lib/supabase/client";

export async function deletarContaBancaria(id: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  await supabase
    .from("Account")
    .delete()
    .eq("id", id)
    .eq("user_id", user?.id)
    .select();
}
