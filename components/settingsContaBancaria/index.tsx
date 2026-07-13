"use client";

import { Account } from "@/db/Interface/account";
import { deletarContaBancaria } from "@/db/SQL/account/delete";
import { inserirContaBancaria } from "@/db/SQL/account/insert";
import { buscarTodasContas } from "@/db/SQL/account/select";
import { editarContaBancaria } from "@/db/SQL/account/update";
import { CreditCardIcon, PencilIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function CardContaBancaria() {
  const [conta, setConta] = useState("");
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [contas, setContas] = useState<Account[]>([]);

  useEffect(() => {
    async function carregaContas() {
      const dados = await buscarTodasContas();
      setContas(dados);
    }

    carregaContas();
  }, []);

  async function handleSalvar() {
    try {
      if (editandoId) {
        await editarContaBancaria(editandoId, conta);
      } else {
        await inserirContaBancaria(conta);
      }

      const dados = await buscarTodasContas();
      setContas(dados);

      setConta("");
      setEditandoId(null);
    } catch (err) {
      console.log(err);
    }
  }

  function handleEditar(conta: Account) {
    setConta(conta.nome);
    setEditandoId(conta.id);
  }

  async function handleExcluir(id: string) {
    try {
      if (confirm("Deseja realmente excluir?")) {
        await deletarContaBancaria(id);

        const dados = await buscarTodasContas();
        setContas(dados);

        setConta("");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="mt-8 border rounded-2xl p-3 border-gray-600 shadow-xl">
      <div className="flex justify-center">
        <CreditCardIcon className="size-10 " />
      </div>
      <h3 className="text-xl text-center">Suas Contas</h3>
      <div className="flex flex-col">
        <label className="text-start">Nome:</label>
        <input
          type="text"
          id="novaCategoria"
          value={conta}
          onChange={(e) => setConta(e.target.value)}
          className="rounded-lg border border-gray-300 mb-4 px-3 py-1 outline-none transition focus:border-gray-500"
        />
        <div className="flex justify-between mb-2">
          <h4 className="mt-4">Contas adicionadas:</h4>
          <button
            className="flex justify-center cursor-pointer sm:items-center md:w-40 rounded-lg bg-gray-600 px-5 py-2 font-semibold text-white transition hover:bg-gray-800"
            onClick={handleSalvar}
          >
            {editandoId ? "Atualizar" : "Adicionar"}
          </button>
        </div>
      </div>
      <div className="border rounded-md p-3 border-gray-600 flex flex-col gap-4 max-h-40 overflow-scroll">
        {contas.map((conta) => (
          <div
            key={conta.id}
            className={`flex justify-between rounded-xl border px-4 py-2 ${
              editandoId === conta.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-600"
            }`}
          >
            <div key={conta.id}>{conta.nome}</div>
            <div className="flex items-center gap-2">
              <button
                className="cursor-pointer text-blue-900"
                onClick={() => handleEditar(conta)}
              >
                <PencilIcon className="size-5" />
              </button>
              <button
                className="cursor-pointer text-red-500"
                onClick={() => handleExcluir(conta.id)}
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
