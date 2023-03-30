import React from 'react'
import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Container, Slogam, WorkerMe } from './styles'

function Contact() {
  return (
    <Container>
      <Header
        cor="#000000"
      />

      <WorkerMe >
        <div className="worker">
          <h1>Trabalhe comigo</h1>
          <p>
            If you have any questions or comments,
            please contact us via email or phone.
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="contact">
          <h1>E-mail</h1>
          <a href="">email@exemplo.com</a>
          <h1>Telefone</h1>
          <span>+55 (55) 5555-5555</span>
        </div>
      </WorkerMe>

      <Slogam>
        <h1>Comece a cultivar a felicidade hoje mesmo.</h1>
        <a href="/" >Escolha um caminho</a>
      </Slogam>

      <Footer />

    </Container>
  )
}

export default Contact