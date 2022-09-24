import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: 1190px) {
    min-height: 25rem;
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    background-position: 25vw -20vh;
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    background-position: 16vw -30vh;
  }
  @media (max-width: 500px) {
    background-position: -4rem -12rem;
    h1 {
      font-size: 3.3em !important;
    }
  }
`;

export const ContainerS = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 4rem !important;

  background-image: url('/svgs/details.svg');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-color: rgb(var(--color-light));
  height: 50%;

  h1 {
    font-size: 4.3em !important;
  }
  p {
    color: rgb(var(--color-dark));
    font-size: 2rem;
  }

  ${BreakpointsS}
`;
