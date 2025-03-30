import React from "react";
import styles from "../styles/Blocos.module.css";

export default function Blocos({ icon, text }) {
    return (
        <div className={styles.bloco}>
            <div className={styles.icon}>{icon}</div>
            <h3>{text}</h3>
        </div>
    )
}