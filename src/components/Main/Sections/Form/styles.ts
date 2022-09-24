import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    form > .submit > p {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;

export const ContainerS = styled.section`
  width: 60%;
  > .vector {
    position: absolute;
    left: 0;
    top: 2rem;
  }
  > form {
    padding-top: 8rem;

    > .terms {
      display: flex;
      margin-bottom: 1rem;

      span {
        margin-left: 0.5rem;
      }
      div[type=\"checkbox\"] {
        align-self: center;
        margin-bottom: 0;
      }
    }
    > .submit {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      > p {
        align-self: center;
        width: 15rem;
      }
    }
  }

  ${BreakpointsS}
`;
