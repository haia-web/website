import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    > .container {
      display: block;
      > div.title {
        > div {
          > div {
            left: -8rem;
          }
          h2 {
            margin-left: 6rem;
          }
        }
        > p {
          text-align: center;
          margin-left: 2rem;
        }
      }
      > div.buttons {
        flex-wrap: wrap;
      }
    }
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    > .container {
      > div.title > div {
        > div {
          left: -6rem;
        }
        h2 {
          margin-left: 8rem;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export const ContainerS = styled.section`
  --margin-title: 4rem;

  > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div.title {
      margin-right: 2rem;
      > div {
        display: flex;
        position: relative;
        align-items: center;
        > div {
          position: absolute;
          left: -11rem;
        }
        > h2 {
          display: flex;
          font-weight: bold;
          letter-spacing: unset;
          font-size: 2rem;
          margin-left: var(--margin-title);
          margin-bottom: 0.7rem;
        }
      }
      > p {
        margin-top: 1rem;
        margin-left: var(--margin-title);
      }
    }
    > div.buttons {
      display: flex;
      margin-top: 2rem;
      justify-content: center;
      button {
        margin: 0.5rem;
        white-space: nowrap;
        height: min-content;
      }
    }
  }
  > .tour {
    margin-top: 3rem;
    iframe {
      border: none;
    }
  }

  ${BreakpointsS}
`;
