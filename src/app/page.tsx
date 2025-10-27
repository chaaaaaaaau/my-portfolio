import Image from "next/image";
import containerStyles from "@/components/Layout/container.module.scss";

import MyCarousel from "@/components/Carousel/MyCarousel";

import { SV_DEMOS, EW_DEMOS, YL_DEMOS, TP_DEMOS, IDAD_DEMOS } from "@/constants/demos";
import MyIcon from "@/components/Icon/MyIcon";
import Link from "next/link";

export default function Home() {
    return (
        <div className={containerStyles.parentContainer}>
            <div className={containerStyles.container} id="home">
                <div className={containerStyles.title}>
                    <Image src="/images/arrow.webp" alt="logo" width={64} height={32} />
                    Sam CHAU
                </div>
                <div className={containerStyles.text}>
                    Welcome to my homepage! I&apos;m a System Analyst in the IT industry with five years of experience, specializing in requirements analysis,
                    solution design, and end-to-end delivery of web applications. I also take on select freelance projects, partnering with teams to ship
                    practical, business-ready solutions.
                </div>
            </div>
            <div className={containerStyles.container} id="project">
                <div className={containerStyles.title}>
                    <Image src="/images/arrow.webp" alt="logo" width={64} height={32} />
                    Project
                </div>
                <div className={containerStyles.text}>
                    A selection of projects I&apos;ve worked on:
                    </div>
                    <div className={containerStyles.text}>
                    This is a game center web app built with Next.js. It allows users to compete against each other in various Unity WebGL games.
                </div>
                <MyCarousel items={SV_DEMOS} />
                <div className={containerStyles.text}>
                    This is a social platform web app built with Next.js. It allows users to share their thoughts and log in as a virtual avatar in a 3D world.
                </div>
                <MyCarousel items={EW_DEMOS} />
                <div className={containerStyles.text}>
                    This is a Zi Wei astrology web system that generates personalized birth charts from simple inputs.
                </div>
                <MyCarousel items={YL_DEMOS} />
                <div className={containerStyles.text}>
                    These are an add-on event pages that demonstrate some mobile-based web designs.
                </div>
                <MyCarousel items={IDAD_DEMOS} />
                <div className={containerStyles.text}>
                    These are sample landing page designs I created.
                </div>
                <MyCarousel items={TP_DEMOS} />
            </div>
            <div className={containerStyles.container} id="work">
                <div className={containerStyles.title}>
                    <Image src="/images/arrow.webp" alt="logo" width={64} height={32} />
                    Working EXP
                </div>
                <div className={containerStyles.text}>
                    <ul>
                        <li>
                            Delivered multiple React.js/Next.js web apps—including landing pages, user dashboards, and e-commerce pages—established a
                            component-based design system with reusable hooks and implemented dynamic routing with internationalization (i18n) support.
                        </li>
                        <li>
                            Led frontend integration for a merchant system covering Apple Pay, PayPal, and cryptocurrency wallets, delivering unified checkout
                            flows, secure client side validation, and real time payment status notifications to users.
                        </li>
                        <li>
                            Built bi directional data communication among web frontend, backend services, and Unity WebGL: used RESTful APIs for data operations
                            and WebSocket for real time events and implemented a JS–Unity bridge to pass authenticated user/session and gameplay state for scene
                            initialization and synchronization.
                        </li>
                        <li>
                            Implemented authentication with email/phone OTP and social logins (Google/X); issued short lived JWT access tokens with refresh
                            tokens, stored in secure, HttpOnly, SameSite cookies with explicit expirations; added token rotation, CSRF protection, and OTP rate
                            limiting.
                        </li>
                        <li>
                            Ensured responsive behaviour by building a component driven UI/UX with modular Sass (SCSS) for desktop, laptop, and mobile; applied
                            reusable mixins, a consistent breakpoint strategy, and CSS Grid/Flexbox layouts.
                        </li>
                        <li>
                            Maintained and enhanced a Discord community bot leveraging webhook automations and user invoked slash commands to deliver automated
                            summary reports to admins and customer service.
                        </li>
                        <li>
                            Participated in Unity game design reviews and prototyping; conducted structured playtesting on internal developer builds and
                            TestFlight; delivered actionable UX findings, balance/tuning feedback, and defect reports (with reproduction steps, logs, and video)
                            to drive iteration.
                        </li>
                        <li>
                            Monitored production via GitOps with Argo CD, ensuring application health and sync integrity, early drift detection, and transparent
                            rollout tracking to safeguard releases.
                        </li>
                        <li>
                            Deployed Solidity smart contracts on Ethereum and BNB Chain (EVM) and Anchor based programs on Solana; managed both testnet and
                            mainnet releases, contract verification (Etherscan/BscScan/Solscan), and on chain/off chain integrations.
                        </li>
                        <li>
                            Tracked team progress and dependencies; re prioritized scope and adjusted schedules to keep delivery on track, with timely
                            stakeholder communication.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={containerStyles.container} id="contact">
                <div className={containerStyles.title}>
                    <Image src="/images/arrow.webp" alt="logo" width={64} height={32} />
                    Contact
                </div>
                <div className={containerStyles.text}>
                    I&apos;m always looking for new opportunities and collaborations. Feel free to reach out to me via:
                </div>
                <div className={containerStyles.contactItem}>
                    <MyIcon name="email" />
                    <Link href="mailto:chauchaulatias@gmail.com" target="_blank" className={containerStyles.link}>chauchaulatias@gmail.com</Link>
                </div>
                <div className={containerStyles.contactItem}>
                    <MyIcon name="github" />
                    <Link href="https://github.com/chaaaaaaaau" target="_blank" className={containerStyles.link}>github.com/chaaaaaaaau</Link>
                </div>
            </div>
            <div className={containerStyles.container}></div>
            <div className={containerStyles.container}></div>
        </div>
    );
}
