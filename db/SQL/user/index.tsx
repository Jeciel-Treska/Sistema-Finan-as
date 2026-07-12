import { supabase } from "@/lib/supabase/client";

export async function buscaUsuario() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  return {
    nome:
      user.user_metadata.nome ??
      user.user_metadata.full_name ??
      user.user_metadata.name ??
      "",
    email: user.email ?? "",
    id: user.id,
  };
}
