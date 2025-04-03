import styles from '../styles/Icon.module.css';

export default function Icon({ img }) {
    return (
        <div className={styles.icon}>
            <img src={img} />
        </div>
    );
}