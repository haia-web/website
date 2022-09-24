import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: 1300px) {
    > .form-infos {
      flex-direction: column;
    }
  }
  @media (max-width: 1190px) {
    > .leisure {
      flex-direction: column;
      section {
        width: 100%;
      }
    }
  }
`;

export const MainS = styled.main`
  > section,
  > section > section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  > .form-infos {
    display: flex;
    position: relative;
    padding: 0;
  }
  > .about-2 {
    text-align: center;
  }
  > .leisure {
    display: flex;
    padding: 0;
    > section {
      width: 100%;
    }
    h1 {
      font-size: 3em;
      font-family: var(--font-serif);
      font-weight: 400;
      margin-bottom: 2rem;
      color: rgb(var(--color-primary));
    }
  }

  ${BreakpointsS}
`;
