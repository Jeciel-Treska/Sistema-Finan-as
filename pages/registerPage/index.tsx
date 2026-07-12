import { CriarContaPage } from "@/components/criarContaLogin";
import { SpinLoader } from "@/components/spinLoader";
import { LandmarkIcon } from "lucide-react";
import { Suspense } from "react";

export function RegisterPage() {
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
          <Suspense fallback={<SpinLoader />}>
            <CriarContaPage />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
