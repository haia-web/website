import Image from 'next/image';

import LocalizationImage from '../../../../assets/imgs/localization.png';
import { ContainerS } from './styles';

export const Locale = () => {
  return (
    <ContainerS className="mx-w2">
      <Image
        src={LocalizationImage}
        alt="Localização Haia"
        layout="responsive"
      />
      <section className="dialog">
        <p>
          O bairro que une as maiores e mais importantes marcas dos universos da
          gastronomia, mercados, lojas, farmácias e praticidades.
          <br /> <br />
          Elegância, sofisticação e infraestrutura para estar conectado com o
          melhor que a cidade oferece.
        </p>
      </section>
    </ContainerS>
  );
};
