import styles from "../styles/SearchBar.module.css";

export default function SearchBar() {
    return (
        <div className={styles.searchbar}>
            <input type="text" placeholder="Buscar . . ." className={styles.input} />
            <button className={styles.button}>
                <img src="/search-icon.png" alt="search icon" className={styles.icon} />
            </button>
        </div>
    );
}