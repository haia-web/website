import { Carousel } from '@components/Carousel';
import { CarouselItem } from '@components/Carousel/CarouselItem';
import { sizes } from '@utils/sizes';
import Image from 'next/image';

import VectorLight from '../../../../assets/svg/vector-dark.svg';
import VectorPlans from '../../../../assets/svg/vector-plans.svg';
import { ContainerS } from './styles';

export const Plans = () => {
  return (
    <ContainerS className="mx-w2">
      <div className="title">
        <div className="vector">
          <Image src={VectorLight} alt="Localização Haia" />
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
          <Image src={VectorPlans} alt="" layout="fixed" />
        </div>
        <div className="card-body">
          <span>Conheça toda as opções de plantas em nosso stand</span>
        </div>
      </div>
    </ContainerS>
  );
};
