import styles from "../styles/Banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.text}>
                <h1>ALTERNE ENTRE ESTILOS</h1>
                <p>E SEJA SUA MELHOR VERSÃO</p>
            </div>
        </div>
    );
}