import Image from 'next/image';
import { itemsLeisure } from './itemsLeisure';
import { ContainerS } from './styles';

export const LeisureFull = () => {
  return (
    <ContainerS className="mx-w">
      <h1>Lazer Completo</h1>
      <ul>
        {itemsLeisure.map((itemLeisure) => (
          <li key={itemLeisure.id}>
            <div className="icon">
              <Image
                src={`/svgs/widget-${itemLeisure.id}.svg`}
                alt={itemLeisure.label}
                width={40}
                height={40}
              />
            </div>
            <span>{itemLeisure.label}</span>
          </li>
        ))}
      </ul>
    </ContainerS>
  );
};
