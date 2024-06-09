import styles from "./page.module.css";

// @refresh reset
export default function Contact() {
    return (
        <div className={styles.contact}>
            <h3>Anders Rosenvinge Lassen</h3>
            <h4>+45 3031 3408</h4>
            <h4>Anders-lassen@outlook.dk</h4>
            <h4><a href="https://dk.linkedin.com/in/anders-rosenvinge-lassen" target="_blank">https://dk.linkedin.com/in/anders-rosenvinge-lassen</a></h4>
        </div>
    )
}