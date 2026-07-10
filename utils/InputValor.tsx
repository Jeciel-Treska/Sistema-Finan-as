"use client";

import { useState } from "react";

type CurrencyInputProps = {
  value?: number;
  onChange?: (value: number) => void;
  placeholder?: string;
  className?: string;
};

export default function CurrencyInput({
  value = 0,
  onChange,
  placeholder = "R$ 0,00",
  className = "",
}: CurrencyInputProps) {
  const [valor, setValor] = useState(formatCurrency(value));

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Remove tudo que não for número
    const numbers = e.target.value.replace(/\D/g, "");

    // Transforma em número com centavos
    const numericValue = Number(numbers) / 100;

    setValor(formatCurrency(numericValue));

    onChange?.(numericValue);
  }

  return (
    <input
      type="text"
      value={valor}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
    />
  );
}
