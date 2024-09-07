
import styles from './Curiosidades.module.css';

function Curiosidades(props) {
    return (
        <div className={styles.cards}>
            <div className={styles.imgCard}>
                <img src={"/imagens/"+props.foto} alt="imgsFelipe" />
            </div>
            <div className={styles.textCard}>
                <h1>{props.tituloCard}</h1>
                <p>{props.textoCard}</p>
            </div>
        </div>
    );
}
export default Curiosidades;
