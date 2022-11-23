import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  ul {
    width: 100%;
    gap: 3rem 10rem;
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      gap: 1rem;
      width: 10rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  p {
    margin-top: 3rem;
    text-align: left;
  }
  .title {
    padding: 1rem 2rem;
    width: fit-content;
    align-self: center;
    color: rgb(var(--color-dark));
    font-weight: bold;
    font-size: 30px;
    border: 1px solid rgb(var(--color-dark));
    text-transform: uppercase;
    text-align: center;
  }

  @media (max-width: 927px) {
    ul {
      justify-content: center;
    }
  }
`;
