import { supabase } from "@/lib/supabase/client";

export async function deletarCategoria(id: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  await supabase
    .from("category")
    .delete()
    .eq("id", id)
    .eq("user_id", user?.id)
    .select();
}
