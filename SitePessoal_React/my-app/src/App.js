import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SobreMim from './components/SobreMim'

function App() {
  return (
    <body>
        <header>
           <Header/>
        </header>
        <main>
            <Hero />
            <SobreMim/>
        </main>     
    </body>
  )
    
}

export default App;
