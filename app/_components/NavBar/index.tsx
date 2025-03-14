
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
                        <a className={`${styles.link} ${styles.link_active_btn}`}>Our Vision</a>
                        <a className={`${styles.link}`}>Awards</a>
                        <a className={`${styles.link}`}>FAQs</a>
                    </div>

                    <button className={`${styles.register_btn}`}>
                        Register Now
                    </button>
                </div>
            </div>
        </nav>
    )
}