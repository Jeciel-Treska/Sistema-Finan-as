import Link from "next/link";
import { MailIcon, CopyrightIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mt-4 w-full border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold text-slate-900">FinFlow</h2>
          <p className="mt-1 text-sm text-slate-500">
            Organize sua vida financeira de forma simples.
          </p>
        </div>

        {/* Navegação */}
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/dashboard" className="hover:text-green-600">
            Dashboard
          </Link>

          <Link href="/settings" className="hover:text-green-600">
            Configurações
          </Link>

          <Link href="/about" className="hover:text-green-600">
            Sobre
          </Link>
        </nav>

        {/* Redes */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Jeciel-Treska"
            target="_blank"
            className="text-slate-500 transition hover:text-black"
          >
            <FaGithub className="size-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/jecieltreskadasilva/"
            target="_blank"
            className="text-slate-500 transition hover:text-blue-600"
          >
            <FaLinkedin className="size-5" />
          </a>

          <a
            href="mailto:jecieltreska@gmail.com"
            className="text-slate-500 transition hover:text-green-600"
          >
            <MailIcon className="size-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-700">
        {new Date().getFullYear()} FinFlow • Desenvolvido por{" "}
        <span className="font-semibold">Jeciel Treska</span> <br />
        <CopyrightIcon className="mx-1 inline size-4 text-black" />
        Todos os direitos reservados.
      </div>
    </footer>
  );
}
