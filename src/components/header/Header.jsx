import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

function Header(props) {
  const { slogam = '', papo = '', img, center = '', cor } = props

  return (
    <Container cor={cor} background={img} center={center}>
      <div className="logo-nave">
        <h1>Sua Logo</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
          <Link to='/primary' className='link'>Primeiro Passos</Link>
        </nav>
      </div>

      <div className="slogan">
        <h1>{slogam}</h1>
        <a href="/papo">{papo}</a>
      </div>
    </Container>
  )
}

export { Header }