import styled, { css } from 'styled-components';

export const Container = styled.div`
 width: 100%;
 padding: 20px 30px;
 
 ${props => props.background ? (
    css` height: 600px;`
  ) : css`height: 100px`}
  
 background-image: url(${props => props.background || ''});
  
  
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${props => props.cor || '#fff'};

  .logo-nave {
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    align-items: center;

    h1{

    }
   


    nav{
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .link {
        padding: 15px 20px;
        cursor: pointer;
        color: #000;
        font-size: 20px;
        background-color: ${props => props.cor || 'rgb(191, 177, 196)'};
        color: ${props => props.cor ? '#fff' : '#000'};
        ${props => props.center && css`
          background-color: #fff;
          color: #000;
        
        `}
        
        &:hover {
          opacity: 0.8 ;
          
        }
      }
        
      ul {
        display: flex;
        
        li {
          margin-right: 15px;

          a{
          color: ${props => props.cor || '#fff'};  
          font-size: 1.2rem;
          }
        }
      }
    }

  }

  @media(max-width:768px){

  .logo-nave{
    width: 100%;
    h1 {
      text-align: center;
      font-size: 3rem;
      width: 100%;
      
    }

    nav {
      display: none !important;

    }
  }
}

  .slogan {
        ${props => props.background ? (
    css` padding: 150px 0px;`
  ) : css`padding: 0`}
        
    width: 100%;

    ${props => props.center && css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       
      `}
    
    
      h1 {
        width: 60%;
        ${props => props.center && css`
          width: 100%;
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
        `}
        font-size: 4rem;
        line-height: 80px;
        margin-bottom: 80px;
      }


      a {
        color: white;
        font-size: 20px;
        font-weight: lighter;
        text-decoration: ${props => props.center ? "" : 'underline'} ;
      }

      @media(max-width: 768px) {
        padding: 10px 0;
        h1 {
          text-align: center;
          width: 100%;
          font-size: 2.6rem;
          margin-bottom: 120px;
          line-height: 40px;
          margin-bottom:20px;
          padding: 0px;
        }
    }
  }
`;
