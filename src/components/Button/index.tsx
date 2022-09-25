import { useRouter } from 'next/router';
import { ButtonS } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  push?: boolean;
}

export const Button = ({
  variant,
  children,
  onClick,
  push,
  ...rest
}: ButtonProps) => {
  const router = useRouter();

  return (
    <ButtonS
      variant={variant || 'light'}
      onClick={(ev) => {
        if (onClick) onClick(ev);
        if (push) router.push('#form');
      }}
      {...rest}
    >
      {children}
    </ButtonS>
  );
};
