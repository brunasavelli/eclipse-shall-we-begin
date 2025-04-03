import styles from "./home.module.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import Blocos from "../../components/Blocos";
import SignUp from "../../components/SignUp";
import React from "react";

export default function Home() {
    return (
        <div className={styles.background}>
            <Header />
            <Banner />
            <div className={styles.text}>
                <h2>Destaques da Semana</h2>
                <p>Ver Todos</p>
            </div>
            <div className={styles.cards}>
                <Cards image={<div>
                    <img src="/moletom.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Moletom Preto anos 80's" description="'The Shadow Box'. Vintage/Importado. Peça da Broadway de 1980" price= "R$50,00"/>
                <Cards image={<div>
                    <img src="/calca.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Calça-jort 'Maul Sport'" description="Calça-jort belga “Maul Sport” - Importada. Vira bermudão." price="R$ 110,00" />
                <Cards image={<div>
                    <img src="/tenis.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Tênis 'Nike All Court'" description="Tênis 'Nike All Court' azul" price="R$ 120,00" />
                <Cards image={<div>
                    <img src="/oculos.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Óculos de Sol space" description="Óculos space preto" price="R$ 50,00" />
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
            <div className={styles.text}>
                <h2>Lançamentos</h2>
                <p>Ver Todos</p>
            </div>
            <div className={styles.blocos}>
            <Cards image={<div>
                    <img src="/camiseta.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Camiseta Global Distortion" description="Camiseta Masculina Off White" price2="R$ 129,90" newIcon={<div>
                    <img src="/new.png" style={{width: "25px", height: "25px"}} />
                </div>}  />
                <Cards image={<div>
                    <img src="/cap2.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Boné five panel Hoshwear" description="Boné Hoshwear Verde Oliva" price2="R$ 169,90" newIcon={<div>
                    <img src="/new.png" style={{width: "25px", height: "25px"}} />
                </div>} />
                <Cards image={<div>
                    <img src="/saia.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Saia Cargo Preta" description="Saia Estilo Cargo Preta" price2="R$ 69,90" newIcon={<div>
                    <img src="/new.png" style={{width: "25px", height: "25px"}} />
                </div>} />
                <Cards image={<div>
                    <img src="/cropped.png" style={{width: "230px", height: "230px"}} />
                </div>} product="Cropped Preto Funoff" description="Cropped Preto Streetwear" price2="R$ 69,90" newIcon={<div>
                    <img src="/new.png" style={{width: "25px", height: "25px"}} />
                </div>} />
            </div>
            <SignUp />
        </div>
    );
}