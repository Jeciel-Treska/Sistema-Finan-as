"use client";

import Link from "next/link";

type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  pageTitle,
  contentTitle,
  content,
}: ErrorMessageProps) {
  return (
    <>
      <div className="w-full min-h-screen flex items-center ">
        <title>{pageTitle}</title>
        <div className="mx-4 w-full h-[40vh] md:h-[30vh] bg-slate-900 text-slate-100 p-8 flex items-center justify-center text-center">
          <div>
            <h1 className="text-7xl/tight mb-4 font-extrabold">
              {contentTitle}
            </h1>
            <div>{content}</div>
            <div className="mt-8">
              <Link
                href="/"
                className="bg-gray-200 text-black text-xl mt-8 rounded p-2"
              >
                Voltar para FinFlow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
