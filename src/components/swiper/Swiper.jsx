import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from './styles'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const slider = [
  {
    id: 1,
    name: 'Ronaldo da silva',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, quisquam ratione, facere veniam sequi quia est
            ullam nemo at autem animi iste amet assumenda quasi! Sequi
            dolores illo ducimus neque!`
  },
  {
    id: 2,
    name: 'Maria gomes',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, quisquam ratione, facere veniam sequi quia est
            ullam nemo at autem animi iste amet assumenda quasi! Sequi
            dolores illo ducimus neque!`
  },
  {
    id: 3,
    name: 'Andressa santos',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, quisquam ratione, facere veniam sequi quia est
            ullam nemo at autem animi iste amet assumenda quasi! Sequi
            dolores illo ducimus neque!`
  },
  {
    id: 4,
    name: 'Ronualdo',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, quisquam ratione, facere veniam sequi quia est
            ullam nemo at autem animi iste amet assumenda quasi! Sequi
            dolores illo ducimus neque!`
  },
  {
    id: 5,
    name: 'Antonio souza',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, quisquam ratione, facere veniam sequi quia est
            ullam nemo at autem animi iste amet assumenda quasi! Sequi
            dolores illo ducimus neque!`
  },


]

function Swipers() {
  return (
    <Container
      navigation={true} modules={[Navigation]}
      className="slider-swiper"
    >
      <SwiperSlide>
        <div>
          <h3>Kant</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, quisquam ratione, facere veniam sequi quia est
            ullam nemo at autem animi iste amet assumenda quasi! Sequi
            dolores illo ducimus neque!
          </p>
        </div>
      </SwiperSlide>
      {
        slider.map((slide) =>
          <SwiperSlide key={slide.id}>
            <div>
              <h3>{slide.name}</h3>
              <p>{slide.content.substring(0, 180) + '...'}</p>
            </div>
          </SwiperSlide>
        )
      }

    </Container>
  )
}

export default Swipers