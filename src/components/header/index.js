import React from 'react';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.jpeg';

export default function Header() {

  return (
    <header>
      <div className="box-one">
        <img src={logo} />
        <input type="text" placeholder="Pesquisar" />
      </div>

      <div className="box-two">
        <img src={avatar} />
        <strong>Jonathan Barros</strong>
        <strong>Página Inicial</strong>
      </div>
    </header>
  )
}

