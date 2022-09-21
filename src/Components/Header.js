import React from 'react';
import image from './Matheus.jpg';

class Header extends React.Component {
  render() {
    return(
      <div id="main-header">
        <div id="header-header">
          <div id="lines-header">
            <h1>Programmer Card</h1>
            <h3><span class='values'> Joao-Matheus-Franca </span></h3>
          </div>
        </div>
        <div id="data-header"> 
          <h2>Nome:<span class='values'> João Matheus Silva Franca </span></h2>
          <h3>Data de nascimento:<span class='values'> 20/11/1996 </span></h3>
          <h3>Idade:<span class='values'> 25 anos </span></h3>
          <h3>Local de nascimento:<span class='values'> Juazeiro - Bahia - Brasil </span></h3>
          <h3>Moradia atual:<span class='values'> Petrolina - Pernambuco - Brasil</span></h3>
          <h3>Pronomes:<span class='values'> Ele/ Dele </span></h3>
        </div>
        <img id="trainer-image" src={ image } alt='Imagem provisória' />
        <div id="contact-header"> 
          <h3>📩:<span class='values'> matheussfranca@live.com </span></h3>
          <h3>💻:<span class='values'> linkedin.com/in/joaomatheussilvafranca/ </span></h3>
          <h3>📞:<span class='values'> (087) 98181-2677 </span></h3>
        </div>
      </div>
    );
  }
}

export default Header;
