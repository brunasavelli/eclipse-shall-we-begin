import styles from "./home.module.css";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Blocos from "../../components/Blocos";
import React from "react";

export default function Home() {
    return (
        <div className={styles.background}>
            <Header />
            <h1>oie</h1>



            <div className={styles.text}>
                <h2>Destaques da Semana</h2>
                <p>Ver Todos</p>
            </div>
            <div className={styles.cards}>
                <Cards image={<div>
                    <img src="/moletom.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Moletom 80's 'The Shadow Box'" description="Moletom tubular 80's 'The Shadow Box' - Vintage/Importado. Peça da Broadway de 1980" price= "R$50,00"/>
                <Cards image={<div>
                    <img src="/calca.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Calça-jort 'Maul Sport'" description="Calça-jort belga “Maul Sport” - Importada. Vira bermudão." price="R$ 110,00" />
                <Cards image={<div>
                    <img src="/tenis.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Tênis 'Nike All Court'" description="Tênis 'Nike All Court' azul" price="R$ 120,00" />
                <Cards image={<div>
                    <img src="/oculos.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Óculos space" description="Óculos space preto" price="R$ 50,00" />
            </div>
            <div className={styles.text}>
                <h2>Categorias Populares</h2>
                <p>Ver Todos</p>
            </div>
            <div className={styles.blocos}>
                <Blocos icon={<div>
                    <img src="/skate.png" style={{width: "50px", height: "50px"}} />
                </div>} text="Skate" />
                <Blocos icon={<div>
                    <img src="/hiphop.png" style={{width: "50px", height: "50px"}} />
                </div>} text="HipHop" />
                <Blocos icon={<div>
                    <img src="/punk.png" style={{width: "50px", height: "50px"}} />
                </div>} text="Punk" />
                <Blocos icon={<div>
                    <img src="/cap.png" style={{width: "50px", height: "50px"}} />
                </div>} text="Sport Life" />
                <Blocos icon={<div>
                    <img src="/surf.png" style={{width: "50px", height: "50px"}} />
                </div>} text="Surf" />
                <Blocos icon={<div>
                    <img src="/japanese.png" style={{width: "50px", height: "50px"}} />
                </div>} text="Japanese" />
            </div>
        </div>
    );
}