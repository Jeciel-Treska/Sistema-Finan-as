import { loginEmail, LoginGoogle } from "@/lib/supabase/authLogin";
import { LockIcon, MailIcon } from "lucide-react";
import { Suspense, useState } from "react";
import { GoogleButton } from "../ButtonGoogle/Index";
import { useRouter } from "next/navigation";
import { SpinLoader } from "../spinLoader";

export function EntraContaLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPaword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const { error } = await loginEmail(email, password);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <>
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold lg:hidden">FinFlow</h1>

        <p className="lg:text-2xl mb-8 text-slate-500">
          Faça login para acessar sua conta.
        </p>

        <form className="space-y-5" onSubmit={handleLogin}>
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
                value={password}
                onChange={(e) => setPaword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Lembrar-me
            </label>

            <button type="button" className="text-green-600 hover:underline">
              Esqueci minha senha
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-xl bg-green-600 font-semibold text-white transition hover:bg-green-700"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <GoogleButton onClick={LoginGoogle} />
        </form>

        <div className="mt-8 text-center text-sm text-slate-500">
          Ainda não possui conta?{" "}
          <Suspense fallback={<SpinLoader />}>
            <button
              className="font-semibold text-green-600 hover:underline"
              onClick={() => router.push("/register")}
            >
              Criar conta
            </button>
          </Suspense>
        </div>
      </div>
    </>
  );
}
