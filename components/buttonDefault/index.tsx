"use client";

type ButtonDefaultProps = {
  className?: string;
  Label: string;
  Type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  OnClick?: () => void;
};

export function ButtonDefault({
  className,
  Label,
  Type,
  OnClick,
}: ButtonDefaultProps) {
  return (
    <>
      <button
        className={`flex justify-center cursor-pointer sm:items-center lg:mx-20 rounded-lg bg-gray-600 px-5 py-2 font-semibold text-white transition hover:bg-gray-800 ${className}`}
        onClick={OnClick}
        type={Type}
      >
        {Label}
      </button>
    </>
  );
}
