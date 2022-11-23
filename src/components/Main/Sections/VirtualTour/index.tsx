import { Button } from '@components/Button';
import { useState } from 'react';

import VectorLight from '../../../../assets/svg/vector-light.svg';
import { ContainerS } from './styles';

const iTeleportURLS = [
  'https://portal.iteleport.com.br/tour3d/karvas-grm-116-m2/fullscreen/',
  'https://portal.iteleport.com.br/tour3d/karvas-grm-151-m2/fullscreen/',
];

export const VirtualTour = () => {
  const [iframe, setIframe] = useState<{
    url: string;
    btn1: 'light' | 'dark';
    btn2: 'light' | 'dark';
  }>({
    url: iTeleportURLS[0],
    btn1: 'light',
    btn2: 'dark',
  });

  return (
    <ContainerS className="mx-w2">
      <div className="container">
        <div className="title">
          <div>
            <div className="vector">
              <VectorLight />
            </div>
            <h2>Tour Virtual</h2>
          </div>
          <p>Selecione a planta desejada e conheça o apartamento</p>
        </div>
        <div className="buttons">
          <Button
            type="button"
            variant={iframe.btn1}
            onClick={() =>
              setIframe({
                url: iTeleportURLS[0],
                btn1: 'light',
                btn2: 'dark',
              })
            }
          >
            planta 116m<sup>2</sup>
          </Button>
          <Button
            type="button"
            variant={iframe.btn2}
            onClick={() =>
              setIframe({
                url: iTeleportURLS[1],
                btn1: 'dark',
                btn2: 'light',
              })
            }
          >
            planta 151m<sup>2</sup>
          </Button>
        </div>
      </div>

      <div className="tour">
        <iframe
          src={iframe.url}
          width="100%"
          height="600"
          className="tour-virtual-iframe"
          title="Visite o decorado por meio do Tour Virtual 360º"
          loading="lazy"
        />
      </div>
    </ContainerS>
  );
};
