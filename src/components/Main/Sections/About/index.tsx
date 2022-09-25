import Image from 'next/image';
import { Button } from '@components/Button';
import { ContainerS } from './styles';

import RoomPhoto from '../../../../assets/imgs/img-room-photo.webp';

export const About = () => {
  return (
    <ContainerS className="mx-w2">
      <Image src={RoomPhoto} alt="sala - quarto" />
      <div>
        <div>
          <h2>
            Um lugar onde <br />
            <strong>tudo acontece</strong>
          </h2>
          <span>Aprecie essa obra de arte</span>
          <p>
            Morar no Haia Boa Vista é viver repleto de possibilidades ao seu
            redor.
            <br /> Estar imerso no desenvolvimento da cidade, onde estão as
            principais conexões que são essenciais para se viver bem.
            <br />
            <br />
            Escolha o bem-estar daqueles que você mais ama. Apaixone-se por esse
            empreendimento.
          </p>
        </div>
        <Button type="button" push>
          Fale com nossos especialista
        </Button>
      </div>
    </ContainerS>
  );
};
