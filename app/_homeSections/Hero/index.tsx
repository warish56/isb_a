
import styles from './style.module.css';



type topicProps = {
    count?: number;
    title: string;
    cta: string;
    clasNames?: string;
}

const Topic = ({count, title, cta, clasNames=''}:topicProps) => {
    return (
        <div className={`${styles.topic} column ${clasNames}`}>
            <div className={`${styles.topic_title}`}>
                {count && <span className='text-heading-wow'>{count}</span>}
                <span className='text-heading-2'>{title}</span>
            </div>
            <div className={`${styles.topic_btn} text-body-2`}>
                {cta}
            </div>
        </div>
    )
}

export const HeroSection = () => {
    return (
        <section>
            <div className={`${styles.container} column`}>
                <div className={`body-wrapper `}>
                    <div className='column-center body-wrapper-content'>
                        <div className={` ${styles.child_1} column-center gap-10 `}>
                            <h1 className="no-margin text-heading-wow dark-blue uppercase text-center">India’s Super Brain</h1>
                            <span className="text-heading-1">is back!!</span>
                        </div>

                        <div className={`${styles.child_2} gap-10 column-center`}>
                            <span className="text-body-2">The challenge is now open!</span>
                            <button className={styles.register_btn}>Register Now</button>
                        </div>
                        
                    </div>

                    <div className={`${styles.topics_cont} body-wrapper-content`}>
                        <Topic clasNames={styles.topic_1} count={4} title='Weeks Topics' cta='Learn'/>
                        <Topic clasNames={styles.topic_2} title='Win INR 15L+ Cash Prize' cta='Compete'/>
                        <Topic clasNames={styles.topic_3} title='500+ Jobs/Internships' cta='Showcase'/>
                    </div>
                </div>
            </div>
        </section>
    )
}