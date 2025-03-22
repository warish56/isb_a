
import Link from 'next/link';
import BrandSvg from './assets/brand.svg'

import styles from './style.module.css';


export const Navbar = () => {
    return (
        <nav className={`${styles.container} body-wrapper`}>
            <div className={`body-wrapper-content column`}>
                <div className={` row align-center `}>
                    <div className={`${styles.brand_logo}`}>
                        <Link href={'/'}>
                        <BrandSvg />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}