"use client";

import { BookmarkIcon } from "lucide-react";
import { ButtonDefault } from "../buttonDefault";
import { inserirCategoria } from "@/db/SQL/category/insert";

export function CardCategoria() {
  return (
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
  );
}
