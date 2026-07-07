type ModalEntradaProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalEntrada({ isOpen, setIsOpen }: ModalEntradaProps) {
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
                  type="text"
                  placeholder="Ex.: Salário"
                  className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-amber-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="valor" className="font-medium">
                  Valor
                </label>

                <input
                  id="valor"
                  type="number"
                  placeholder="0,00"
                  className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-amber-500"
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
                className="resize-none rounded-lg border border-gray-300 p-3 outline-none transition focus:border-amber-500"
              />
            </div>

            {/* Botões */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2 transition hover:bg-gray-100"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-900"
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
