import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
  }
`;

export const ContainerS = styled.section`
  text-align: center;
  background-color: rgb(var(--color-light));
  color: rgb(var(--color-dark));

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    letter-spacing: normal;
  }

  ${BreakpointsS}
`;
