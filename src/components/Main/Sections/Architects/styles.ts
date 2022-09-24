import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    > section.architects {
      margin: 0 4rem;
    }
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    > div.vector {
      max-width: 45px;
    }
    > h2 {
      margin: 0 6rem;
    }
    > section.architects {
      margin: 0 auto;
      justify-content: center;
    }
  }
  @media (max-width: 300px) {
    > div.vector {
      display: none;
    }
  }
`;

export const ContainerS = styled.section`
  position: relative;
  color: rgb(var(--color-primary));
  background-color: rgb(var(--color-light));

  > div.vector {
    position: absolute;
    top: 0;
    left: 0;

    max-width: 80px;
  }
  > section.architects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      margin: 0.5rem;
      max-width: 13rem;
      min-height: 42rem;

      > .about {
        span {
          font-size: 0.95rem;
          line-height: 20px;
          letter-spacing: 1.75px;
        }
        p {
          color: rgb(var(--color-dark));
          margin-top: 1rem;
        }
      }
    }
    button {
      color: rgb(var(--color-light));
      display: flex;
      text-align: left;
      align-items: center;
      text-transform: none;

      span {
        margin-left: 1rem;
      }
    }
  }

  ${BreakpointsS}
`;
