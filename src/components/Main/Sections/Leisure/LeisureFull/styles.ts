import styled, { css } from 'styled-components';

const BreakpointsS = css`
  @media (max-width: 527px) {
    > ul > li {
      max-width: 100%;
      width: 100%;
    }
  }
`;

export const ContainerS = styled.section`
  background-color: rgb(var(--color-dark));

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > li {
      width: 50%;
      padding: 0.5rem 0.25rem;
      display: flex;
      align-items: center;
      font-family: var(--font-secondary);

      .icon {
        margin-right: 2rem;
      }
    }
  }

  ${BreakpointsS}
`;
