import { KarvasGRMLogo } from '@components/Logos';
import { ContainerS } from './styles';

export const Footer = () => {
  return (
    <ContainerS>
      <KarvasGRMLogo variant="bigger" />

      <h1>
        Av. Engenheiro Carlos Reinaldo Mendes, 3340, Alto da Boa Vista, Sorocaba
        / SP
      </h1>
      <span>
        As imagens são meramente ilustrativas e o projeto será entregue conforme
        Memorial Descritivo. Memorial de Incorporação registrado no 1º Oficial
        de Registro de Imóveis de Sorocaba sob R.3/195.424
      </span>
      <a href="https://coreag.com.br/" target="_blank" rel="noreferrer">
        Intelligence By Core.Ag
      </a>
    </ContainerS>
  );
};
