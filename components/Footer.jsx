import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.logoArea}>
                <img src="/logo-img.png" />
                <h2>Eclipse</h2>
            </div>
            <p>Estilo para cada fase da sua vida</p>
            <p className={styles.text}>A Eclipse é uma loja virtual que oferece produtos de alta qualidade e estilo para cada fase da sua vida. Com uma ampla variedade de produtos, incluindo roupas, acessórios, eletrônicos e outros itens.</p>
            <div className={styles.line}></div>
            <div className={styles.footerLower}>
                <div className={styles.textLower1}>
                    <p>Eclipse © 2025. Todos os direitos reservados.</p>
                </div>
                <div className={styles.textLower2}>
                    <p>Política de Privacidade</p>
                    <p>Termos de Uso</p>
                    <p>Política de Cookies</p>
                </div>
            </div>
        </div>
    )
}