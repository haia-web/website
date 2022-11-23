import { ContainerS } from './styles';

import KarvasGRM from '../../assets/svg/karvas-grm.svg';

interface KarvasGRMLogoProps {
  variant?: 'bigger' | 'normal';
  color?: 'invert';
}

export const KarvasGRMLogo = ({ variant, color }: KarvasGRMLogoProps) => {
  return (
    <ContainerS variant={variant || 'normal'} color={color}>
      <KarvasGRM aria-label="Haia - Boa Vista" />
    </ContainerS>
  );
};
