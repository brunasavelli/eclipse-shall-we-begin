import styles from "./home.module.css";
import Header from "../../components/Header";

export default function Home() {
    return (
        <div className={styles.background}>
            <Header />
        </div>
    );
}