import styles from './Projetos.module.css'

function Projetos(props) {
    return (
        <div className={styles.cards}>
            <div className={styles.imgCard}>
                <img src={"/imagens/"+props.foto} alt="imgsFelipe" />
            </div>
            <div className={styles.textCard}>
                <h1>{props.tituloCard}</h1>
                <p>{props.textoCard}</p>
                <p><a  href={props.repositorio}>{props.link}</a></p>
            </div>
        </div>
    )
}

export default Projetos
