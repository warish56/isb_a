
import { Avatar } from '@/app/(dashboard)/_components/Avatar';
import styles from './style.module.css';


import ShieldSvg from '../../assets/shield.svg'
import UserSvg from '../../assets/users.svg'
import CopySvg from '../../assets/copy.svg'


const Info = () => {
    return(
        <div className={`${styles.info_cont} grow-1`}>
            <div className={`${styles.info_content} column gap-30`}>
                <div className={`${styles.avatar_cont} column`}>
                    <Avatar name='Mark Jam' size="grow" />
                </div>
                
                <div className='column gap-10 text-center'>
                    <span className='color-text-primary text-head-4'>Bella Smith</span>
                    <div className='column gap-10'>
                        <span className='color-text-primary text-body-4'>Phone No: +91 8906279546 </span>
                        <span className='color-text-primary text-body-4'>Email ID:rbapiart@gmail.com </span>
                        <span className='color-text-primary text-body-4'>Enrollment ID: ABISBFL9vVWVfcX</span>
                    </div>
                </div>
            </div>
        </div>
    )
}




const Points = () => {
    return(
        <div className={`${styles.points_cont} column justify-center bg-accent-yellow grow-1`}>
            <div className={`${styles.points_content} column gap-10 justify-center`}>
                    <div className={`${styles.point_left} column-center gap-10 grow-1`}>
                        <div className='column-center'>
                            <ShieldSvg />
                            <span className='color-text-primary text-body-4'>Points Earned</span>
                        </div>
                        <span className='color-text-primary text-body-5'>356</span>
                    </div>

                    <div className='column-center gap-10 grow-1'>
                        <div className='column-center'>
                            <UserSvg />
                            <span className='color-text-primary text-body-4'>Participants Referred</span>
                        </div>
                        <span className='color-text-primary text-body-5'>4</span>
                    </div>
            </div>
        </div>
    )
}

const Refer = () => {
    return (
        <div className={`${styles.refer_cont} column gap-10`}>

            <div className='column'>
                <span className='text-head-7 color-text-primary'>Refer & Earn</span>
                <span className='text-body-3 color-text-primary'>Share your referral with your friends & earn X</span>
            </div>

            <div className={`${styles.refer_id_box} bg-accent-yellow row gap-10 align-center space-between`}>
                <span className="text-body-2 color-text-primary">BS345P</span>
                <CopySvg />
            </div>
        </div>
    )
}


const Share = () => {
    return (
        <div className={`${styles.refer_cont} column gap-10`}>

            <div className='column'>
                <span className='text-head-7 color-text-primary'>Share Feedback & Earn</span>
                <span className='text-body-3 color-text-primary'>Share your feedback about India’s Super Brain & earn Leaderboard points.</span>
            </div>

            <div className='column gap-10'>
                <span className="text-body-3 color-text-primary">Get up to 100 points for FREE:</span>
                <ul className={``}>
                    <li className="text-body-3 color-text-primary">Video Feedback - 40 points</li>
                    <li className="text-body-3 color-text-primary">Text Feedback - 30 points</li>
                    <li className="text-body-3 color-text-primary">LinkedIn Post - 20 points</li>
                </ul>
            </div>
        </div>
    )
}




export const Profile = () => {
    return (
        <div className={`${styles.container} column`}>
            <div className={`${styles.wrapper} column align-stretch gap-10`}>
                <div className={`${styles.nav_top}`}></div>
            <h4  className={` ${styles.head} color-text-primary text-head-4 mbottom-20`}>Welcome back, Bella! </h4>
                <div className={` ${styles.content} row gap-10`}>
                    <Info/>
                    <Points />
                </div>

                <Refer />
                <Share />
            </div>
        </div>
    )
}