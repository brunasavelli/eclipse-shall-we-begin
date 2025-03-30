import React from "react";
import styles from "../styles/Cards.module.css";

export default function Cards({ image, product, description, price }) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>{image}</div>
            <div className={styles.text}>
                <h2>{product}</h2>
                <p>{description}</p>
                <h3>{price}</h3>
            </div>
        </div>
    )
}