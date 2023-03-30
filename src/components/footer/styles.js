import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  padding: 0 30px;

  @media(max-width: 768px){
    flex-direction: column;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100%;

    h4 {
      font-weight: lighter;
    }

    a {
      text-decoration: underline;
      text-transform: uppercase;
      font-weight: lighter;
    }
  }
  
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: space-around;
    align-items: center;
    min-height: 100%;

    > div {

      button{
        margin-right: 20px;
        width: 50px;
        height: 50px;
        cursor: pointer;
        border-radius: 50%;
        background-color: black;
      }
    }
  }
`;
