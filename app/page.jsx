"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/root.module.css";

export default function Raiz() {
    const router = useRouter();

    useEffect(() => {
        router.push("/home");
    }, [router]);
	
return (
	<div className={styles.container}>
        <p>Redirecting …</p>
    </div>
);
}
