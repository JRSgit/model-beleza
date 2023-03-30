import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Path = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
  
  .headline {
    margin-top: 40px;
    padding: 60px 30px;
    display: flex;
    flex-direction: column;;
    width: 100%;
    align-items: center;
    justify-content: center;

    span {
      margin-bottom: 50px;
      font-size: 1.5rem;
      font-weight: 300;
    }
    h1 {
      font-size: 2.8rem;
      margin-bottom: 150px;
    }
  }

  .trail {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    div {
      width: 30%;
      height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      h3 {
        margin-top: 40px;
        margin-bottom: 15px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media(max-width:868px){
    margin-bottom: 20px;
    
    .trail {
      flex-direction: column;
      gap: 150px;


      div {
        height: fit-content;
        width: fit-content;
       
        position: relative;
      
        
        img{
          display: block;
          image-orientation: flip;
          object-fit: scale-down;
        }

        .rel {
          position: absolute;
          width: 100%;
          min-height: 100%;
          top: 0px;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          background-color: rgba(0,0,0,0.5);

          h3 {
            font-size: 2rem;
            text-align: center;
          }
        }
      }
    }
  }
`;

export const Calendary = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
