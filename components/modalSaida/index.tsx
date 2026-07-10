import CurrencyInput from "@/utils/InputValor";
import { useState } from "react";

type ModalEntradaProps = {
  saidaOpen: boolean;
  setSaidaOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalSaida({
  saidaOpen,
  setSaidaOpen,
}: ModalEntradaProps) {
  const [valor, setValor] = useState(0);
  const [parcelado, setParcelado] = useState(false);

  return (
    <div className="absolute inset-x-0 top-15 z-30 flex justify-center px-4 py-6">
      <div className="w-full max-w-4xl rounded-2xl border border-red-600 bg-white shadow-2xl">
        <div className="p-6">
          <h2 className="mb-2 text-2xl font-bold sm:text-center">Nova Saída</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="descricao" className="font-medium">
                  Descrição
                </label>

                <input
                  id="descricao"
                  type="text"
                  placeholder="Ex.: Contas"
                  className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-red-500"
                />
              </div>

              <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-4 items-end">
                <div className="flex flex-col gap-2">
                  <label htmlFor="valor" className="font-medium">
                    Valor
                  </label>

                  <CurrencyInput
                    value={valor}
                    onChange={setValor}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-red-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="formaPagamento" className="font-medium">
                    F. pagamento
                  </label>

                  <select
                    id="formaPagamento"
                    className="rounded-lg border border-gray-300 px-3 py-2"
                  >
                    <option value="">Selecione</option>
                  </select>
                </div>

                <label className="flex items-center gap-2 whitespace-nowrap cursor-pointer sm:pb-2.5">
                  <input
                    type="checkbox"
                    checked={parcelado}
                    onChange={(e) => setParcelado(e.target.checked)}
                  />
                  Parcelado?
                </label>
              </div>
            </div>

            <div
              className={`grid gap-4 ${
                parcelado
                  ? "grid-cols-1 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-3"
              }`}
            >
              {parcelado && (
                <div className="flex flex-col gap-2">
                  <label htmlFor="parcelado" className="font-medium">
                    Quantas Parcelas?
                  </label>

                  <select
                    id="parcelado"
                    className="rounded-lg border border-gray-300 px-3 py-2"
                  >
                    <option>Selecione</option>
                    {Array.from({ length: 12 }, (_, index) => {
                      const parcelas = index + 1;

                      return (
                        <option key={parcelas} value={parcelas}>
                          {parcelas}x -{" "}
                          {(valor / parcelas).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <label htmlFor="categoria" className="font-medium">
                  Categoria
                </label>

                <select
                  id="categoria"
                  className="rounded-lg border border-gray-300 px-3 py-2"
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
                className="resize-none rounded-lg border border-gray-300 p-3 outline-none transition focus:border-red-500"
              />
            </div>

            {/* Botões */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2 transition hover:bg-gray-100"
                onClick={() => {
                  setSaidaOpen(!saidaOpen);
                }}
              >
                Cancelar
              </button>

              <button
                type="button"
                className="rounded-lg bg-red-400 px-5 py-2 font-semibold text-white transition hover:bg-red-900"
              >
                Salvar Saída
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
