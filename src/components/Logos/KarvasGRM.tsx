import Image from 'next/image';
import { ContainerS } from './styles';

import KarvasGRM from '../../assets/svg/karvas-grm.svg';

interface KarvasGRMLogoProps {
  variant?: 'bigger' | 'normal';
  color?: 'invert';
}

export const KarvasGRMLogo = ({ variant, color }: KarvasGRMLogoProps) => {
  return (
    <ContainerS variant={variant || 'normal'} color={color}>
      <Image
        src={KarvasGRM}
        alt="Haia - Boa Vista"
        layout={variant === 'bigger' ? 'responsive' : undefined}
      />
    </ContainerS>
  );
};
