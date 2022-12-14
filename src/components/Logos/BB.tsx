import { ContainerS } from './styles';

import BBImage from '../../assets/svg/bb-logo.svg';

export const BBLogo = () => {
  return (
    <ContainerS variant="bigger" style={{ width: '60%' }}>
      <BBImage aria-label="Banco do Brasil" />
    </ContainerS>
  );
};
