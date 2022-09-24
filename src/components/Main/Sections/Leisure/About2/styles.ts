import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: 1320px) {
    justify-content: space-around;
  }
`;

export const ContainerS = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 50%;
  padding-top: 2rem !important;
  padding-bottom: 2rem !important;

  h2 {
    font-size: 1.8em;
  }
  p {
    font-size: 1.5rem;
    margin: 2rem 0;
  }
  button {
    font-size: 1.5rem;
    width: fit-content;
  }

  ${BreakpointsS}
`;
