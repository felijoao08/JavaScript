import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SobreMim from './components/SobreMim';
import Curiosidades from './components/Curiosidades';
import Footer from './components/Footer';
import Projetos from './components/Projetos';

function App() {
  return (
    <body>
        <header>
           <Header/>
        </header>
        <main>
            <Hero />
            <SobreMim/>
            <h1 id="projetos_title">Projetos</h1>
            <section className='projetos'>
              <Projetos foto='enapne.png' tituloCard='eNAPNE' textoCard='Sitema desenvolvido para atender as demandas do NAPNE e o preenchimento da documentação PEI.' link='Ir ate o repositorio' repositorio='https://github.com/gilbran-ifrn/enapne'/> 
              <Projetos foto='BlushGlamour-footer.png'tituloCard='BlushGlamour' textoCard='Sistema de uma loja online de maquiagens.' link='Ir ate o repositorio' repositorio='https://github.com/Everaldo-ifrn/Projeto-BlushGlamour' /> 
              <Projetos foto='jardel.png'tituloCard='Site Professor Jardel Pereira' textoCard='Site Pessoal do Professor de quimica do IF Ceará-Mirim, Jardel Ricardo Pereira de França.' link='Ir ate o repositorio' repositorio='https://github.com/felijoao08/aweb/tree/main/2-3-bimestre/site-professor'/> 
            </section>
            <section id="section_curiosidades">
              <h1 className="title_curiosidades">curiosidades</h1>
              <div className="curiosidades">
                <Curiosidades foto='programação.jpg'tituloCard='Gosto de ser desafiado' textoCard='Acho legal ter desafios no dia a dia para que possa vencê-los.'/> 
                <Curiosidades foto='pai.JPG'tituloCard='Perdi meu pai' textoCard='Quando ainda tinha 15 anos meu pai faleceu, vítima de câncer.'/> 
                <Curiosidades foto='gato.jpg'tituloCard='Tenho um gato, Roberto' textoCard='Alguns meses atras adotei um gatinho de rua que dei o nome de Roberto.'/> 
                <Curiosidades foto='desenho.jpeg'tituloCard='Adoro desenho animado' textoCard='Mesmo com meus 20 anos, até hoje passo horas vendo desenhos animados.'/> 
                <Curiosidades foto='Goleiro.JPG'tituloCard='Sou um bom goleiro' textoCard='Apesar da minha vida toda nunca ter jogado no gol, me destaquei depois que fui goleiro.'/> 
                <Curiosidades foto='basquete.JPG'tituloCard='jogo Basquete' textoCard='De vez em quando eu jogo basquete, nunca fui de jogar muito mas ate que me viro.'/> 
              </div>
            </section>
            <section id="hobbies" class="hobbies">
                <div class="passando_tempo">
                    <article class="text_hobbies">
                        <h1>Passando o tempo</h1>
                        <p>Aqui vou falar sobre o que gosto de fazer no meu tempo livre. Alem de programar(algo que faço como hobbie) eu sou muito, muito, muito apaixonado por jogar video game, amo parar no fim de semana e passar horas jogando. Tambem gosto muito de fazer esportes meu preferido é sem duvidas o futebol.</p>
                        <div class="descriçao_FIFA">
                          <h3>Aqui vou deixar um dos muitos golaços que faço no FIFA:</h3>
                        </div>
                        <div class="Video">
                          <video class="FIFA" src="/videos/FIFA.mp4" controls ></video>
                        </div>
                    </article>
                </div>
            </section>
            <section id='contatos'>
                <Footer/>
            </section>
        </main>     
    </body>
  ) 
}

export default App;
