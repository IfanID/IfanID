import styles from "../styles/page.module.css";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Kleia</title>
            </Head>
            <div className={styles.content}>
            <div className={styles.firstPage}>
                <h1 className={styles.title}>Welcome to Next.js!</h1>
                <p className={styles.description}>This is the homepage.</p>
            </div>
            </div>
        </>
    );
}
