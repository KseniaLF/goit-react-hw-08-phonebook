import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
  /* margin: 0 auto; */
  max-width: 500px;

  h1 {
    margin-bottom: 15px;
    font-size: 40px;
  }
  h2 {
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  button {
    font-size: 25px;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #8387d186;
    border: 1px solid black;
    cursor: pointer;

    :hover {
      box-shadow: 0px 0px 10px black;
    }
  }
`;