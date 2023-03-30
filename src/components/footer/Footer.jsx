import React from 'react'
import { Container } from './styles'

import Twitter from '../../assets/twitter.svg'
import Youtube from '../../assets/youtube.svg'
import Instagram from '../../assets/instagram.svg'

function Footer() {
  return (
    <Container>
      <div className="left">
        <h4>Demostração por Jéssica</h4>
        <h1>Seu lugar é aqui </h1>
        <a href="">Feito por JRScode</a>
      </div>

      <div className="right">
        <a href="">você</a>
        <a href="">sobre</a>
        <a href="">Primeiros passos</a>
        <div>
          <button><img src={Twitter} alt="" /></button>
          <button><img src={Youtube} alt="" /></button>
          <button><img src={Instagram} alt="" /></button>
        </div>
      </div>

    </Container>
  )
}

export default Footer