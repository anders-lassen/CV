import Image from "next/image";
import styles from "./page.module.css";
import Skills from "./program-skills";
import NavBar from "./navbar";
import SVG from "./svg";
import Loading from "./loading";
import Contact from "./contact";

// @refresh reset
export default function Page() {
    return (
        <main className={styles.main}>
            <SVG />
            <NavBar />
            <div className={styles.description}>
                <div className={styles.center} style={{ columnGap: "4rem"}}>
                    <div id={styles.picture} className={styles.logo}></div>
                    <Contact />
                </div>
                <div>
                    {/* Title */}
                    <h1>Anders Rosenvinge Lassen</h1>
                    <h3>Full stack Maestro: Looking for new exciting projects.</h3>
                    {/* Profile text */}
                    <div className={styles.profiletext}>
                        <p>Experienced, creative Developer with a knack for product and business development. Thrives on challenges and excels in independent work. Enjoys collaborative brainstorming and diving deep into details. Skilled in developing web technologies, API development and SaaS solutions. </p><br />
                        <center><p>“I am Fueled by the thrill of development and driven to be a capital-S problemSolver.”</p></center>
                    </div>
                </div>
                {/* Skillset (Full width) */}
                <div className={styles.grid}>
                    {/* Col1 - Programming skills */}
                    <Skills />

                    {/* Col2 - Frameworks&Programs */}
                    <div className={styles.col}>
                        <h4>Frameworks & Programs</h4>
                        <ul className={`${styles.list} ${styles.list_disc}`}>
                            <li>React Framework</li>
                            <li>AngularJS (Hybrid APP)</li>
                            <li>Laravel Framework (PHP)</li>
                            <li>Ionic Framework (Hybrid APP)</li>
                            <li>Blender / Onshape (CAD)</li>
                            <li>Visual Studio / VS Code</li>
                            <li>AWS</li>
                            <li>Android Studio</li>
                            <li>Xcode</li>
                            <li>Adobe Collection</li>
                            <li>Microsoft package + Dynamics AX</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.experience2}>
                    <h4>Experience in developing systems with:</h4>
                    <ul className={styles.list}>
                        <li>Task/route management</li>
                        <li>Time registration</li>
                        <li>Order processing</li>
                        <li>Purchase management</li>
                        <li>Stock management</li>
                        <li>Dashboard creation</li>
                        <li>Calendar, Booking, Capacity</li>
                        <li>CRM, ERP</li>
                        <li>Documentation & Certification management</li>
                        <li>Analytics; Interacitve reports, timereports, salesreports and stock development</li>
                        <li>E-mail routing</li>
                        <li>GPS Tracking; order positioning, timeregistration, images and quality checks</li>
                        <li>Print & Reporting; Big Data</li>
                        <li>Role Based Access</li>
                        <li>QR-codes</li>
                        <li>Event-driven notifications; SMS/Push/E-mail</li>
                    </ul>
                </div>

                {/* Experience + Own Companies */}
                <div className={styles.experience}>
                    <h4>Experience</h4>
                    <ul className={`${styles.list} ${styles.list_disc}`}>
                        <li>Tracelink | Senior Fullstack Systems Developer | 2018 - 2024</li>
                        <li>iBeacon.dk (SOTA Development) | Head of Development & Co-founder | 2014 - 2018</li>
                        <li>Moonwalk Agency | Development manager | 2015 - 2017</li>
                        <li>Husetsenergi | Supervisor & Implementation manager | 2013 - 2015</li>
                        <li>SOTA Development IvS (Consultant agency) | Head of Tech & Co-founder | 2014 - 2018</li>
                        <li>Butiksiden.dk (Advertising platform) | Co-founder | 2012 - 2015</li>
                    </ul>
                </div>

                {/* Education */}
                <div className={styles.education}>
                    <h4>Education</h4>
                    <ul className={styles.list}>
                        <li>Syddansk Universitet | B.Sc., Major in Product Development and Innovation</li>
                    </ul>

                </div>

                {/* Language */}
                <div className={styles.language}>
                    <h4>Language</h4>
                    <ul className={styles.list}>
                        <li>Danish, Verbal & Written | Fluent</li>
                        <li>English, Verbal & Written | Fluent</li>
                        <li>German, Verbal | Conversational level</li>
                    </ul>
                </div>

                {/* Personal */}
                <div className={styles.personal}>
                    <h4>Personal</h4>
                    <ul className={styles.list}><li>Spare time | 3D design and printing, programming projects, Dungeons and puzzles and hiking trips.</li></ul>
                </div>
                <div className={styles.about}>
                    <h4>About</h4>
                    <p>Personally I am outgoing, innovative and energetic. I have a proactive approach to projects and challenges, which is proven through my committed and independent work style.</p>
                    <p>Through my work and education I learned how to create good architectural principles, structured design patterns and sound business logic. I&apos;ve put them to the test in my own projects, where I&apos;ve had the freedom to explore and experiment. Whether it&apos;s tinkering with code, 3D arts or craft projects, I&apos;m all about diving in headfirst and delivering results that go above and beyond.</p>
                    <br />
                    <center><p>“... I&apos;m fueled by the thrill of development— the more intricate the challenge, the more exhilarating it becomes!”</p></center>
                </div>
                <br />
                {/* Contact */}
                <Contact />
            </div>
        </main>
    );
}

