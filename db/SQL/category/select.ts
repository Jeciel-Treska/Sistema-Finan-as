import { supabase } from "@/lib/supabase/client";

export async function buscarTodasCategorias() {
  try {
    const { data, error } = await supabase.from("category").select("*");

    if (error) {
      console.error(error);
      return [];
    }

    return data;
  } catch (err) {
    alert(err);
  }
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
