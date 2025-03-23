
import styles from './style.module.css';

import LadderSvg from '../assets/ladder/sixth.svg'
import YoutubeSvg from '../assets/social/youtube.svg'
import DiscordSvg from '../assets/social/discord.svg'



const BoardLink = ({url, text, icon, classNames}:{text:string, url:string, icon:React.ReactNode, classNames?:string}) => {
    return (
        <div className={`${styles.link_item} row align-center gap-10`}>
            <span className={`${styles.link_icon}`}>{icon}</span>
            <a href={url} target='_blank' className={`text-head-4 ${classNames}`}>{text}</a>
        </div>
    )
}

const Plan = ()=> {
    return (
        <div className={`${styles.plan_content} gap-10`}>
            <div className={`${styles.first_web} column space-between`}>
                <h3 className='accent-green text-head-5 uppercase'>Bridge to Opportunity</h3>
                <span className='text-body-1 color-text-primary'>Connect with industry leaders, mentors, and peers who shape the future of tech. Exchange ideas, gain insights, and turn conversations into career opportunities.</span>
                <span className='text-body-2 color-text-primary'>Your next breakthrough begins with ‘Hello.’</span>
            </div>
            <div className={`${styles.second_web} column gap-10`}>
                <div className={`${styles.link_board} column gap-10`}>
                   <BoardLink classNames={styles.text_youtube} url='' text='YouTube' icon={<YoutubeSvg />} />
                   <BoardLink classNames={styles.text_discord} url='' text='Discord' icon={<DiscordSvg />} />
                   <BoardLink classNames={styles.text_discord} url='' text='Discord' icon={<DiscordSvg />} />
                   <BoardLink classNames={styles.text_discord} url='' text='Discord' icon={<DiscordSvg />} />
                </div>
            </div>
        </div>
    )
}

export const LadderF = () => {
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