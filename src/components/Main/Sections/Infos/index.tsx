import { sizes } from '@utils/sizes';
import { ContainerS } from './styles';

export const Infos = () => {
  return (
    <ContainerS className="mx-w">
      <h3>Apartamentos de</h3>
      <div className="sizes">
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
      </div>
    </ContainerS>
  );
};
