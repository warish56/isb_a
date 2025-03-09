
import styles from './style.module.css';

import LadderSvg from '../assets/ladder/seventh.svg'


type CompanyProps = {
    name: string;
}
const Company = ({name}:CompanyProps) => {
    return (
        <div className='row align-center gap-10'>
            <div className={`${styles.comapny_name} row-center`}>
                <span className='text-heading-4'>{name.charAt(0).toUpperCase()}</span>
            </div>
            <span className='text-heading-2'>{name}</span>
        </div>
    )
}

const Plan = ()=> {
    return (
        <div className={`${styles.plan_content} gap-10`}>
            <div className={` gap-30 column space-between`}>
                <h3 className='text-heading-2 accent-green'>The Hiring Auction</h3>
                <span className='text-body-2'>Step into the spotlight and let companies compete for your skills. Showcase your projects, pitch your potential, and prove your expertise under pressure. Watch the bids roll in – real-time offers reflect your true value..</span>
                <span className='text-body-2 bold'>No resumes – just results</span>
            </div>
            <div className={` column gap-10`}>
                <div className={`${styles.company_list} column gap-10`}>
                    <Company name='Goole'/>
                    <Company name='Tesla'/>
                    <Company name='Microsoft'/>
                    <Company name='Apple'/>
                </div>
            </div>
        </div>
    )
}

export const LadderG = () => {
    return (
        <section className={`${styles.container} body-wrapper`}>
            <div className={`${styles.content} body-wrapper-content`}>
            <div className={styles.back}>
                        {/* <div className={styles.long_ladder}>
                            <LadderLongSvg/>
                        </div> */}
                        <LadderSvg/>
                </div>
                <div className={styles.plan_content_cont}>
                    <Plan/>
                </div>
            </div>
        </section>
    )
}