
import styles from './style.module.css';

import { Accordian } from './_components/Accordian';


export const Faq = () => {
    return (
        <section className={`${styles.container} body-wrapper`}>
            <div className={`body-wrapper-content column`}>
                    <div className='column gap-20'>
                        <div className='row gap-20 align-center space-between'>
                            <span className='text-head-3 color-text-primary'>FAQs</span>
                            <div className={`${styles.divider}`} />
                            <span className={`${styles.heading_text} text-body-3 color-text-primary`}>
                                Find answers to common questions about our registration, schedule, admissions, and more.
                            </span>
                        </div>

                        <div className='column gap-10'>
                            <Accordian title='What kind of support can I expect as a participant?'>
                                <span className='text-body-3 color-text-primary'>
                                    Step into the spotlight and let companies compete for your skills. Showcase your projects, pitch your potential, and prove your expertise under pressure. Watch the bids roll in – real-time offers reflect your true value.
                                    No resumes – just results.
                                </span>
                            </Accordian>

                            <Accordian title='What kind of support can I expect as a participant?'>
                                <span className='text-body-3 color-text-primary'>
                                    Step into the spotlight and let companies compete for your skills. Showcase your projects, pitch your potential, and prove your expertise under pressure. Watch the bids roll in – real-time offers reflect your true value.
                                    No resumes – just results.
                                </span>
                            </Accordian>

                            <Accordian title='What kind of support can I expect as a participant?'>
                                <span className='text-body-3 color-text-primary'>
                                    Step into the spotlight and let companies compete for your skills. Showcase your projects, pitch your potential, and prove your expertise under pressure. Watch the bids roll in – real-time offers reflect your true value.
                                    No resumes – just results.
                                </span>
                            </Accordian>

                            <Accordian title='What kind of support can I expect as a participant?'>
                                <span className='text-body-3 color-text-primary'>
                                    Step into the spotlight and let companies compete for your skills. Showcase your projects, pitch your potential, and prove your expertise under pressure. Watch the bids roll in – real-time offers reflect your true value.
                                    No resumes – just results.
                                </span>
                            </Accordian>
                        </div>
                    </div>
            </div>
        </section>
    )
}