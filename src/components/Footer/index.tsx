import { KarvasGRMLogo } from '@components/Logos';
import { BBLogo } from '@components/Logos/BB';
import { RVELogo } from '@components/Logos/RVE';
import { ContainerS } from './styles';

export const Footer = () => {
  return (
    <ContainerS>
      <section className="top">
        <div>
          <span className="content">construção</span>
          <span className="logo">
            <RVELogo />
          </span>
        </div>
        <div>
          <span className="content">incorporação</span>
          <span className="logo">
            <KarvasGRMLogo color="invert" variant="bigger" />
          </span>
        </div>
        <div>
          <span className="content">financiamento</span>
          <span className="logo">
            <BBLogo />
          </span>
        </div>
      </section>
      <section className="middle">
        <h1>
          Av. Engenheiro Carlos Reinaldo Mendes, 3340, Alto da Boa Vista,
          Sorocaba / SP
        </h1>
        <span>
          As imagens são meramente ilustrativas e o projeto será entregue
          conforme Memorial Descritivo. Memorial de Incorporação registrado no
          1º Oficial de Registro de Imóveis de Sorocaba sob R.3/195.424
        </span>
      </section>
      <section className="bottom">
        <a href="https://coreag.com.br/" target="_blank" rel="noreferrer">
          Intelligence By Core.Ag
        </a>
      </section>
    </ContainerS>
  );
};
