import styles from './SobreMim.module.css'; 

function SobreMim() {
    return (
        <section id="sobre-mim" className={styles.sobre_mim}>
            <article className={styles.text_sobremim}>
                <h1>Sobre mim</h1>
                <p>
                    Olá, me chamo João Felipe Souza de Lima, tenho 20 anos e moro na cidade de Ceará-Mirim desde que nasci. Estudo no IFCM; na minha vida, isso foi minha primeira grande conquista que deu orgulho às minhas mães e a mim mesmo. Isso foi uma breve introdução de quem sou; ao longo do site, vamos nos conhecer melhor.
                </p>
            </article>
            <div className={styles.imgs_sm}>
                <img src="/imagens/felipe-galan.jpg" alt="Felipe sorridente" />
                <img src="/imagens/felipe-serio.jpg" alt="Felipe sério" />
                <img src="/imagens/felipe-sol.jpg" alt="Felipe ao sol" />
            </div>
        </section>
    );
}

export default SobreMim;
