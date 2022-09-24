import { useRouter } from 'next/router';
import { ButtonS } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
}

export const Button = ({
  variant,
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  const router = useRouter();

  return (
    <ButtonS
      variant={variant || 'light'}
      onClick={(ev) => {
        if (onClick) onClick(ev);
        if (rest.type === 'button') router.push('#form');
      }}
      {...rest}
    >
      {children}
    </ButtonS>
  );
};
