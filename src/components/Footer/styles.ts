import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: 1054px) {
    .top {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      > div:nth-child(2) {
        margin: 4rem;
      }
    }
  }
`;

export const ContainerS = styled.footer`
  --padding: 2rem;

  text-align: center;
  background-color: white;
  color: rgb(var(--color-dark));
  font-size: 0.9rem;

  .top {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > div {
      height: 10rem;
      width: 100%;
      display: flex;
      flex-direction: column;

      > span.content {
        margin-bottom: 0.5rem;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.7rem;
      }
      > span.logo {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .middle {
    background-color: rgb(var(--color-dark));
    color: white;

    h1 {
      margin-bottom: var(--padding);
    }
  }
  .bottom {
    padding: 1rem;
  }
  section {
    padding: var(--padding);
  }
  h1 {
    font-size: 1.5em;
    margin: var(--padding-items) 0;
  }
  a {
    margin-top: var(--padding-items);
    transition: 0.3s ease-in-out;
    text-decoration: none;
    :hover {
      color: rgb(var(--color-primary));
    }
  }

  ${BreakpointsS}
`;
