import { supabase } from "@/lib/supabase/client";

export async function inserirCategoria() {
  console.log("Cliquei");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  const novaCategoria = {
    user_id: user!.id,
    nome: "",
    tipo: "tipoCategoria",
  };

  // await supabase.from("category").insert(novaCategoria);
  return alert(JSON.stringify(novaCategoria, null, 2));
}
