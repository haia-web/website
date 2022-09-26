import Image from 'next/image';
import { ContainerS } from './styles';

import RVEImage from '../../assets/svg/rve-logo.svg';

export const RVELogo = () => {
  return (
    <ContainerS variant="normal">
      <Image src={RVEImage} alt="RVE engenharia" />
    </ContainerS>
  );
};
