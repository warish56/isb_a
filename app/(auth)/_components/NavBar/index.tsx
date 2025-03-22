'use client';

import Link from 'next/link';
import BrandSvg from './assets/brand.svg'

import styles from './style.module.css';
import { usePathname } from 'next/navigation';


export const Navbar = () => {
    const pathName = usePathname();

    console.log(pathName);
    const isLoginpage = pathName === '/login'
    return (
        <nav className={`${styles.container} body-wrapper`}>
            <div className={`body-wrapper-content row`}>

                <div className={`${styles.content} row full-width`}>
                    <div className={`row align-center`}>
                        <div className={`${styles.brand_logo}`}>
                            <Link href={'/'}>
                            <BrandSvg />
                            </Link>
                        </div>
                    </div>

                    {!isLoginpage &&
                        <div className='row align-center gap-10'>
                            <span className='text-menu color-text-primary'>Already Registered?</span>
                            <Link href="/login" className='no-underline'>
                                <span className='text-head-7 accent-blue'>Login</span>
                            </Link>
                        </div>
                    }
                </div>


            </div>
        </nav>
    )
}