import styled from 'styled-components';

export const ContainerS = styled.footer`
  --padding: 4rem;
  --padding-items: 2rem;

  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(var(--color-dark));
  padding: calc(var(--padding) * 2) 1rem var(--padding);
  color: white;
  font-size: 0.9rem;

  h1 {
    font-size: 1.5em;
    margin: var(--padding-items) 0;
  }
  a {
    margin-top: var(--padding-items);
    transition: 0.3s ease-in-out;
    font-weight: lighter;
    letter-spacing: 0.375em;
    text-decoration: none;
    :hover {
      color: rgb(var(--color-primary));
    }
  }
`;
