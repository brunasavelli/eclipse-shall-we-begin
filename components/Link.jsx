import styles from "../styles/Link.module.css";

export default function Link({ name }) {
    return (
            <p className={styles.p}>{name}</p>
    );
}