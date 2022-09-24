import { HaiaLogo, KarvasGRMLogo } from '@components/Logos';
import { ContainerS } from './styles';

export const Hero = () => {
  return (
    <ContainerS className="mx-w2">
      <div className="slogan">
        <HaiaLogo />

        <h1 className="slogan">
          ONDE <br />
          VIVER <br />
          É MAIS <br />
          QUE <br />
          EXISTIR
        </h1>
      </div>
      <KarvasGRMLogo />
    </ContainerS>
  );
};
