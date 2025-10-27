import styles from "./header.module.scss";
import Link from "next/link";

import MyIcon from "@/components/Icon/MyIcon";

const MyHeader = () => {
    return (
        <>
        <div className={styles.header}>
            <Link href="#home" className={styles.link}>
                <MyIcon name="home" />
                <span className={styles.linkText}>
                    Home
                </span>
            </Link>
            <Link href="#project" className={styles.link}
            >
                <MyIcon name="project" />
                <span className={styles.linkText}>
                    Project
                </span>
            </Link>
            <Link href="#work" className={styles.link}>
                <MyIcon name="work" />
                <span className={styles.linkText}>
                    Working EXP
                </span>
            </Link>
            <Link href="#contact" className={styles.link}>
                <MyIcon name="contact" />
                <span className={styles.linkText}>
                    Contact
                </span>
            </Link>
        </div>
        <img
            src="/images/banner-1.webp"
            alt="banner"
            className={styles.headerBanner}
        />
        </>

    )
}

export default MyHeader;