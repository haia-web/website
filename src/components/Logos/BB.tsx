import Image from 'next/image';
import { ContainerS } from './styles';

import BBImage from '../../assets/svg/bb-logo.svg';

export const BBLogo = () => {
  return (
    <ContainerS variant="bigger" style={{ width: '100%' }}>
      <Image src={BBImage} alt="Banco do Brasil" width={120} height={120} />
    </ContainerS>
  );
};
