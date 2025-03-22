
import LinkedInSvg from '../assets/social/linkedin.svg'
import GithubSvg from '../assets/social/github.svg'
import ConnectorSvg from '../assets/social/connector.svg'
import HeadingSvg from '../assets/feedback/Header.svg'

import styles from './style.module.css';


type props = {
    description: string;
    userName: string;
    avatarUrl: string;
    bgColor: string;
}

const Feedback = ({description, userName, avatarUrl, bgColor}:props) => {
    return (
        <div className={`${styles.content_item} ${styles.feedback_cont} column gap-20`}>
            <div style={{backgroundColor: bgColor}} className={`${styles.feedback_message}`}>
                <span className='text-body-1 color-text-primary'>{description}</span>
            </div>
            <div className='row gap-10'>
                <div className={`${styles.avatar} row center`}>
                    <img alt="user" src={avatarUrl}/>
                </div>
                <div className='column gap-10'>
                    <span className='text-body-2 color-text-primary'>{userName}</span>
                    <div className={`${styles.social_cont} row gap-10 align-center`}>
                        <LinkedInSvg />
                        <GithubSvg />
                    </div>
                </div>
            </div>
        </div>
    )
}


export const Testimonial = () => {
    return (
        <section className={`${styles.container} column`}>
            <div className={`body-wrapper`}>
                <div className={`body-wrapper-content column`}>
                    <div className={`${styles.heading} row align-center bg-accent-pink `}>
                        <span className='text-head-3 color-text-primary'>India’s Super Brain Experience</span>
                    </div>
                </div>
            </div>


            <div className={`${styles.content}`}>
                    <Feedback 
                    userName='Sai Raman - India’s Super Brain 2.0 2022'
                    avatarUrl='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    bgColor="var(--color-accent-yellow)"
                    description={`“When I first saw the India's Super Brain advertisement, I was looking at the details and how they're making the concept of learning and competing caught my attention along with the availability of resources and mentorship schedules. I immediately enrolled to get more hands-on knowledge in ML and ReactJS. After the completion of first week, I felt so confident about myself and the way they mentored us. To my surprise, I finished Cyber Security and DBMS too with good scores and a great experience of learning and implementing everything hands-on.”`}
                    />
                    
                    <div className={`${styles.connector}`}>
                        <ConnectorSvg />
                    </div>

                    <Feedback 
                    userName='Sai Raman - India’s Super Brain 2.0 2022'
                    avatarUrl='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    bgColor="var(--color-accent-green)"
                    description={`“When I first saw the India's Super Brain advertisement, I was looking at the details and how they're making the concept of learning and competing caught my attention along with the availability of resources and mentorship schedules. I immediately enrolled to get more hands-on knowledge in ML and ReactJS. After the completion of first week, I felt so confident about myself and the way they mentored us. To my surprise, I finished Cyber Security and DBMS too with good scores and a great experience of learning and implementing everything hands-on.”`}
                    />

                                        
                    <div className={`${styles.connector}`}>
                        <ConnectorSvg />
                    </div>

                    <Feedback 
                    userName='Sai Raman - India’s Super Brain 2.0 2022'
                    avatarUrl='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    bgColor="var(--color-accent-pink)"
                    description={`“When I first saw the India's Super Brain advertisement, I was looking at the details and how they're making the concept of learning and competing caught my attention along with the availability of resources and mentorship schedules. I immediately enrolled to get more hands-on knowledge in ML and ReactJS. After the completion of first week, I felt so confident about myself and the way they mentored us. To my surprise, I finished Cyber Security and DBMS too with good scores and a great experience of learning and implementing everything hands-on.”`}
                    />
                </div>
        </section>
    )
}