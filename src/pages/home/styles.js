import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
`;



export const Relacion = styled.div`
  display: flex;
  width: 100%;
  background-color: rgb(191, 177, 196);
  padding: 80px 100px;
  gap: 30px;

  @media(max-width: 868px) {
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap:  20px;
    width: 100%;
    padding: 0;
  }

  h1 {
    font-size: 35px;
    width: 85%;
    margin-bottom: 30px;
    
  }

  p{
    width: 85%;
    padding: 10px;
    line-height: 30px;
    font-weight: normal;
    color: rgb(0,0,0,0.8);
    font-size: 18px;
    margin-bottom: 20px;
  }

  a {
    padding: 10px 50px;
    background-color: black;
    color: rgb(191, 177, 196);
    width: 150px;
    font-size: 16px;
    text-align: center;;
  }

  .left {
    display: flex;
    flex-direction: column;
    
    h1 {
      margin-top: 30px;
    }

    @media(max-width: 868px){
      justify-content: center;
      align-items: center;
      width: 100% !important;

      h1 {
        text-align: center;
      }
    }

    
    .img {
      width: 100%;
      height: 600px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @media(max-width:868px){
        padding: 20px 50px;
        margin-top: 50px;
        width: 100%!important;
        
        img {
          margin-top: 50px;
          object-fit: contain !important;
          width: 100%;
        }
      }
      
      
    }
  }
  
  .right {
    display: flex;
    flex-direction: column-reverse;

    a{
      margin-bottom: 30px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    
    
    @media(max-width: 868px){
      padding: 20px 50px;
      width: 100%;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h1 {
        text-align: center;
        margin-top: 60px;
      }

      .img {
      width: 100%;
      height: 600px;
      }

      img {
          margin-top: 50px;
          object-fit: contain !important;
          width: 100%;
        }

    }



  }
`;

export const Logos = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgb(235, 234, 235);

  @media(max-width: 768px){
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    h1{
      width: 40%;
    }

  }
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center ;
  width: 100%;
  background-color: white;

  @media(max-width: 768px){
    p{
      font-size: 2rem !important;
      padding: 10px !important;
      width: 100%!important;
    }
  }

  p{
    padding: 55px 0;
    font-size: 40px;
    width: 50%;
    text-align: center;
    line-height: 50px;
  }

  small {
    font-size: 20px;
    margin-bottom: 30px;
  }
  
`;

export const Expirience = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  background-image: url('https://images.pexels.com/photos/10438569/pexels-photo-10438569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  @media(max-width: 768px){
    
    background-image: url('https://images.pexels.com/photos/14330827/pexels-photo-14330827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    h1 {
      width: 100% !important;
      text-align: justify !important;
      font-size: 2.8rem !important;
    }

  }

  .content {
    width: 60%;

    color: white;

    h1 {
      font-size: 70px;
      font-weight: 500;
      text-shadow: 12px;
      text-align: center;
      margin-bottom: 40px;
    }

    h4 {
      font-size: 18px;
      font-weight: normal;
      text-align: center;
    }
  }

  button {
      padding: 20px 15px;
      background-color: rgb(191,177,191);
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;

      &:hover{
        opacity: 0.8;
      }

    }
`;

export const Newsletter = styled.div`
  display: flex;
  width: 100%;
  height: 440px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(191,177,191);

  @media(max-width: 768px){
    height: fit-content;

    span {
      width: 90%;
    }
    .form {
      flex-direction: column !important;
    }
  }

  h1 {
    padding: 20px 15px;
    font-weight: normal;
  }

  span {
    padding: 30px 0;
  }

  .form {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;

    input {
      width: 300px;
      padding: 25px 40px;
    }
  }
  
    button {
      padding: 20px 25px;
      background-color: black;
      color: rgb(191,177,191);
      font-size: 20px;
      margin-bottom: 40px;
      cursor: pointer;
    }

    small {
      margin-bottom: 20px;
    }
  `;

