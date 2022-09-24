import { Button } from '@components/Button';
import { ContainerS } from './styles';

export const LeisureAbout2 = () => {
  return (
    <ContainerS className="mx-w">
      <h2>
        O MAIOR POOL HOUSE DA CIDADE COM{' '}
        <strong>
          348M<sup>2</sup>
        </strong>
      </h2>
      <p>
        Distribuído em 2 ambientes integrados, esse espaço apresenta um conceito
        inovador de lazer premium: um salão de festas gourmet privativo, com
        churrasqueira e ampla piscina para confraternizações com sua família e
        convidados.
      </p>

      <Button type="button" variant="dark">
        Descubra mais detalhes
      </Button>
    </ContainerS>
  );
};
