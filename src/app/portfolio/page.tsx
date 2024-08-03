import Image from "next/image";
import styles from "../page.module.css";
import Loading from "../loading";
import NavBar from "../navbar";
import SVG from "../svg";

// @refresh reset
export default function Page() {
    var project_html = [];
    var projects = [
        {
            name: "Analysis of LEGO House",
            description: "A tiny analysis of a trip, I had, to LEGO House in Billund, Denmark.",
            image: "/img-p-5.jpg",
            link: "portfolio/projects/lego-house"
        }, {
            name: "TRACELINK",
            description: "This is a project that I did.",
            image: "/img-p-0.png",
            link: "portfolio/projects/tracelink"
        }, {
            name: "Mystic Mirror",
            description: "A hobby project that I did, just for fun.",
            image: "/img-p-1.jpg",
            link: "portfolio/projects/mystic-mirror"
        }, {
            name: "iBeacon.dk",
            description: "This is a project that I did.",
            image: "/img-p-2.jpg",
            link: "portfolio/projects/ibeacon-dk"
        }, {
            name: "Bachelor Thesis",
            description: "This project is my bachelor thesis.\r\n It's about developing a paymentsystem for electric cars.",
            image: "/img-p-4.jpg",
            link: "portfolio/projects/bachelor-thesis"
        }, {
            name: "Advent Of Code 2023",
            icon: <img src="/github-mark/github-mark-white.svg" className={styles.github} />,
            description: "This is a challenge I did.",
            image: "/img-p-3.jpg",
            link: "https://github.com/anders-lassen/AdventOfCode2023"
        }, {
            name: "This portfolio!",
            icon: <img src="/github-mark/github-mark-white.svg" className={styles.github} />,
            description: "It's so pretty, that I needed to add it!",
            image: "/img-p-4.jpg",
            link: "https://github.com/anders-lassen/CV"
        }, {
            name: "More is being added...",
            description: `I am currently working on more projects to add to this list.\n\n
            Stay tuned!`,
            image: "",
            link: ""
        }]

    let bg_colors = ["var(--tile-green)", "var(--tile-blue)", "var(--tile-red)", "var(--tile-yellow)", "var(--tile-purple)", "var(--tile-orange)", "var(--tile-pink)", "var(--tile-cyan)", "var(--tile-lime)", "var(--tile-teal)", "var(--tile-indigo)", "var(--tile-brown)", "var(--tile-grey)", "var(--tile-blue-grey)", "var(--tile-deep-orange)", "var(--tile-deep-purple)", "var(--tile-green)", "var(--tile-light-blue)", "var(--tile-light-green)", "var(--tile-lime)", "var(--tile-orange)", "var(--tile-pink)", "var(--tile-purple)", "var(--tile-red)", "var(--tile-teal)", "var(--tile-yellow)"]

    // for each project in projects, create a div with the project image, name, description and link. All with different background colors
    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];
        let bg_color = bg_colors[i % bg_colors.length];

        project_html.push(
            <div className={styles.tile_bg} style={{ backgroundColor: bg_color, background: `url(${project.image})` }}>
                {project.icon}
                <a href={project.link}>
                    <div className={styles.tile} >
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        {(project.link ? <a href={project.link}>View project</a> : "")}
                    </div>
                </a>
            </div >
        )
    }

    return (
        <main className={styles.main} id={styles.portfolio}>
            <SVG />
            <NavBar />
            <div id="info_text">
                <p>&nbsp;</p>
                <p>Here are some of my favorite projects, all in one place!</p>
                <p>Feel free to explore them and reach out if you have any questions.</p>
                <p>&nbsp;</p>
            </div>
            <div id={styles.grid}>
                {project_html}
            </div>
            <div className={styles.smallTopBanner} id={styles.smallTopBanner}><center>This page is under development...</center></div>
        </main>
    )
}