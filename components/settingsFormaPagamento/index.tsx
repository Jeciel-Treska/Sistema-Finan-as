"use client";

import { MeioPagamento } from "@/db/Interface/paymentMethod";
import { deletarMeioPagamento } from "@/db/SQL/paymentMethod/delete";
import { inserirMeioPagamento } from "@/db/SQL/paymentMethod/insert";
import { buscarTodosMeiosPagamentos } from "@/db/SQL/paymentMethod/select";
import { editarMeioPagamento } from "@/db/SQL/paymentMethod/update";
import { CircleDollarSignIcon, PencilIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function CardFormaPagamento() {
  const [formaPag, setFormaPag] = useState("");
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [pgtos, setPgtos] = useState<MeioPagamento[]>([]);

  useEffect(() => {
    async function carregaPagamentos() {
      const dados = await buscarTodosMeiosPagamentos();
      setPgtos(dados);
    }

    carregaPagamentos();
  }, []);

  async function handleSalvar() {
    try {
      if (editandoId) {
        await editarMeioPagamento(editandoId, formaPag);
      } else {
        await inserirMeioPagamento(formaPag);
      }

      const dados = await buscarTodosMeiosPagamentos();
      setPgtos(dados);

      setFormaPag("");
      setEditandoId(null);
    } catch (error) {
      console.error(error);
    }
  }

  function handleEditar(pgto: MeioPagamento) {
    setFormaPag(pgto.nome);
    setEditandoId(pgto.id);
  }

  async function handleExcluir(id: string) {
    try {
      if (confirm("Deseja realmente excluir?")) {
        await deletarMeioPagamento(id);

        const dados = await buscarTodosMeiosPagamentos();
        setPgtos(dados);

        setFormaPag("");
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="mt-8 border rounded-2xl p-3 border-gray-600 shadow-xl">
      <div className="flex justify-center">
        <CircleDollarSignIcon className="size-10 " />
      </div>
      <h3 className="text-xl text-center">Formas de Pagamento</h3>
      <div className="flex flex-col">
        <label className="text-start">Nome:</label>
        <input
          type="text"
          id="novaCategoria"
          className="rounded-lg border border-gray-300 mb-4 px-3 py-1 outline-none transition focus:border-gray-500"
          value={formaPag}
          onChange={(e) => setFormaPag(e.target.value)}
        />
        <div className="flex justify-between mb-2">
          <h4 className="mt-4">Pgtos adicionados:</h4>
          <button
            className="flex justify-center cursor-pointer sm:items-center md:w-40 rounded-lg bg-gray-600 px-5 py-2 font-semibold text-white transition hover:bg-gray-800"
            onClick={handleSalvar}
          >
            {editandoId ? "Atualizar" : "Adicionar"}
          </button>
        </div>
      </div>
      <div className="border rounded-md p-3 border-gray-600 flex flex-col gap-4 max-h-40 overflow-y-scroll overflow-x-hidden">
        {pgtos.map((pgto) => (
          <div
            key={pgto.id}
            className={`flex justify-between rounded-lg border-l border-b border-r px-4 py-2 ${
              editandoId === pgto.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-600"
            }`}
          >
            <div key={pgto.id}>{pgto.nome}</div>
            <div className="flex items-center gap-2">
              <button
                className="cursor-pointer text-blue-900"
                onClick={() => handleEditar(pgto)}
              >
                <PencilIcon className="size-5" />
              </button>
              <button
                className="cursor-pointer text-red-500"
                onClick={() => handleExcluir(pgto.id)}
              >
                <XIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
