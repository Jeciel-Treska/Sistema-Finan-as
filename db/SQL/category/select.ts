import { Category } from "@/db/Interface/category";
import { supabase } from "@/lib/supabase/client";

export async function buscarTodasCategorias(): Promise<Category[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("category")
    .select("*")
    .eq("user_id", user.id);

  if (error) throw error;

  return data ?? [];
}

export async function buscarCategoria(categoria: string) {
  try {
    const { data, error } = await supabase
      .from("category")
      .select("id")
      .eq("nome", categoria)
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
