
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const name = 'João'

  function sum(a, b) {
    return a + b
  }

  const url = "http://via.placeholder.com/150"

  return (
    <div className="App">
        <h1>Olá React, me {name}</h1>
        <p>Meu primeiro React</p>
        <Frase/>
        <p>{sum(1, 2)}</p>
        <img src={url} alt='Minha imagem'></img>
        <HelloWorld />
        <SayMyName nome='Felipe' />
        <SayMyName nome={name}/>
        <Pessoa nome='João Felipe' idade='21' profissao='Dev junior' foto="http://via.placeholder.com/150"/>
          
    </div>
  );
}

export default App;
