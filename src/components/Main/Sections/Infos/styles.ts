import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    .promotion {
      width: calc(100% + 4rem);
      transform: translateX(-2rem);
    }
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
    .promotion {
      width: calc(100% + 2rem);
      transform: translateX(-1rem);
      text-align: center;

      > a div.vector {
        display: none;
      }
    }
  }
  @media (max-width: 664px) {
    .promotion {
      padding: 1rem 0;
      > a div.content {
        height: auto;
        justify-content: center;
        margin-left: 1rem;
        flex-direction: column;

        button {
          width: 100%;
        }
      }
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

  .promotion {
    width: calc(100% + var(--margin) * 2);
    transform: translateX(calc(var(--margin) * -1));
    height: fit-content;
    margin-top: 4rem;
    background-color: rgb(var(--color-dark));
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      > div.content {
        width: 100%;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: end;
        gap: 2rem;
        margin-right: 2rem;
        font-weight: bold;
        color: rgb(var(--color-light));
        font-size: 1.5rem;
        height: 84px;
        > div {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
      }
      > div.vector {
        display: flex;
        height: fit-content;
      }
    }
  }

  ${BreakpointsS}
`;
