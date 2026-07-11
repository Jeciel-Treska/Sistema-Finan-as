"use client";

import { ButtonDefault } from "@/components/buttonDefault";
import { inserirCategoria } from "@/db/SQL/category/insert";
import {
  BookmarkIcon,
  CircleDollarSignIcon,
  CreditCardIcon,
  UserPenIcon,
} from "lucide-react";

export function TelaConfiguracao() {
  return (
    <>
      <h2 className="text-3xl underline text-center my-4">Configuração</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-7xl gap-8 px-4">
          {/* {coluna 1} */}
          <div>
            <div className="border rounded-2xl p-3 border-gray-600 shadow-xl">
              <div className="flex justify-center">
                <UserPenIcon className="size-10 " />
              </div>
              <h3 className="text-xl text-center">Informações do Usuário </h3>

              <div className="flex flex-col justify-center mt-4">
                <label>Nome:</label>
                <input
                  type="text"
                  className="rounded-lg border border-gray-300  px-3 py-1 outline-none transition focus:border-gray-500"
                />
              </div>
              <div className="flex flex-col justify-center mt-4">
                <label>Email:</label>
                <input
                  type="text"
                  className="rounded-lg border border-gray-300 bg-gray-300 px-3 py-1 outline-none transition focus:border-gray-500"
                  readOnly
                  value="aaa"
                />
              </div>

              <div className="flex flex-col justify-center mt-4">
                <label>Tema:</label>
                <div className="flex justify-center gap-4">
                  <label>Claro</label>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" />

                    <div
                      className="
                    h-7 w-12 rounded-full bg-slate-300 transition-colors
                    peer-checked:bg-green-500
                    after:absolute after:left-1 after:top-1
                    after:h-5 after:w-5 after:rounded-full
                    after:bg-white after:transition-transform
                    peer-checked:after:translate-x-5
                  "
                    />
                  </label>
                  <label>Escuro</label>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="rounded-lg cursor-pointer bg-gray-600 md:w-40 px-8 py-2 font-semibold text-white transition hover:bg-gray-800"
                >
                  Salvar
                </button>
              </div>
            </div>

            <div className="mt-8 border rounded-2xl p-3 border-gray-600 shadow-xl">
              <div className="flex justify-center">
                <CreditCardIcon className="size-10 " />
              </div>
              <h3 className="text-xl text-center">Conta Bancaria</h3>
              <div className="flex flex-col">
                <label className="text-start">Nome:</label>
                <input
                  type="text"
                  id="novaCategoria"
                  className="rounded-lg border border-gray-300 mb-4 px-3 py-1 outline-none transition focus:border-gray-500"
                />
                <div className="flex justify-between mb-2">
                  <h4 className="mt-4">Contas adicionadas:</h4>
                  <button className="flex justify-center cursor-pointer sm:items-center md:w-40 rounded-lg bg-gray-600 px-5 py-2 font-semibold text-white transition hover:bg-gray-800">
                    Adicionar
                  </button>
                </div>
              </div>
              <div className="border rounded-2xl p-3 border-gray-600 ">
                aqui vem as contas puxadas do banco
              </div>
            </div>

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
                />
                <div className="flex justify-between mb-2">
                  <h4 className="mt-4">Pgtos adicionados:</h4>
                  <button className="flex justify-center cursor-pointer sm:items-center md:w-40 rounded-lg bg-gray-600 px-5 py-2 font-semibold text-white transition hover:bg-gray-800">
                    Adicionar
                  </button>
                </div>
              </div>
              <div className="border rounded-2xl p-3 border-gray-600 ">
                aqui vem os pagamentos puxadas do banco
              </div>
            </div>
          </div>

          {/* {coluna 2} */}
          <div>
            <div className="border rounded-2xl mb-8 p-3 border-gray-600 shadow-xl">
              <div className="flex justify-center">
                <BookmarkIcon className="size-10 " />
              </div>

              <h3 className="text-xl text-center">Definição das Categorias </h3>
              <h4 className="text-center">Nova categoria</h4>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 ">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col lg:flex-row lg:gap-4">
                    <div className="flex flex-col">
                      <label className="text-start">Nome:</label>
                      <input
                        type="text"
                        id="novaCategoria"
                        className="rounded-lg border border-gray-300 px-3 py-1 outline-none transition focus:border-gray-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="conta" className="">
                        Categ. Entrada ou Saída?
                      </label>

                      <select
                        id="conta"
                        className="rounded-lg border border-gray-300 px-3 py-2"
                      >
                        <option className="bg-gray-300">Selecione</option>
                        <option>Entrada</option>
                        <option>Saída</option>
                      </select>
                    </div>
                  </div>
                  <ButtonDefault
                    Type="button"
                    Label="Adicionar"
                    OnClick={inserirCategoria}
                  />
                </div>
              </div>
              <div className="border rounded-2xl my-4 p-3 border-gray-600 ">
                aqui vem as categorias de entrada puxadas do banco
              </div>
              <div className="border rounded-2xl my-4 p-3 border-gray-600 ">
                aqui vem as categorias de saida puxadas do banco
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
