import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    > section {
      position: unset;
      width: 100%;
    }
  }
`;

export const ContainerS = styled.section`
  padding: 0 !important;
  position: relative;
  top: 7px;

  > section {
    background-color: rgb(var(--color-primary));
    position: absolute;
    padding: 2rem;
    bottom: 0;
    left: var(--margin2);
    font-size: 1.125rem;
    width: 35%;
    z-index: 1;

    > p {
      line-height: 1.5;
    }
  }

  ${BreakpointsS}
`;
