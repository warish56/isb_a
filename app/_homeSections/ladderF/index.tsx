
import styles from './style.module.css';

import LadderSvg from '../assets/ladder/sixth.svg'



export const LadderF = () => {
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