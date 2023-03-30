import React from 'react'
import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Calendary, Container, Path } from './styles'

function Primary() {
  return (
    <Container>
      <Header
        slogam="Comece o seu caminho"
        papo="Opções de assinatura em baixo"
        img="https://images.pexels.com/photos/7393115/pexels-photo-7393115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        center
      />
      <Path >
        <div className="headline">
          <span>Pronto para comerçar?</span>
          <h1>Escolha o melhor caminho para você</h1>
        </div>
        <div className="trail">
          <div>
            <img src="https://images.pexels.com/photos/2788815/pexels-photo-2788815.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="rel">
              <h3>Relacionamento com você</h3>
              <span>R$ 69,95 por mês</span>
            </div>
          </div>

          <div>
            <img src="https://images.pexels.com/photos/5302959/pexels-photo-5302959.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="rel">
              <h3>Relacionamento com outra pessoa</h3>
              <span>R$ 69,95 por mês</span>
            </div>
          </div>

          <div>
            <img src="https://images.pexels.com/photos/1882309/pexels-photo-1882309.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="rel">
              <h3>Relacionamento com você + outra pessoa</h3>
              <span>R$ 129,95 por mês</span>
            </div>
          </div>

        </div>
      </Path>

      <Calendary>
        Calendario
      </Calendary>

      <Footer />
    </Container>
  )
}

export { Primary }
