import styles from "../styles/Header.module.css";
import Link from "../components/Link"
import SearchBar from "../components/SearchBar";
import Icon from "../components/Icon";

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
            <div className={styles.right}>
                <SearchBar />
                <div className={styles.icons}>
                    <Icon  img="/fav-icon.png"/>
                    <Icon  img="/cart-icon.png"/>
                    <Icon  img="/user-icon.png"/>
                </div>
            </div>
        </div>
    );
}