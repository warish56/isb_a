
import styles from './style.module.css';

import LadderSvg from '../assets/ladder/fourth.svg'
import LadderLongSvg from '../assets/ladder/long_second.svg'

import FirstMonitorSvg from '../assets/monitor/first.svg'


const Plan = ()=> {
    return (
        <div className={`${styles.plan_content} gap-10`}>
            <div className={`${styles.second_web} column gap-10 space-between`}>
                <h3 className='accent-green text-head-5 uppercase'>Brain Battle Arena</h3>
                <span className='text-body-1 color-text-primary'>Level up your skills every week. The leaderboard waits for no one—will you rise to the top?</span>
                <span className='text-body-2 color-text-primary'>Warning: May cause sudden knowledge gains ⚡</span>
            </div>
            <div className={`${styles.first_web} column`}>
                <div className={styles.monitor_icon}>
                    <FirstMonitorSvg />
                </div>
            </div>
        </div>
    )
}


export const LadderD = () => {
    return (
        <section className={`${styles.container} body-wrapper`}>
            <div className={`${styles.content} body-wrapper-content`}>
                <div className={styles.back}>
                    <div className={styles.long_ladder}>
                        <LadderLongSvg/>
                    </div>
                    <LadderSvg/>
                </div>
                <div className={styles.plan_content_cont}>
                    <Plan/>
                </div>
            </div>
        </section>
    )
}