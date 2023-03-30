import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

`;

export const WorkerMe = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 30px;
  gap: 300px;

  .worker {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;

    h1{
      margin-bottom: 50px;
      font-size: 2.5rem;
    }

    p {
      padding: 40px 0px;
      width: 70%;
      font-size: 1rem;
      line-height: 25px;
      font-weight: 300;
    }
  }

  .contact {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
     
    h1{
      font-size: 2rem;
      margin-bottom: 20px;
    }
    a{
      margin-bottom: 20px;
      text-decoration: underline;
      font-size: 24px;
      font-weight: 200;
    }

    span {
      font-size: 1.3rem;
    }
  }

  @media(max-width:868px){
    flex-wrap: wrap;
    gap: 30px;
    padding: 0;

    .worker {
      width: 100%;
      align-items: center;
      justify-content: center;

      p{
        width: 95%;
        font-size: 22px;
      }
    }

    .contact {
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }

`;

export const Slogam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100%;
  height: 650px;
  background-image: url('https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-repeat: no-repeat;
  background-position: left ;
  background-size: cover;
  
  h1 {
    color: white;
    width: 50%;
    text-align:  start;
    padding: 30px 20px;
    font-size: 4rem;
    margin-bottom: 50px;

  }
  a{
    color: white;
    width: 50%;
    text-align:  start;
    padding: 30px 20px;
    font-size: 1rem;
    margin-bottom: 50px;
    text-decoration: underline;
  }

  @media(max-width: 868px){
    width: 100%;
    align-items: center;
    background-size: cover;
    justify-content: center;
    height: fit-content;

    h1{
      font-size: 2rem;
      width: 100%;
      text-align: center;
      margin-bottom:10px;
    }

    a{
      text-align: center;
      width: 100%;
    }
  }
`;
