import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: 1024px) {
    padding: 0 !important;
    flex-direction: column-reverse;
    > div {
      margin: 2rem;
    }
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    > div {
      margin: 2rem 1rem;
      width: fit-content;
    }
  }
`;
export const ContainerS = styled.section`
  background-color: rgb(var(--color-dark));
  display: flex;
  img {
    object-fit: cover;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 4rem;
    width: 60%;

    > div {
      h2 {
        color: rgb(var(--color-primary));
      }
      > span {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
    }
    button {
      width: fit-content;
      margin-top: 2rem;
    }
  }
  ${BreakpointsS}
`;
