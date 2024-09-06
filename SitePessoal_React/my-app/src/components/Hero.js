import styles from './Hero.module.css'

function Hero() {
    return (
        <section className={styles.hero_art}>
            <div className={styles.hero}>
                <article className={styles.text_hero}>
                    <h1>Joao Felipe Souza de Lima</h1>
                    <p>Aluno do IFCM </p>
                    <div className={styles.botao}>
                        <a href="#sobre-mim">Ir para a pagina</a>
                    </div>
                </article>
                <div className={styles.img_hero}>
                    <img src='imagens/felipe-galan.jpg' alt="minha Imagem"/> 
                </div>
            </div>
        </section>
    )
}

export default Hero