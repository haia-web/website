import Image from 'next/image';
import { ContainerS } from './styles';

import HaiaImage from '../../assets/svg/haia-logo.svg';

export const HaiaLogo = () => {
  return (
    <ContainerS variant="normal">
      <Image src={HaiaImage} alt="Haia - Boa Vista" />
    </ContainerS>
  );
};
