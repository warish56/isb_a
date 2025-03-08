import LadderSvg from '../assets/ladder/first.svg'
import styles from './style.module.css';

export const LadderA = () => {
    return (
        <section className={`${styles.container} body-wrapper`}>
            <div className={`${styles.content} body-wrapper-content`}>
                <div className={styles.back}>
                    <LadderSvg/>
                </div>
            </div>
        </section>
    )
}