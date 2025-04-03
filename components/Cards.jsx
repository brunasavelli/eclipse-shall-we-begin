import React from "react";
import styles from "../styles/Cards.module.css";

export default function Cards({ image, product, description, price, price2, newIcon }) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>{image}</div>
            <div className={styles.text}>

                <div className={styles.textArea}>
                    <h2>{product}</h2>
                    <p>{description}</p>
                    <h3 className={styles.price}>{price}</h3>
                    <h3 className={styles.price2}>{price2}</h3>
                </div>

                <div className={styles.icons}>
                    <div className={styles.new}>{newIcon}</div>
                    <div className={styles.iconsArea}>
                        <img src="/heart.png" className={styles.icon} />
                        <img src="/cart.png" className={styles.icon} />
                    </div>
                </div>


            </div>
        </div>
    )
}