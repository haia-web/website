import styled, { css } from 'styled-components';

interface ContainerSProps {
  variant: 'bigger' | 'normal';
}

const BreakpointsS = css`
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    width: 80%;
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    width: 100%;
  }
`;

export const ContainerS = styled.div<ContainerSProps>`
  ${({ variant }) =>
    variant === 'bigger' &&
    css`
      position: relative;
      width: 40%;
      ${BreakpointsS}
    `}
`;
