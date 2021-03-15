import React from 'react';


class Etapa2 extends React.Component {
    render() {
        return (
          <div>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <p>5. Qual curso?</p>
            <input type="text" id="curso"></input>
            <p>6. Qual unidade de ensino?</p>
            <input type="text" id="unidade-ensino"></input>
          </div>
        );
    }
}
export default Etapa2;