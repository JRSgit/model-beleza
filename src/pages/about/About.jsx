import React from 'react'
import { Container, MyAbout, Coments, Premiuns, Motivation, Chats } from './styles'

import Back from '../../assets/voltar.svg'
import Next from '../../assets/avancar.svg'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import { Header } from '../../components/header/Header'
import Swipers from '../../components/swiper/Swiper'

function About() {
  return (
    <Container>
      <Header cor='#000' />
      <MyAbout>
        <h1>Como começou o meu caminho</h1>
        <div className="img">
          <img src="https://images.pexels.com/photos/6348124/pexels-photo-6348124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="about-me" />
        </div>

        <p>
          Jessica Demo is sedut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt.
        </p>

        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam.
        </p>
      </MyAbout>

      <Coments>
        <h1>O que as pessoas estão dizendo</h1>
        <Swipers />
      </Coments>

      <Premiuns>
        <h4>Meus Prêmios</h4>
        <div>Premios aqui</div>
        <div>Premios aqui</div>
        <div>Premios aqui</div>
        <div>Premios aqui</div>
      </Premiuns>

      <Motivation>
        <h1>A motivação vem de dentro,
          e eu estou aqui para ajudar você encontrar a sua!</h1>
      </Motivation>
      <Chats>
        <h1>Bate-papo comigo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit consequatur libero vitae aliquam minima,
          iure odio ipsa voluptatibus beatae eaque, quisquam ut
          ab qui quis illum accusantium esse dolores nulla.
        </p>

        <button>Bate-papo gratuito 30 minutos</button>

      </Chats>

      <Footer />

    </Container>
  )
}

export { About }
