import React from "react";
import styles from "../styles/Footer.module.css";

export default function FooterColumn({ title, texts }) {
    return (
        <div className={styles.columns}>
            <h3 className={styles.title}>{title}</h3>
            {texts.map((item, index) => (
                <p key={index} className={styles.text}>
                    {item.icon && <img src={item.icon} alt="icon" className={styles.icon} />}
                    {item.text}
                </p>
            ))}
        </div>
    )
}