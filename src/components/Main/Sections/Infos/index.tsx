import { sizes } from '@utils/sizes';
import { Button } from '@components/Button';
import Link from 'next/link';
import { ContainerS } from './styles';

import HandIcon from '../../../../assets/svg/hand.svg';
import VectorSmall from '../../../../assets/svg/vector-small.svg';

export const Infos = () => {
  return (
    <ContainerS className="mx-w">
      <h3>Apartamentos de</h3>
      <section className="sizes">
        {sizes.map((size, i) => (
          <>
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
            {i === 0 && <span className="lines" />}
          </>
        ))}
      </section>
      <section className="promotion">
        <Link href="/regulamento-cliente-fidelidade-nov-22.pdf">
          <a href="replace">
            <div className="content">
              <div>
                <HandIcon style={{ width: '72px' }} />
                <span>Promoção Cliente Fidelidade</span>
              </div>
              <Button variant="light-invert">SAIBA MAIS</Button>
            </div>
            <div className="vector">
              <VectorSmall />
            </div>
          </a>
        </Link>
      </section>
    </ContainerS>
  );
};
