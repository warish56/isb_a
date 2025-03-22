
import Link from 'next/link';

import BrandSvg from './assets/brand.svg'

import styles from './style.module.css';



export const Navbar = () => {
    return (
        <nav className={`${styles.container} body-wrapper`}>
            <div className={`body-wrapper-content column`}>
                <div className={` row align-center space-between`}>

                    <div className={`${styles.brand_logo}`}>
                        <BrandSvg />
                    </div>

                    <div className={` ${styles.link_grp} row align-center gap-10 bg-gray`}>
                        <Link href="/vision" className={`${styles.link} ${styles.link_active_btn} text-menu color-text-primary`}>Our Vision</Link>
                        <a className={`${styles.link} text-menu color-text-primary`}>Awards</a>
                        <a className={`${styles.link} text-menu color-text-primary`}>FAQs</a>
                    </div>

                    <button className={`${styles.register_btn} text-menu-button color-text-secondary`}>
                        Register Now
                    </button>
                </div>
            </div>
        </nav>
    )
}