import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    > div.slogan {
      padding-top: var(--margin);
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-start;

      > div {
        align-self: center;
        margin-bottom: 2rem;
      }
    }
  }
`;

export const ContainerS = styled.section`
  background: url('/imgs/img-banner.webp') no-repeat;
  background-size: cover;
  background-position-x: center;

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  > div.slogan {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 90%;

    .slogan {
      color: white;
      font-family: var(--font-primary);
      font-weight: bold;
      letter-spacing: 0.5em;
    }
  }
  ${BreakpointsS}
`;
