import Image from 'next/image';
import { ContainerS } from './styles';

import KarvasGRM from '../../assets/svg/karvas-grm.svg';

interface KarvasGRMLogoProps {
  variant?: 'bigger' | 'normal';
}

export const KarvasGRMLogo = ({ variant }: KarvasGRMLogoProps) => {
  return (
    <ContainerS variant={variant || 'normal'}>
      <Image
        src={KarvasGRM}
        alt="Haia - Boa Vista"
        layout={variant === 'bigger' ? 'responsive' : undefined}
      />
    </ContainerS>
  );
};
