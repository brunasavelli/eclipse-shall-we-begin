import React from "react";
import styles from "../styles/Cards.module.css";

export default function Cards({ image, product, description, price }) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>{image}</div>
            <div className={styles.text}>
                <h3>{product}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>
    )
}