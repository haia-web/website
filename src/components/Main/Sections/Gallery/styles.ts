import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    .gallery {
      width: 100%;
      height: 100%;
      .mark {
        height: auto;
        padding: 1rem 0 1rem 3rem;
      }
    }
  }
`;

export const ContainerS = styled.section`
  text-align: center;
  background-color: rgb(var(--color-light));
  color: rgb(var(--color-dark));

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    letter-spacing: normal;
  }
  .info {
    font-size: 0.9rem;
    font-weight: normal;
  }
  .gallery {
    padding: 1rem 2rem;
    position: relative;
    min-height: 22rem;
    height: 30rem;
    width: 54rem;
    margin: 0 auto;
    overflow-x: hidden;

    .mark {
      position: absolute;
      width: 100%;
      height: 3rem;

      color: rgb(var(--color-primary));
      background-color: rgb(var(--color-dark));

      display: flex;
      text-align: left;
      align-items: center;

      text-transform: uppercase;

      padding: 0 3rem;
      bottom: 0;
      left: 0;
      z-index: 1;

      ::before {
        content: '';
        background-image: url('/svgs/details.svg');
        background-repeat: no-repeat;
        position: absolute;
        background-size: 6rem;
        left: calc(-100% + 5rem);
        width: 100%;
        height: 100%;
        transform: scaleX(-1);
      }
    }

    img {
      object-fit: cover;
      object-position: bottom center;
    }
  }
  > button {
    margin-top: 2rem;
  }

  ${BreakpointsS}
`;
