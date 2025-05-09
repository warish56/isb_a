'use client';

import Link from 'next/link';

import BrandSvg from './assets/brand.svg'

import styles from './style.module.css';
import { usePathname } from 'next/navigation';



export const Navbar = () => {
    const pathName = usePathname();

    const getActiveClass = (path:string) => {
        return pathName === path ? styles.link_active_btn : ''
    }

    return (
        <nav className={`${styles.container} body-wrapper`}>
            <div className={`body-wrapper-content column`}>
                <div className={` row align-center space-between`}>

                    <div className={`${styles.brand_logo}`}>
                        <Link href={'/'}>
                        <BrandSvg />
                        </Link>
                    </div>

                    <div className={` ${styles.link_grp} row align-center gap-10 bg-gray`}>
                        <Link href="/overview" className={`${styles.link} ${getActiveClass('/overview')} row-center  text-menu color-text-primary`}>Overview</Link>
                        <Link href="/leaderboard"className={`${styles.link} ${getActiveClass('/leaderboard')}  row-center  text-menu color-text-primary`}>Leaderboard</Link>
                        <Link href="/resources" className={`${styles.link} ${getActiveClass('/resources')}  row-center  text-menu color-text-primary`}>Resources</Link>
                    </div>

                    <Link href="/login">
                        <button className={`${styles.register_btn} text-menu-button color-text-secondary`}>
                            Register Now
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}