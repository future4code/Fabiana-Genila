import React from 'react';


class Etapa1 extends React.Component {
    render() {
        return (
          <div>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <p>1. Qual o seu nome?</p>
            <input type="text" id="nome"></input>
            <p>2. Qual a sua idade?</p>
            <input type="text" id="idade"></input>
            <p>3. Qual o seu email?</p>
            <input type="text" id="nome"></input>
            <p>4. Qual sua ecolaridade?</p>
            <select id="escolaridade">
                <option value="ensino-médio-completo">Ensino médio completo</option>
                <option value="ensino-médio-incompleto">Ensino médio incompleto</option>
                <option value="ensino-superior-completo">Ensino superior completo</option>
                <option value="ensino-superior-incompleto">Ensino superior incompleto</option>
            </select>
          </div>
        );
    }
}
export default Etapa1;