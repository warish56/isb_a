
import { RegisterButton } from '@/app/(marketing)/_components/Buttons/Register'
import styles from './style.module.css'

export const Hero = () => {
    
    return(
        <section className={`${styles.container} body-wrapper `}>
            <div className='body-wrapper-content gap-20 column-center text-center'>
                <div className='column gap-10'>
                    <h1 className='text-head-1 accent-orange'>Our Vision</h1>
                    <span className='text-head-3 color-text-primary'>Empowering the Journey of Innovation</span>
                    <span className='text-body-1 color-text-primary'>It’s not about the destination, it’s about the journey!</span>
                </div>
                <RegisterButton />
            </div>
        </section>
    )
}