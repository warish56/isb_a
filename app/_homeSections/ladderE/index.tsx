
import styles from './style.module.css';

import LadderSvg from '../assets/ladder/fifth.svg'


const BoardItem = ({text}:{text:string}) => {
    return (
        <div className={`${styles.board_item} row center uppercase`}>
            <span className="text-btn-medium">{text}</span>
        </div>
    )
}

const Plan = ()=> {
    return (
        <div className={`${styles.plan_content} gap-10`}>
            <div className={`${styles.second_web} column gap-10 space-between`}>
                <h3 className='text-heading-2 accent-green'>Build to Win the Hackathon</h3>
                <span className='text-body-2'>Team up, code hard, and leave your mark on the leaderboard. Solve real-world problems, push boundaries, and let your work speak for itself.</span>
                <span className='text-body-2'>Collaborate. Create. Iterate.</span>
                <span className='text-body-2 bold'>Your skills vs. the clock – who will triumph?⚔️</span>
            </div>
            <div className={`${styles.first_web} column gap-10`}>
                <div className={styles.blackboard}>
                    <div className='column gap-10 text-center'>
                        <span className='accent-yellow'>Build your Dream Team</span>
                        <span className='text-light'>Let’s test your dragging skills</span>
                    </div>
                    
                </div>
                <div className='row gap-5'>
                    <BoardItem text='Developer' />
                    <BoardItem text='designer' />
                    <BoardItem text='Data Scientist' />
                </div>
                <div className='row gap-5'>
                    <BoardItem text='Project Manager' />
                    <BoardItem text='Strategist' />
                    <BoardItem text='DevOps' />
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