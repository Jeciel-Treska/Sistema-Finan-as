import { supabase } from "@/lib/supabase/client";
import { buscarCategoria } from "../category/select";

type inserirEntradaProps = {
  descricao: string;
  valor: number;
  categoria: string;
};

export async function inserirEntrada({
  descricao,
  valor,
  categoria,
}: inserirEntradaProps) {
  try {
    const BC = await buscarCategoria(categoria);

    const novaEntrada = {
      tipo: "entrada",
      descricao: descricao,
      valor: valor,
      forma_pagamento_id: "NULL",
      categoria_id: BC!.id,
      conta_id: "",
      data: "",
    };

    await supabase.from("transactions").insert(novaEntrada);
  } catch (err) {
    console.log(err);
  }
}

export async function inserirSaida() {
  try {
    const { data, error } = await supabase
      .from("transactions")
      .insert({
        tipo: "saida",
        descricao: "Teste",
        valor: 100,
        data: "2026-07-09",
      })
      .select();

    console.log("dados:", data);
    console.log("erro:", error);
  } catch (err) {
    console.log(err);
  }
}
