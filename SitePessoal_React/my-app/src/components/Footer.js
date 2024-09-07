import styles from './Footer.module.css'; // Importa o CSS

function Footer() {
    return (
        <div className={styles.tudo}>
            <picture>
                <img className={styles.imgContatos} src="/imagens/JOaoFelipe.png" alt="João Felipe" />
            </picture>
            <div className={styles.listaContatos}>
                <p>Email: Felipe.joao1@escolar.ifrn.edu.br</p>
                <p>Contato: (+55) 84 99142-3660</p>
                <p>Instagram: @joaoFelipe08SL</p>
                <p>Github: felijoao08</p>
            </div>
        </div>
    );
}

export default Footer;
