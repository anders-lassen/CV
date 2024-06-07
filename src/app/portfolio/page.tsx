import Image from "next/image";
import styles from "../page.module.css";
import Loading from "../loading";
import NavBar from "../navbar";

// @refresh reset
export default function Page() {
    debugger
    return (
        <main className={styles.main}>
            <NavBar />
            <div id="info_text">
                <p>Here are some of my favorite projects, all in one place!
                </p><p>Feel free to explore them and reach out if you have any questions.</p>
            </div>
            <div id={styles.grid}>
                <div className={styles.col}>A</div>
            </div>
        </main>
    )
}