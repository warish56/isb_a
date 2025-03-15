import LadderSvg from '../assets/ladder/first.svg'
import styles from './style.module.css';

export const LadderA = () => {
    return (
        <section className={`${styles.container} body-wrapper`}>
            <div className={`${styles.content} body-wrapper-content`}>
                <div className={styles.back}>
                    <LadderSvg/>
                </div>

                <div className={` ${styles.topic_cont} column gap-10`}>
                    <div className='column gap-20'>
                        <span className=' text-head-3 color-text-primary '>Where This Journey Takes You!</span>
                        <span className=' text-body-1 color-text-primary '>India's Super Brain 2025 is bigger, better, and more rewarding than ever! This year, we've reimagined the competition to take you on an unforgettable journey of learning, innovation, and success.</span>
                    </div>

                </div>

            </div>
        </section>
    )
}