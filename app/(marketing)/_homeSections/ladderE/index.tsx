
import styles from './style.module.css';

import LadderSvg from '../assets/ladder/fifth.svg'
import LadderLongSvg from '../assets/ladder/long_third.svg'


const BoardItem = ({text,bg}:{text:string; bg:string;}) => {
    return (
        <div className={`${styles.board_item} row-center uppercase`} style={{backgroundColor:bg}}>
            <span className="text-btn-3 color-text-primary">{text}</span>
        </div>
    )
}

const Plan = ()=> {
    return (
        <div className={`${styles.plan_content} gap-10`}>
            <div className={`${styles.second_web} column gap-10 space-between`}>
                <h3 className='accent-green text-head-5 uppercase'>Build to Win the Hackathon</h3>
                <span className='text-body-1 color-text-primary'>Team up, code hard, and leave your mark on the leaderboard. Solve real-world problems, push boundaries, and let your work speak for itself.</span>
                <span className='text-body-1 color-text-primary'>Collaborate. Create. Iterate.</span>
                <span className='text-body-2 color-text-primary'>Your skills vs. the clock – who will triumph?⚔️</span>
            </div>
            <div className={`${styles.first_web} column gap-10`}>
                <div className={styles.blackboard}>
                    <div className='column gap-10 text-center'>
                        <span className='accent-yellow text-body-1'>Build your Dream Team</span>
                        <span className='text-light'>Let’s test your dragging skills</span>
                    </div>
                    
                </div>
                <div className='row gap-5 space-around'>
                    <BoardItem bg='var(--color-accent-blue)' text='Developer' />
                    <BoardItem bg='var(--color-accent-pink)' text='designer' />
                    <BoardItem  bg='var(--color-accent-green)' text='Data Scientist' />
                </div>
                <div className='row gap-5 space-around'>
                    <BoardItem bg='var(--color-accent-blue)' text='Project Manager' />
                    <BoardItem bg='var(--color-accent-yellow)' text='Strategist' />
                    <BoardItem bg='var(--color-accent-orange)' text='DevOps' />
                </div>
            </div>
        </div>
    )
}



export const LadderE = () => {
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