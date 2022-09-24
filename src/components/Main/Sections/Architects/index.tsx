import Image from 'next/image';
import { Dialog } from '@components/Dialog';

import { Button } from '@components/Button';
import { ContainerS } from './styles';
import VectorComplex from '../../../../assets/svg/vector-complex.svg';
import PlaySvg from '../../../../assets/svg/play.svg';
import { architects } from './architects';

export const Architects = () => {
  return (
    <ContainerS className="mx-w2">
      <div className="vector">
        <Image src={VectorComplex} alt="" aria-hidden />
      </div>
      <h2>
        Projeto assinado <br /> por <strong>Grandes Referências</strong>
      </h2>
      <section className="architects">
        {architects.map((architect) => (
          <div key={architect.id}>
            <div className="about">
              <Image
                src={architect.img}
                alt={`Imagem - ${architect.name}`}
                width={15 * 16}
                height={21 * 16}
                aria-hidden
              />
              <h1>{architect.name}</h1>
              <span>
                {architect.title[0]}
                <br />
                {architect.title[1]}
              </span>
              <p>{architect.message}</p>
            </div>
            <Dialog>
              <Button
                type="button"
                data-fancybox="video"
                data-src={architect.url}
                variant="dark"
              >
                <Image
                  src={PlaySvg}
                  alt="play - ícone vetorizado"
                  width={50}
                  height={50}
                />
                <span>Clique aqui e assista o vídeo</span>
              </Button>
            </Dialog>
          </div>
        ))}
      </section>
    </ContainerS>
  );
};
