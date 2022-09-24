import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    .gallery {
      width: 100%;
      height: 100%;
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
  .gallery {
    padding: 1rem 2rem;
    position: relative;
    min-height: 22rem;
    height: 30rem;
    width: 54rem;
    margin: 0 auto;
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
