import styled from 'styled-components';

interface ButtonSProps {
  variant: 'dark' | 'light' | 'light-invert';
}

export const ButtonS = styled.button<ButtonSProps>`
  cursor: pointer;
  border: none;
  color: ${({ variant }) =>
    variant === 'light-invert'
      ? 'rgb(var(--color-light))'
      : 'rgb(var(--color-primary))'};
  font-family: var(--font-primary);
  text-transform: uppercase;
  background-color: ${({ variant }) =>
    variant === 'dark'
      ? 'rgb(var(--color-dark))'
      : variant === 'light-invert'
      ? 'rgb(var(--color-primary))'
      : 'rgb(var(--color-light))'};

  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5;
  padding: 0.4rem 5%;

  :hover {
    filter: ${({ variant }) =>
      variant === 'dark' ? 'brightness(80%)' : 'brightness(110%)'};
  }
`;
