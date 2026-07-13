"use client";

import { BookmarkIcon, PencilIcon, XIcon } from "lucide-react";
import { inserirCategoria } from "@/db/SQL/category/insert";
import { useEffect, useState } from "react";
import { Category } from "@/db/Interface/category";
import { buscarTodasCategorias } from "@/db/SQL/category/select";
import { editaCategoria } from "@/db/SQL/category/update";
import { deletarCategoria } from "@/db/SQL/category/delete";

export function CardCategoria() {
  const [categoria, setCategoria] = useState("");
  const [tpCategoria, setTpCategoria] = useState("");
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [categorias, setCategorias] = useState<Category[]>([]);

  useEffect(() => {
    async function carregaCategoria() {
      const dados = await buscarTodasCategorias();
      setCategorias(dados);
    }
    carregaCategoria();
  }, []);

  async function handleSalvar() {
    try {
      if (editandoId) {
        await editaCategoria(editandoId, categoria, tpCategoria);
      } else {
        await inserirCategoria(categoria, tpCategoria);
      }

      const dados = await buscarTodasCategorias();
      setCategorias(dados);

      setCategoria("");
      setTpCategoria("");
      setEditandoId(null);
    } catch (err) {
      console.log(err);
    }
  }

  function handleEditar(categoria: Category) {
    setCategoria(categoria.nome);
    setTpCategoria(categoria.tipo);
    setEditandoId(categoria.id);
  }

  async function handleExcluir(id: string) {
    try {
      if (confirm("Deseja realmente excluir?")) {
        await deletarCategoria(id);

        const dados = await buscarTodasCategorias();
        setCategorias(dados);

        setCategoria("");
      }
    } catch (err) {
      console.log(err);
    }
  }

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
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
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
                value={tpCategoria}
                onChange={(e) => setTpCategoria(e.target.value)}
              >
                <option className="bg-gray-300" value="">
                  Selecione
                </option>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end sm:justify-center">
            <button
              className="flex justify-center cursor-pointer sm:items-center md:w-40 rounded-lg bg-gray-600 px-5 py-2 font-semibold text-white transition hover:bg-gray-800"
              onClick={handleSalvar}
            >
              {editandoId ? "Atualizar" : "Adicionar"}
            </button>
          </div>
        </div>
      </div>

      <h4 className="mt-4">Categorias Entrada:</h4>
      <div className="border rounded-md p-3 mt-2 border-gray-600 flex flex-col gap-4 h-40 overflow-y-scroll overflow-x-hidden">
        {categorias
          .filter((categoria) => categoria.tipo === "Entrada")
          .map((categoria) => (
            <div
              key={categoria.id}
              className={`flex justify-between rounded-lg border-l border-b border-r px-4 py-2 ${
                editandoId === categoria.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-600"
              }`}
            >
              <div>{categoria.nome}</div>
              <div className="flex items-center gap-2">
                <button
                  className="cursor-pointer text-blue-900"
                  onClick={() => handleEditar(categoria)}
                >
                  <PencilIcon className="size-5" />
                </button>
                <button
                  className="cursor-pointer text-red-500"
                  onClick={() => handleExcluir(categoria.id)}
                >
                  <XIcon />
                </button>
              </div>
            </div>
          ))}
      </div>
      <h4 className="mt-4">Categorias Saída:</h4>
      <div className="border rounded-md p-3 mt-2 border-gray-600 flex flex-col gap-4 h-40 overflow-y-scroll overflow-x-hidden">
        {categorias
          .filter((categoria) => categoria.tipo === "Saída")
          .map((categoria) => (
            <div
              key={categoria.id}
              className={`flex justify-between rounded-lg border-l border-b border-r px-4 py-2 ${
                editandoId === categoria.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-600"
              }`}
            >
              <div>{categoria.nome}</div>
              <div className="flex items-center gap-2">
                <button
                  className="cursor-pointer text-blue-900"
                  onClick={() => handleEditar(categoria)}
                >
                  <PencilIcon className="size-5" />
                </button>
                <button
                  className="cursor-pointer text-red-500"
                  onClick={() => handleExcluir(categoria.id)}
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
