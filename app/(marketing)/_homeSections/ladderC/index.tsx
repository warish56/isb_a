
import styles from './style.module.css';

import LadderSvg from '../assets/ladder/step_3.svg'
import LadderLongSvg from '../assets/ladder/step_3_long.svg'

import NovemberSvg from '../assets/calendar/nov.svg'


type PlanItemProps = {
    title: string;
    color: string;
}
const PlanItem = ({title, color}:PlanItemProps) => {
    return (
        <div className='row gap-5 grow-1 shrink-0 align-center basis-0'>
            <div className={`${styles.circle}`} style={{backgroundColor: color}}/>
            <span className='text-body-2 color-text-primary'>{title}</span>
        </div>
    )
}


const Plan = ()=> {
    return (
        <div className={styles.plan_content}>
            <div className='column gap-20 space-between'>
                <h3 className='accent-green text-head-5 uppercase'>Game Plan</h3>
                <span className='text-body-1 color-text-primary'>40+ hours of live mentorship, hands-on projects,  and doubt-solving sessions designed to help you compete with topic experts!</span>
                <span className='text-body-1 color-text-primary'>Hover to unlock your weekly skill-boost! Each color = a new horizon to conquer.</span>
                <span className='text-body-2 color-text-primary'> Test your hover skills here(spoiler: it’s the easiest challenge you’ll face all day)👉</span>
            </div>
            <div className='column gap-10'>
                <div className={styles.calendar_icon}>
                    <NovemberSvg />
                </div>
                <div className='row gap-10 space-between'>
                    <PlanItem color='var(--color-accent-yellow)' title='SaaS' />
                    <PlanItem color='var(--color-accent-green)' title='Cybersecurity' />
                </div>
                <div className='row gap-10 '>
                    <PlanItem color='var(--color-accent-pink)' title='Deep Learning' />
                    <PlanItem color='var(--color-accent-blue)'title='IoT' />
                </div>
            </div>
        </div>
    )
}

export const LadderC = () => {
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