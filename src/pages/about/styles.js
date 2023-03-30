import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  padding: 0px 60px;

  nav {
    
    display: flex;
    align-items: center;

    
    a{
      margin-right: 20px;
      padding: 5px 0px;

      &:nth-child(2) {
        
        border-bottom: 1px solid black;
      }
      
    }
  
    .link {
      float: right;
      margin-left: 40px;
      background-color: #000;
      color: #fff;
      font-size: 1rem;
      padding: 20px 20px;
      cursor: pointer;
    }
  }
`;

export const MyAbout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 80px;
    margin-top: 30px;
    font-size: 3rem;
  }

  .img{
    width: 60%;
    height: 600px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
   }

  p {
    margin-top: 80px;
    padding: 20px 20px;
    text-align: center;
    width: 60%;
    font-size: 1.4rem;
    line-height: 30px;
    font-weight: 300;
   }

  @media (max-width: 868px){
    width: 100%;
    
    h1{
      text-align: center;
      margin-top: 30px;
    }

    p {
      padding: 0 ;
      width: 95%;
    }

    .img {
      width: 100vw;
      
      img {
        width: 100% !important;
        object-fit: cover;
      }
    }

  }

  
`

export const Coments = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  margin-top: 80px;
  background-color: rgb(191,177,191);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    margin-top: 80px;
    margin-bottom: 100px;
  }
  h4 {
    margin-bottom: 40px;
  }
  .coments {
    display: flex;
    width: 100%;
    padding: 20px 20px;
    overflow: scroll;

    p {
      margin-right: 500px;
    }
  }

  .buttons {
    margin-top: 100px;
    display: flex;
    gap: 30px;
    
    button {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background-color: rgb(56,52,58);
      transition: all 0.5s ;
      cursor: pointer;
      &:hover {
        background-color: black;
      }
    }
    
  }

  @media(max-width:868px) { 

    h1{
      text-align: center;
    }

  }
`

export const Premiuns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin-top: 80px;
  margin-bottom: 80px;
  h4{
    font-size: 1.5rem;
    font-weight: 300;
  }
`;
export const Motivation = styled.div`
  display: inline-block;
  width: 90%;
  height: 400px;
  background-image: url('https://images.pexels.com/photos/169908/pexels-photo-169908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: center;
  background-size: cover;
 
 h1 {
  text-align: center;
  color: white;
  font-size: 3rem;
  width: 60%;
  margin: 120px auto;
 }

 @media(max-width: 868px) {
  width: 100%;

  h1{
    width: 95%;
    font-size: 2.5rem;
  }
 }
`;

export const Chats = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 80px;
  padding: 10px 20px;

  h1{
    font-size: 3rem;
  }

  p{
    width: 45%;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  button {
    background-color: black;
    color: rgb(191,177,191);
    padding: 20px 30px;
    font-size: 1.3rem;
    cursor: pointer;
  }

  @media(max-width: 868px) { 
    h1 {
      text-align: center;
    }

    p {
      width: 95%;
    }
  }
`;