import { Container } from './styles';

interface DifferentialsProps {
  title: string;
  differentials: {
    id: number;
    Icon: () => JSX.Element;
    text: string;
  }[];
}

const Differentials = ({ differentials, title }: DifferentialsProps) => {
  return (
    <Container className="mx-w">
      <div className="title">
        <span>{title}</span>
      </div>
      <ul>
        {differentials.map((differential) => (
          <li key={differential.id}>
            <differential.Icon />
            <span>{differential.text}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Differentials;
