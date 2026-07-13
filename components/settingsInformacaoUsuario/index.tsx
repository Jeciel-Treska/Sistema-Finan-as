"use client";

import { buscaUsuario } from "@/db/SQL/user";
import { UserPenIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function CardInformacaoUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function carregar() {
      const usuario = await buscaUsuario();
      setNome(usuario?.nome ?? "");
      setEmail(usuario?.email ?? "");
    }
    carregar();
  }, []);
  return (
    <div className="border rounded-2xl p-3 border-gray-600 shadow-xl">
      <div className="flex justify-center">
        <UserPenIcon className="size-10 " />
      </div>
      <h3 className="text-xl text-center">Informações do Usuário </h3>

      <div className="flex flex-col justify-center mt-4">
        <label>Nome:</label>
        <input
          type="text"
          className="rounded-lg border border-gray-300 bg-gray-300 px-3 py-1 outline-none transition focus:border-gray-500"
          readOnly
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center mt-4">
        <label>Email:</label>
        <input
          type="text"
          className="rounded-lg border border-gray-300 bg-gray-300 px-3 py-1 outline-none transition focus:border-gray-500"
          readOnly
          value={email}
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
  );
}
