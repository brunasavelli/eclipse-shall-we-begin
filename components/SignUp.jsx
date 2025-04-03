import styles from "../styles/SignUp.module.css";

export default function SignUp() {
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>Fique por dentro das novidades!</h2>
            <p className={styles.text}>Inscreva-se para receber atualizações, promoções e alertas. Venha fazer parte desta fase conosco!</p>
            <div className={styles.form}>
                <input type="email" placeholder="Digite seu e-mail" className={styles.input} />
                <button type="submit" className={styles.button}>Inscrever-se</button>
            </div>
        </div>
    );
}