import Image from "next/image";
import styles from "./page.module.css";

export default function SVG() {
    // Create 100 random dots with x,y ranging from -45 to 200
    let circles = [];
    for (let i = 0; i < 200; i++) {
        let x = Math.floor(Math.random() * 300) - 45;
        let y = Math.floor(Math.random() * 300) - 45;
        circles.push(<circle key={i} cx={x} cy={y} r="0.1" fill={["var(--gray)", "var(--blue)", "var(--green)"][i % 3]} />);
    }

    return (
        // 1px dots that are spread out to create a random starry night effect
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="100%" width="100%" >
            {circles}
        </svg>
    )
}