import ErrorMessage from "@/components/errorMessage";

export default function NotFoundPage() {
  return (
    <ErrorMessage
      pageTitle="Página não encontrada!"
      contentTitle="FinFlow"
      content="Erro 404 - A página que você está tentando acessar não existe neste site."
    />
  );
}
