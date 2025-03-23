
import { RegisterButton } from '@/app/(marketing)/_components/Buttons/Register'
import styles from './style.module.css'
import Link from 'next/link'

export const Hero = () => {
    
    return(
        <section className={`${styles.container} body-wrapper `}>
            <div className='body-wrapper-content gap-20 column-center text-center'>
                <div className='column gap-10'>
                    <h1 className='text-head-1 accent-green'>Win Big</h1>
                    <span className='text-head-3 color-text-primary'>But Dream Bigger</span>
                    <span className='text-body-1 color-text-primary'>Celebrate your hard work with rewards that matter.</span>
                </div>
                <Link href="/signup" className='mb-20'>
                    <RegisterButton />
                </Link>
            </div>
        </section>
    )
}