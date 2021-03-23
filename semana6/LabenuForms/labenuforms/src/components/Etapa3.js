import React from 'react';


class Etapa3 extends React.Component {
    render() {
        return (
          <div> 
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <p>7. Por que você não terminou um curso de graduação?</p>
            <input type="text" id="nome"></input>
            <p>8. Você fez algum curso complementar?</p>
            <select id="curso-complementar">
                <option value="nenhum">Nenhum</option>
                <option value="curso técnico">Curso técnico</option>
                <option value="idiomas">Curso de inglês</option>
            </select>
          </div>
        );
    }
}
export default Etapa3;