import { supabase } from "@/lib/supabase/client";

export async function deletarMeioPagamento(id: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  await supabase
    .from("paymentMethod")
    .delete()
    .eq("id", id)
    .eq("user_id", user?.id)
    .select();
}
