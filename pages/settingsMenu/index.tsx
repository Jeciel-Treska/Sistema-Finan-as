import { CardCategoria } from "@/components/settingCategorias";
import { CardContaBancaria } from "@/components/settingsContaBancaria";
import { CardFormaPagamento } from "@/components/settingsFormaPagamento";
import { CardInformacaoUsuario } from "@/components/settingsInformacaoUsuario";

export function TelaConfiguracao() {
  return (
    <div className="">
      <h2 className="text-3xl underline text-center my-4">Configuração</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-7xl gap-8 px-4">
          {/* {coluna 1} */}
          <div>
            <CardInformacaoUsuario />

            <CardContaBancaria />

            <CardFormaPagamento />
          </div>

          {/* {coluna 2} */}
          <div>
            <CardCategoria />
          </div>
        </div>
      </div>
    </div>
  );
}
