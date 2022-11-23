import { Carousel } from '@components/Carousel';
import { CarouselItem } from '@components/Carousel/CarouselItem';
import Differentials from '@components/Differentials';
import { sizes } from '@utils/sizes';
import Image from 'next/image';

import VectorLight from '../../../../assets/svg/vector-dark.svg';
import VectorPlans from '../../../../assets/svg/vector-plans.svg';
import { differentials } from './differentials';
import { ContainerS } from './styles';

export const Plans = () => {
  return (
    <ContainerS>
      <div className="mx-w2">
        <div className="title">
          <div className="vector">
            <VectorLight aria-label="Localização Haia" />
          </div>
          <h2>Plantas</h2>
        </div>
        <Carousel animation="zoom">
          {sizes.map((size) => (
            <CarouselItem key={size.id}>
              <div className="carousel-item">
                <div key={size.id} className="size-container">
                  <span className="size">
                    {size.size}m<sup>2</sup>
                  </span>
                  <span className="about">
                    <h3>
                      {size.text}
                      <br />
                      <strong>{size.dorms}</strong>
                    </h3>
                  </span>
                </div>
                <Image
                  src={`/imgs/plans/plan-${size.size}.webp`}
                  alt={`planta ${size.size}m²`}
                  width={750}
                  height={450}
                />
              </div>
            </CarouselItem>
          ))}
        </Carousel>

        <div className="card">
          <div className="card-icon">
            <VectorPlans />
          </div>
          <div className="card-body">
            <span>Conheça toda as opções de plantas em nosso stand</span>
          </div>
        </div>
      </div>
      <Differentials
        title="diferenciais do apartamento"
        differentials={differentials}
      />
      <p className="legend" style={{ margin: 'var(--margin)' }}>
        * Equipamentos não inclusos <br />
        ** Coifa não será entregue
        <br />
        *** Infraestrutura completa na suíte master e living. Nos demais
        dormitórios e varanda, serão entregues apenas os pontos de drenos e
        perfurações de vigas.
        <br />
        **** Somente na suíte 2<br />
        ***** Somente nas unidades da Torre Tulipas
      </p>
    </ContainerS>
  );
};
