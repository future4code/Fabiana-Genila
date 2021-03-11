import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import SouEu from "./components/CardPequeno/img/sou-eu.jpg";


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={SouEu} 
          nome="Fabiana Genila Ramos Pereira" 
          descricao="Oi, eu sou a Fabiana. Sou estudante Full Stack. Estou em transição de carreira, saindo do Direito para o TI, área que sempre gostei e pretendo ficar. Quero ser desenvolvedora Full Stack!"
        />

        <CardPequeno
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIlDH16csZWOKfssEJIo6cmmt6FrET8qmsg&usqp=CAU"
          nome="Endereço"
          descricao="742 Evergreen Terrace, Springfield, USA"
        />

        <CardPequeno
          imagem="https://www.kindpng.com/picc/m/49-496199_icons-envelope-computer-mail-message-email-email-icon.png"
          nome="E-mail"
          descricao="fabiana@aaaa.com"
        />

        <CardPequeno
          imagem="https://i.pinimg.com/originals/dd/7e/2d/dd7e2d99738624cd83015530e43ecc3b.png"
          nome="Formação Acadêmica"
          descricao="FATEC - Segurança da Informação - Incompleto"
        />

        <CardPequeno
          imagem="https://www.clipartkey.com/mpngs/m/299-2999560_languages-icon-png-language-icon-transparent.png"
          nome="Idiomas"
          descricao="Inglês Avançado"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://logosvector.net/wp-content/uploads/2016/05/hp-logo-vector-download.jpg" 
          nome="HP - Hewllett Packard" 
          descricao="Atuei como Analista de Suporte II, de março de 2013 a maio de 2014" 
        />

        <CardGrande 
          imagem="https://2uzkee3eob510v4rszskfx11-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/atos-logo.png" 
          nome="Atos" 
          descricao="Atuei como Analista de Suporte Jr, de julho de 2012 a dezembro de 2012" 
        />

        <CardGrande 
          imagem="https://media.glassdoor.com/sqll/327978/e-core-squarelogo-1578940799504.png" 
          nome="e-Core" 
          descricao="Atuei como Analista de Suporte a Aplicação, de janeiro de 2012 a abril de 2012" 
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
