
import { RegisterButton } from '../../_components/Buttons/Register';
import styles from './style.module.css';



type topicProps = {
    count?: number;
    title: string;
    title_part?: string;
    cta: string;
    clasNames?: string;
}

const Topic = ({count, title, cta, title_part, clasNames=''}:topicProps) => {
    return (
        <div className={`${styles.topic} column ${clasNames}`}>
            <div className={`${styles.topic_title}`}>
                {count && <span className='color-text-primary text-head-1'>{count}</span>}
                <span className='column'>
                    <span className='color-text-primary  text-head-3'>{title}</span>
                    {!!title_part &&<span className='color-text-primary  text-head-3'>{title_part}</span>}
                </span>
            </div>
            <div className={`${styles.topic_btn} color-text-primary  text-body-1`}>
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
                            <h1 className="no-margin text-head-1 accent-dark-blue uppercase text-center">India’s Super Brain</h1>
                            <span className="text-head-2 color-text-primary ">is back!!</span>
                        </div>

                        <div className={`${styles.child_2} gap-10 column-center`}>
                            <span className="text-body-1 color-text-primary">The challenge is now open!</span>
                            <RegisterButton />
                        </div>
                        
                    </div>


                </div>
            </div>

            <div className='body-wrapper'>
                <div className='column-center body-wrapper-content'>
                    <div className={`${styles.topics_cont} body-wrapper-content`}>
                        <Topic clasNames={styles.topic_1} count={4} title='Weeks'  title_part="Topics"  cta='Learn'/>
                        <Topic clasNames={styles.topic_2} title='Win INR 15L+ Cash Prize' cta='Compete'/>
                        <Topic clasNames={styles.topic_3} title='500+ Jobs/' title_part="Internships" cta='Showcase'/>
                    </div>
                </div>
            </div>
        </section>
    )
}