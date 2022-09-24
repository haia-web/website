import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    .title h2 {
      margin-left: 6rem;
    }
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    .title h2 {
      font-size: 2rem;
      margin-left: 5rem;
    }
    .vector {
      left: -7rem;
    }
    .carousel-item {
      .size-container {
        > .size {
          font-size: 600%;
          font-family: var(--font-serif);
        }
      }
    }
  }
`;

export const ContainerS = styled.section`
  position: relative;
  background-color: rgb(var(--color-dark));
  color: rgb(var(--color-primary));

  h3 {
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.125em;
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: normal;
  }
  .vector {
    position: absolute;
    top: 2rem;
    left: -5rem;
  }
  .carousel-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

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
  }

  .card {
    display: flex;
    align-items: center;
    width: fit-content;
    background-color: rgb(var(--color-primary));
    .card-icon {
      padding: 1rem;
      background-color: rgb(var(--color-primary));
      height: 100%;
      display: flex;
      align-items: center;
    }
    .card-body {
      padding: 1rem;
      color: rgb(var(--color-dark));
      background-color: rgb(var(--color-light));
      height: 100%;
      max-width: 22rem;
    }
  }

  ${BreakpointsS}
`;
