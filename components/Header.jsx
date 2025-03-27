import styles from "../styles/Header.module.css";
import Link from "../components/Link"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src="/logo-img.png"/>
                    <h2>ECLIPSE</h2>
                </div>
                <div className={styles.slogan}>
                    <h4>Estilo para cada fase da sua vida</h4>
                </div>
            </div>
            <div className={styles.middle}>
                <Link name="Início" />
                <Link name="Lojas" />
                <Link name="Categorias" />
                <Link name="Ofertas" />
                <Link name="Contato" />
            </div>
        </div>
    );
}