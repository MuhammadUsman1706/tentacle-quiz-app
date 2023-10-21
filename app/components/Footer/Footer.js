import React from 'react'
import classes from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <Link href='/' className={classes["logo-heading"]}>
                {/* <div className={classes["logo-div"]}>
                    <img src='../../../icon-logo.svg' alt='icon-logo' className={classes["icon-logo"]} />
                </div> */}
                <h1 className={classes.footerHeading}>New Quiz App</h1>
            </Link>

            <div className={classes["footer-Categories"]}>
                <Link href='#' className={classes["footer-Category"]}>
                    <span className={classes["menu-text"]}>Entertainment</span>
                    <div className={classes["iconDivs"]}>
                        <img src='../../../entertain-icon.svg' alt='icon-logo' className={classes["footer-icon"]} />
                    </div>
                </Link>
                <Link href='#' className={classes["footer-Category"]}>
                    <span className={classes["menu-text"]}>Arts & Literature</span>
                    <div className={classes["iconDivs"]}>
                        <img src='../../../arts-icon.svg' alt='icon-logo' className={classes["footer-icon"]} />
                    </div>
                </Link>
                <Link href='#' className={classes["footer-Category"]}>
                    <span className={classes["menu-text"]}>Home Economics</span>
                    <div className={classes["iconDivs"]}>
                        <img src='../../../economics-icon.svg' alt='icon-logo' className={classes["footer-icon"]} />
                    </div>
                </Link>
                <Link href='#' className={classes["footer-Category"]}>
                    <span className={classes["menu-text"]}>Science</span>
                    <div className={classes["iconDivs"]}>
                        <img src='../../../science-icon.svg' alt='icon-logo' className={classes["footer-icon"]} />
                    </div>
                </Link>
                <Link href='#' className={classes["footer-Category"]}>
                    <span className={classes["menu-text"]}>History</span>
                    <div className={classes["iconDivs"]}>
                        <img src='../../../hero-small.svg' alt='icon-logo' className={classes["footer-icon"]} />
                    </div>
                </Link>
                <Link href='#' className={classes["footer-Category"]}>
                    <span className={classes["menu-text"]}>Geography</span>
                    <div className={classes["iconDivs"]}>
                        <img src='../../../geography-icon.svg' alt='icon-logo' className={classes["footer-icon"]} />
                    </div>
                </Link>
                <Link href='#' className={classes["footer-Category"]}>
                    <span className={classes["menu-text"]}>General</span>
                    <div className={classes["iconDivs"]}>
                        <img src='../../../general-icon.svg' alt='icon-logo' className={classes["footer-icon"]} />
                    </div>
                </Link>
            </div>

            <div className={classes.footerList}>
                <div className={classes.listItems}>
                    <Link href='#' className={classes["Footer-link"]}>Privacy Policy</Link>
                    <Link href='#' className={classes["Footer-link"]}>Contact</Link>
                    <Link href='#' className={classes["Footer-link"]}>About</Link>
                    <Link href='#' className={classes["Footer-link"]}>Terms Of Use</Link>
                    <Link href='#' className={classes["Footer-link"]}>Preference</Link>
                    <Link href='#' className={classes["Footer-link"]}>Do Not Sell My Personal Information</Link>
                    <Link href='#' className={classes["Footer-link"]}>Help</Link>
                </div>
            </div>
        </footer>
    )
}
