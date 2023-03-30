import React from 'react'
import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Container, Expirience, Logos, Messages, Newsletter, Relacion } from './styles'


function Home() {
  return (
    <Container>

      <Header
        slogam="Encontre a felicidade de aprender a priorizá-la."
        papo="Bate-papo comigo"
        img="https://images.pexels.com/photos/3764570/pexels-photo-3764570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <Relacion>
        <div className="left">
          <div className="img">
            <img src="https://images.pexels.com/photos/3298445/pexels-photo-3298445.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Foto de felicidade" />
          </div>
          <h1>Melhore o relacionamentos com outras pessoas</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit esse neque excepturi explicabo nesciunt exercitationem
            tempora magni eum. Assumenda alias totam ipsum eius sunt fugiat
            quas voluptatem asperiores debitis atque!
          </p>

          <a href="/sobre">Saiba Mais</a>
        </div>

        <div className="right">
          <div className="img">
            <img src="https://images.pexels.com/photos/1035677/pexels-photo-1035677.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Foto de felicidade" />
          </div>
          <h1>Invista na sua relação com você mesmo</h1>

          <p>
            Nós costumamos colocar os outros em primeiro lugar, mas, com isso,
            às vezes acabamos negligenciando nossa relação com nós mesmos.
            Minha ideia é mostrar uma forma mais gentil de tratar a pessoa mais
            importante da sua vida: você.
          </p>

          <a href="/sobre">Saiba Mais</a>

        </div>
      </Relacion>

      <Logos>
        <h1>LOGO</h1>
        <h1>LOGO</h1>
        <h1>LOGO</h1>
        <h1>LOGO</h1>
      </Logos>

      <Messages>
        <p>
          "A Jéssica me encinou muito sobre um assunto
          que achei que já dominava: eu mesma!"
        </p>

        <small>_kte.f</small>
      </Messages>

      <Expirience>
        <div className="content">
          <h1>Experimente uma sessão gratuita e veja se funciona para você.</h1>
          <h4>Sem compromisso, presão ou obrigação</h4>
        </div>

        <button>Bate-papo gratuito de 30 minutos</button>
      </Expirience>

      <Newsletter>
        <h1>Cadastro de newsletter</h1>
        <span>Cadastre seu endereço de e-mail para receber novidades e atualizações.</span>
        <div className="form">
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Sobre nome' />
          <input type="text" placeholder='Email' />
        </div>
        <button>Cadastre-se</button>

        <small>Respeitamos sua privacidade</small>
      </Newsletter>

      <Footer />

    </Container>
  )
}

export { Home }
