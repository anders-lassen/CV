import styles from "./page.module.css";

// @refresh reset
export default function Skills() {
    return (
        <div className={styles.col}>
            <h4>Programming Skills:</h4>
            <ul className={`${styles.list} ${styles.list_disc}`}>
                <li>JavaScript / TypeScript</li>
                <li>Node.js</li>
                <li>RESTful API</li>
                <li>SQL / MySQL</li>
                <li>PHP</li>
                <li>Python</li>
                <li>GIT / GitHub / GitHub Actions</li>
                <li>Apache / Nginx</li>
                <li>HTML / CSS / SASS</li>
                <li>Website, Server & Database setup</li>
                <li>SaaS platform development</li>
            </ul>
        </div>
    )
}