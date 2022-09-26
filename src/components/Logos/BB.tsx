import Image from 'next/image';
import { ContainerS } from './styles';

import BBImage from '../../assets/svg/bb-logo.svg';

export const BBLogo = () => {
  return (
    <ContainerS variant="normal">
      <Image src={BBImage} alt="Banco do Brasil" />
    </ContainerS>
  );
};
