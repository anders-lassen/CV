import styles from "./page.module.css";

// @refresh reset
export default function NavBar() {
    return (
        <div id={styles.navbar}>
            <a href="/">Resume</a>
            <a href="/portfolio">Portfolio</a>
        </div>
    )
}