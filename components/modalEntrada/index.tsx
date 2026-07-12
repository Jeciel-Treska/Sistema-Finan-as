import { inserirEntrada } from "@/db/SQL/transactions/Inserts";
import CurrencyInput from "@/utils/InputValor";
import { useState } from "react";

type ModalEntradaProps = {
  entradaOpen: boolean;
  setEntreadaOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalEntrada({
  entradaOpen,
  setEntreadaOpen,
}: ModalEntradaProps) {
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [conta, setConta] = useState("");

  async function handleInserirEntrada() {
    await inserirEntrada({ descricao, valor, categoria });
  }

  return (
    <div className="absolute inset-x-0 top-15 z-30 flex justify-center px-4 py-6">
      <div className="w-full max-w-4xl rounded-2xl border border-green-600 bg-white shadow-2xl">
        <div className="p-6">
          <h2 className="mb-2 text-2xl font-bold sm:text-center">
            Nova Entrada
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="descricao" className="font-medium">
                  Descrição
                </label>

                <input
                  id="descricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  type="text"
                  placeholder="Ex.: Salário"
                  className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-green-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="valor" className="font-medium">
                  Valor
                </label>

                <CurrencyInput
                  value={valor}
                  onChange={setValor}
                  className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-green-500"
                />
              </div>
            </div>

            {/* Segunda linha */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="categoria" className="font-medium">
                  Categoria
                </label>

                <select
                  id="categoria"
                  className="rounded-lg border border-gray-300 px-3 py-2"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option>Selecione</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="conta" className="font-medium">
                  Conta
                </label>

                <select
                  id="conta"
                  className="rounded-lg border border-gray-300 px-3 py-2"
                  value={conta}
                  onChange={(e) => setConta(e.target.value)}
                >
                  <option>Selecione</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="data" className="font-medium">
                  Data
                </label>

                <input
                  id="data"
                  type="date"
                  className="rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>
            </div>

            {/* Observação */}
            <div className="flex flex-col gap-2">
              <label htmlFor="obs" className="font-medium">
                Observações
              </label>

              <textarea
                id="obs"
                rows={4}
                placeholder="Digite alguma observação..."
                className="resize-none rounded-lg border border-gray-300 p-3 outline-none transition focus:border-green-500"
              />
            </div>

            {/* Botões */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2 transition hover:bg-gray-100"
                onClick={() => {
                  setEntreadaOpen(!entradaOpen);
                }}
              >
                Cancelar
              </button>

              <button
                type="button"
                className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-900"
                onClick={handleInserirEntrada}
              >
                Salvar Entrada
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
