import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    > .sizes {
      flex-direction: column;
      align-items: flex-start;

      > .lines {
        margin: 2rem 0;
      }
    }
    .size-container .size {
      font-size: 600% !important;
    }
  }
`;

export const ContainerS = styled.section`
  background-color: rgb(var(--color-light));
  color: rgb(var(--color-primary));
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.125em;
  }

  > .sizes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .size-container {
      display: flex;
      flex-direction: column;
      > .size {
        font-size: 700%;
        font-family: var(--font-serif);
      }
      > .about {
        h3 {
          margin: 0.5rem 0;
        }
      }
    }

    > .lines {
      --gap: 0.8rem;
      width: 2rem;
      height: 1px;
      position: relative;
      background-color: rgb(var(--color-primary));

      ::before,
      ::after {
        content: '';
        width: 100%;
        height: inherit;
        position: absolute;
        background-color: inherit;
      }
      ::before {
        bottom: var(--gap);
      }
      ::after {
        top: var(--gap);
      }
    }
  }

  ${BreakpointsS}
`;
