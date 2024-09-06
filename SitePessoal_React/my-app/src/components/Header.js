import styles from './Header.module.css'

function Header() {
    return (
        <nav className={styles.navbar}>
            <div>
                <h1 className={styles.logo}>JF</h1>
            </div>
            <div>
                <a href="#sobre-mim">Sobre mim</a>
            </div>
            <div>
                <a href="#Na-escola">Escola</a>
            </div>
            <div>
                <a href="#curiosidades">curiosidades</a>
            </div>
            <div>
                <a href="#hobbies">Hobbies</a>
            </div>
            <div>
                <a href="#contatos">Contatos</a>
            </div>
        </nav>
    )
}
export default Header