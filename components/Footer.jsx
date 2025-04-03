import React from "react";
import FooterColumn from "./FooterColumn";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerUpper}>
                <div className={styles.left}>
                    <div className={styles.logoArea}>
                        <img src="/logo-img.png" className={styles.logo} alt="Logo" />
                        <h2>ECLIPSE</h2>
                    </div>
                    <p>Estilo para cada fase da sua vida</p>
                    <p>
                        A Eclipse é uma loja online que oferece produtos de alta qualidade e
                        estilo.
                    </p>
                </div>
                
                <FooterColumn
                title={"Links Rápidos"}
                texts={[
                    {text: "Home"},
                    {text: "Catálogo"},
                    {text: "Ofertas"},
                    {text: "Sobre nós"},
                    {text: "Contato"}
                ]}
                />

                <FooterColumn
                title={"Categorias"}
                texts={[
                    {text: "Skate"},
                    {text: "HipHop"},
                    {text: "Punk"},
                    {text: "Sport Life"},
                    {text: "Surf"},
                    {text: "Japanese"}
                ]}
                />

                <FooterColumn
                title={"Redes Sociais"}
                texts={[
                    {text: "Instagram", icon: "./instagram.png"},
                    {text: "TikTok", icon: "./tiktok.png"},
                    {text: "Twitter", icon: "./twitter.png"},
                    {text: "YouTube", icon: "./youtube.png"},
                ]}
                />
                
            </div>
            <div className={styles.line}></div>
            <div className={styles.footerLower}>
                <div className={styles.left2}>
                    <p>2025 © Eclipse. Todos os direitos reservados.</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.links}>
                        <p>Política de Privacidade</p>
                        <p>Termos de uso</p>
                        <p>Política de cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
