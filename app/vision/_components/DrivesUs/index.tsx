

import MountainSvg from '../../assets/mountain.svg'

import styles from './style.module.css'

export const DrivesUs = () => {
    
    return(
        <main className={`${styles.container} body-wrapper row-center `}>
            <section className={`${styles.content} body-wrapper-content bg-gray`}>
                <div className='row space-between align-center wrap gap-20'>
                    <div className={` ${styles.text} column gap-10`}>
                        <span className='text-head-3 color-text-primary'>What Drives Us</span>
                        <span className='text-body-1 color-text-primary'>We believe in creating a platform where students are mentored to unlock their full potential. Through structured learning, multi-technology exposure, and real-world challenges, we aim to redefine how talent is nurtured and recognized.</span>
                    </div>
                    <div className={`${styles.icon} row-center`}>
                        <MountainSvg/>
                    </div>
                </div>
            </section>
        </main>
    )
}