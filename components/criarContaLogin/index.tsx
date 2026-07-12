"use client";

import { signUpEmail, LoginGoogle } from "@/lib/supabase/authLogin";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { GoogleButton } from "../ButtonGoogle/Index";
import { useRouter } from "next/navigation";

export function CriarContaPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não são iguais");
      return;
    }

    setLoading(true);

    const { error } = await signUpEmail(nome, email, password);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Conta criada! Verifique seu email para confirmar o cadastro.");
  }

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
      <h1 className="text-4xl font-bold lg:hidden">FinFlow</h1>

      <p className="mb-8 text-slate-500 lg:text-2xl">
        Crie sua conta para começar.
      </p>

      <form className="space-y-4" onSubmit={handleRegister}>
        {/* Nome */}
        <div>
          <label className="mb-2 block font-medium">Nome</label>

          <div className="flex items-center rounded-xl border border-slate-300 px-3">
            <UserIcon className="mr-2 size-5 text-slate-500" />

            <input
              type="text"
              placeholder="Seu nome"
              className="h-12 w-full outline-none"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium">Email</label>

          <div className="flex items-center rounded-xl border border-slate-300 px-3">
            <MailIcon className="mr-2 size-5 text-slate-500" />

            <input
              type="email"
              placeholder="seu@email.com"
              className="h-12 w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Senha */}
        <div>
          <label className="mb-2 block font-medium">Senha</label>

          <div className="flex items-center rounded-xl border border-slate-300 px-3">
            <LockIcon className="mr-2 size-5 text-slate-500" />

            <input
              type="password"
              placeholder="********"
              className="h-12 w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Confirmar senha */}
        <div>
          <label className="mb-2 block font-medium">Confirmar senha</label>

          <div className="flex items-center rounded-xl border border-slate-300 px-3">
            <LockIcon className="mr-2 size-5 text-slate-500" />

            <input
              type="password"
              placeholder="********"
              className="h-12 w-full outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="h-12 w-full rounded-xl bg-green-600 font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Criando conta..." : "Criar conta"}
        </button>

        <GoogleButton onClick={LoginGoogle} />
      </form>

      <div className="mt-8 text-center text-sm text-slate-500">
        Já possui uma conta?{" "}
        <button
          className="font-semibold text-green-600 hover:underline"
          onClick={() => router.push("/login")}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
