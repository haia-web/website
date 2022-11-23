import styled, { css } from 'styled-components';

interface ContainerSProps {
  variant: 'bigger' | 'normal' | 'invert';
}

export const ContainerS = styled.div<ContainerSProps>`
  ${({ variant }) =>
    variant === 'bigger' &&
    css`
      position: relative;
      width: 80%;
      transform: scale(1.4);
    `}
  ${({ color }) =>
    color === 'invert' &&
    css`
      filter: invert(1);
    `}
`;
