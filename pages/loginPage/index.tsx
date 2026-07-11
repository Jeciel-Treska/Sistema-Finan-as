"use client";

import { GoogleButton } from "@/components/ButtonGoogle/Index";
import { LoginGoogle } from "@/lib/supabase/authLogin";
import { LandmarkIcon, LockIcon, MailIcon } from "lucide-react";

export function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Lado esquerdo */}
        <section className="hidden lg:flex flex-col justify-center bg-slate-900 px-16 text-white">
          <div className="max-w-md">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-green-500 p-4">
                <LandmarkIcon className="size-8" />
              </div>

              <h1 className="text-4xl font-bold">FinFlow</h1>
            </div>

            <h2 className="mb-4 text-4xl font-bold">
              Organize sua vida financeira.
            </h2>

            <p className="text-lg text-slate-300">
              Controle receitas, despesas, contas bancárias e acompanhe seus
              gastos de maneira simples e intuitiva.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-3 rounded-full bg-green-500"></div>
                <span>Dashboard completo</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="size-3 rounded-full bg-green-500"></div>
                <span>Controle de categorias</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="size-3 rounded-full bg-green-500"></div>
                <span>Gestão de contas bancárias</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="size-3 rounded-full bg-green-500"></div>
                <span>Relatórios financeiros</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lado direito */}
        <section className="flex items-center justify-center px-6">
          <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
            <h1 className="text-4xl font-bold lg:hidden">FinFlow</h1>

            <p className="lg:text-2xl mb-8 text-slate-500">
              Faça login para acessar sua conta.
            </p>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block font-medium">Email</label>

                <div className="flex items-center rounded-xl border border-slate-300 px-3">
                  <MailIcon className="mr-2 size-5 text-slate-500" />

                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="h-12 w-full outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium">Senha</label>

                <div className="flex items-center rounded-xl border border-slate-300 px-3">
                  <LockIcon className="mr-2 size-5 text-slate-500" />

                  <input
                    type="password"
                    placeholder="********"
                    className="h-12 w-full outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Lembrar-me
                </label>

                <button
                  type="button"
                  className="text-green-600 hover:underline"
                >
                  Esqueci minha senha
                </button>
              </div>

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-green-600 font-semibold text-white transition hover:bg-green-700"
              >
                Entrar
              </button>

              <GoogleButton onClick={LoginGoogle} />
            </form>

            <div className="mt-8 text-center text-sm text-slate-500">
              Ainda não possui conta?{" "}
              <button className="font-semibold text-green-600 hover:underline">
                Criar conta
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
