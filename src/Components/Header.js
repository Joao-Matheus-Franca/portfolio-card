import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <div id="main-header">
        <h1>Programmer Card</h1>
        <h2>Nome:<span class='values'> João Matheus Silva Franca </span></h2>
        <h3>Data de nascimento:<span class='values'> 20/11/1996 </span></h3>
        <h3>Local de nascimento:<span class='values'> Juazeiro - Bahia - Brasil </span></h3>
        <h3>Pronomes:<span class='values'> Ele/Dele </span></h3>
      </div>
    );
  }
}

export default Header;
