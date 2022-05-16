import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardGrande/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fplu1-1.fna.fbcdn.net/v/t39.30808-6/275205369_3111197685804344_1878201648131765208_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHRLgY_CVIZvzNP-y2Sw2uQVv76if8GUERW_vqJ_wZQRJSQn7ykxgbhMef1pvbv5d5GfMiyS2OMmzFQj3WvEtIj&_nc_ohc=Q81HkHse1TkAX8MyBvQ&_nc_oc=AQmpqb6Ns0v0RVCqV0Pam0cp4QD9zx70x1VbCTW2-Uv6-PmWbKafZzX9ln8WH9Keen21rjObjkoimdPay8FQtPHd&tn=brF0PyQApCB75MA6&_nc_ht=scontent.fplu1-1.fna&oh=00_AT_JI3Ig9N0Lr_enTNTW4ZAlKphPZFv8kAAdxicgNVKOlA&oe=6267CE6D" 
          nome="Verônica" 
          descricao="Oi, eu sou Verônica. Sou aluna da Labenu. Estudo programação e atualmente estou aprendendo React."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/37/37050.png?w=360" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/1782/1782765.png"
        email= "veronicasgc30@gmail.com"
      />
      <CardPequeno
      imagem = "https://i.pinimg.com/736x/f0/c7/b9/f0c7b9489446715cae72085a470f0ed9.jpg"
      endereco = "Rua Manoel Salles Barbosa, 271"
      />
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="JavaScript, CSS, HTML e React" 
        />
        
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="NASA" 
          descricao="Apontando defeitos." 
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
