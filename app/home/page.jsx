import styles from "./home.module.css";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import React from "react";

export default function Home() {
    return (
        <div className={styles.background}>
            <Header />
            <h1>oie</h1>


            <div className={styles.text}>
                <div><h2>Destaques da Semana</h2></div>
                <div><p>Ver Todos</p></div>
            </div>
            <div className={styles.cards}>
                <Cards image={<div>
                    <img src="/image.png" alt="" style={{ width: "200px", height: "200px" }} />
                </div>} product="Caixa de Limão" description="Caixa de limão de qualidade" price="R$ 100,00" />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    );
}