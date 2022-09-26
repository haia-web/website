import { HaiaLogo, KarvasGRMLogo } from '@components/Logos';
import { useLayoutContext } from '@contexts/Layout/useLayoutContext';
import { ContainerS } from './styles';

export const Hero = () => {
  const {
    currWidth,
    currTheme: { breakpoints },
  } = useLayoutContext();
  const mobileScreen =
    currWidth >= Number(breakpoints.mobile.replace('px', ''));

  return (
    <ContainerS className="mx-w2">
      <div className="slogan">
        <HaiaLogo />

        {mobileScreen && (
          <h1 className="slogan">
            ONDE <br />
            VIVER <br />
            É MAIS <br />
            QUE <br />
            EXISTIR
          </h1>
        )}
      </div>
      <div
        style={{
          margin: !mobileScreen ? '0 auto' : '0',
        }}
      >
        <KarvasGRMLogo />
      </div>
    </ContainerS>
  );
};
