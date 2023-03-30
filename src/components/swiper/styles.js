import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react'


export const Container = styled(Swiper)`
    width: 50%;

    .swiper {
      width: 50%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px
    }

    .swiper-slide {
      text-align: center;
      font-size: 2rem;
      /* background-color: red; */
      display: flex;
      justify-content: center;
      align-items: center;

    }

    .swiper-slide div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .swiper-slide div h3 {
      margin-bottom: 20px;
      font-size: 1.5rem;
    }

    .swiper-slide div p {
      text-align: center;
      width: 70%;
      font-size: 1.2rem;
      line-height: 30px;
      font-weight: 300;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media(max-width:868px){
      width: 100%;

      .swiper{
        width: 100%;
      }
      .swiper-slide {
        width: 100%;
        font-size: 4rem;
      }
      
      .swiper-slide div, p {
        width: 100%;
        font-size: 3rem;

      }
    }
`;
