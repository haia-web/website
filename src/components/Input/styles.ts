import styled, { css } from 'styled-components';

interface ContainerSProps {
  type: string;
}

export const ContainerS = styled.div<ContainerSProps>`
  --padding-tb: 0.4rem;
  --padding-lr: 1rem;

  position: relative;
  margin-bottom: 1.25rem;

  > input {
    appearance: none;
    color: rgb(var(--color-light));
    font-family: var(--font-primary);
    background-color: rgb(var(--color-primary));

    width: 100%;
    border: 1px solid rgb(var(--color-light));
    padding: var(--padding-tb) var(--padding-lr);
    font-size: 1rem;
    border-radius: 0;

    ::placeholder {
      color: transparent;
      user-select: none;
    }
    :focus {
      outline: none;
      box-shadow: 0 0 0 0.1rem rgba(var(--color-light), 0.25);
    }
  }
  .placeholder {
    --border-size: 5px;
    cursor: default;
    position: absolute;
    top: var(--padding-tb);
    left: var(--padding-lr);
    background-color: transparent;
    color: rgb(var(--color-light));

    height: 0.8rem;
    font-size: 1rem;
    padding: 0 8px;

    transition: 0.1s linear;
  }

  > input:focus ~ .placeholder,
  > input.focus ~ .placeholder {
    top: calc((var(--padding-tb) * -1) - 0.2rem);
    background-color: rgb(var(--color-primary));
    font-size: 0.8rem;
  }

  ${({ type }) =>
    type === 'checkbox' &&
    css`
      > input {
        background-size: contain;
        background-position: 50%;
        height: 1rem;
        margin-top: 0.25em;
        padding: 0;
        width: 1rem;

        :checked {
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E");
        }
      }
      > .placeholder {
        display: none;
      }
    `}
`;
