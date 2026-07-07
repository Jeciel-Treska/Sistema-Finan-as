"use client";
import {
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  BanknoteIcon,
  LayoutDashboardIcon,
  MenuIcon,
  ReceiptIcon,
  SettingsIcon,
  UserRoundIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import ModalEntrada from "../modalEntrada";

export function MenuResponsive() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [entradaOpen, setEntradaOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-20 h-18 border-b border-slate-200 bg-white/95 px-4 shadow-sm backdrop-blur md:px-8">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-600 text-lg font-black text-white">
              <BanknoteIcon />
            </div>
            <div>
              <p className="text-base font-bold leading-tight text-slate-950">
                Finanças
              </p>
              <p className="text-xs font-medium text-slate-500">
                Entradas e saídas
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            <a
              href=""
              className="flex gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition underline hover:bg-slate-100 hover:text-slate-950"
            >
              <LayoutDashboardIcon className="size-5 text-amber-500" />
              Dash
            </a>
            <button
              className="cursor-pointer flex gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition underline hover:bg-slate-100 hover:text-slate-950"
              onClick={() => setEntradaOpen(!entradaOpen)}
            >
              <BanknoteArrowUpIcon className="size-5 text-green-600" />
              Entrada
            </button>
            <a
              href=""
              className="flex gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition underline hover:bg-slate-100 hover:text-slate-950"
            >
              <BanknoteArrowDownIcon className="size-5 text-red-500" />
              Saída
            </a>
            <a
              href=""
              className="flex gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition underline hover:bg-slate-100 hover:text-slate-950"
            >
              <ReceiptIcon className="size-5 text-cyan-600" />
              Extrato
            </a>
            <a
              href=""
              className="flex gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition underline hover:bg-slate-100 hover:text-slate-950"
            >
              <SettingsIcon className="size-6 text-gray-600" />
            </a>
            <a
              href=""
              className="flex gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition underline hover:bg-slate-100 hover:text-slate-950"
            >
              <UserRoundIcon className="size-6 text-gray-600" />
            </a>
          </nav>

          <div className="md:hidden flex">
            <a
              href=""
              className="flex gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition underline hover:bg-slate-100 hover:text-slate-950"
            >
              <UserRoundIcon className="size-5 text-gray-600" />
            </a>
            <button
              className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              {menuOpen ? (
                <XIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="absolute z-30 w-full overflow-hidden py-4 transition-all duration-500 mt-15 md:hidden">
          <nav className="mx-3 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
            <ul className="flex flex-col">
              <a
                href=""
                className="flex gap-1 rounded-lg px-4 py-3 justify-center text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                <LayoutDashboardIcon className="size-5 text-amber-500" />
                Dash
              </a>
              <button
                className="cursor-pointer flex gap-1 rounded-lg px-4 py-3 justify-center text-sm font-semibold text-slate-700 hover:bg-slate-100"
                onClick={() => {
                  return (setEntradaOpen(!entradaOpen), setMenuOpen(!menuOpen));
                }}
              >
                <BanknoteArrowUpIcon className="size-5 text-green-600" />
                Entrada
              </button>
              <a
                href=""
                className="flex gap-1 rounded-lg px-4 py-3 justify-center text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                <BanknoteArrowDownIcon className="size-5 text-red-500" />
                Saída
              </a>
              <a
                href=""
                className="flex gap-1 rounded-lg px-4 py-3 justify-center text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                <ReceiptIcon className="size-5 text-cyan-600" />
                Extrato
              </a>
              <a
                href=""
                className="flex gap-1 rounded-lg px-4 py-3 justify-end text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                <SettingsIcon className="size-5 text-gray-600" />
              </a>
            </ul>
          </nav>
        </div>
      )}

      {entradaOpen && (
        <ModalEntrada isOpen={entradaOpen} setIsOpen={setEntradaOpen} />
      )}
    </>
  );
}
