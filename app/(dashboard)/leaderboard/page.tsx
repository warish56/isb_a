

import styles from './style.module.css';

import CrownSvg from './assets/crown.svg'
import Crown2Svg from './assets/crown_2.svg'
import Crown3Svg from './assets/crown_3.svg'
import Crown4Svg from './assets/crown_4.svg'

import TrophySvg from './assets/trophy.svg'
import { Avatar } from '../_components/Avatar';

type props = {
    rank: number;
    userName: string;
    state: string;
    marks: {
        saas: number;
        cyber: number;
        iot: number;
        ml: number;
    };
    total: number;

}

const LeaderItem = ({rank, userName,state, marks, total}:props) => {

    const getBgColor = () => {
        switch(rank){
            case 1: return 'bg-light-orange';
            case 2: return 'bg-light-blue';
            case 3: return 'bg-light-green';
            default:  return 'bg-gray';
        }
    }

    const getCrown = () => {
        switch(rank){
            case 1: return <CrownSvg/>;
            case 2: return <Crown2Svg/>;
            case 3: return <Crown3Svg/>;
            default:  return <Crown4Svg/>;
        }
    }
    return (
        <div className={`${styles.lead_item} ${styles.table_grid} ${styles.padd} ${getBgColor()}`}>
            <div className={`${styles.row_1} ${styles.crown_cont} row-center ${styles.center}`}>
                {getCrown()}
                <div className={`${styles.crown_text} row-center `}>
                    <span className='color-text-secondary text-head-6'>{rank}</span>
                </div>
            </div>
            <div className={`${styles.row_2} ${styles.self_center}`}>
                <div className='row align-center gap-10'>
                    <div className={`${styles.user_icon}`}>
                        <Avatar name={userName} size='grow' />
                    </div>
                    <div className='column'>
                        <span className={`color-text-primary text-body-3`}>{userName}</span>
                        <span className={`color-text-primary text-body-4`}>{state}</span>
                    </div>
                </div>
            </div>

            <div className={`${styles.row_3} ${styles.center} ${styles.self_center}`}>
                <span className={`color-text-primary text-body-3`}>{marks.saas}</span>
            </div>

            <div className={`${styles.row_4} ${styles.center} ${styles.self_center}`}>
                <span className={`color-text-primary text-body-3`}>{marks.cyber}</span>
            </div>

            <div className={`${styles.row_5} ${styles.center} ${styles.self_center}`}>
                <span className={`color-text-primary text-body-3`}>{marks.iot}</span>
            </div>

            <div className={`${styles.row_6} ${styles.center}`}>
                <span className={`color-text-primary text-body-3`}>{marks.ml}</span>
            </div>

            <div className={`${styles.row_7} ${styles.center} ${styles.self_center}`}>
                <div className='row align-center gap-10'>
                    <div className={`${styles.trophy_cont}`}>
                        <TrophySvg />
                    </div>
                    <div className='column'>
                        <span className={`color-text-primary text-head-7`}>{total}</span>
                        <span className={`color-text-primary text-body-4`}>Points</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Page(){
    return (
        <main className="body-wrapper navbar-off">
            <div className="body-wrapper-content column">

                <div className={`${styles.table_grid} ${styles.padd} mb-20`}>
                    <span className={`${styles.row_1}  color-text-primary text-body-3 text-center`}>Rank</span>
                    <span className={`${styles.row_2}  color-text-primary text-body-3 text-center`}>Participant</span>
                    <span className={`${styles.row_3}  color-text-primary text-body-3 text-center`}>Saas</span>
                    <span className={`${styles.row_4}  color-text-primary text-body-3 text-center`}>Cybersecurity</span>
                    <span className={`${styles.row_5}  color-text-primary text-body-3 text-center`}>IoT</span>
                    <span className={`${styles.row_6}  color-text-primary text-body-3 `}>Deep Learning</span>
                    <span className={`${styles.row_7}  color-text-primary text-body-3 text-center`}>Total</span>
                </div>

                <div className='column gap-10'>
                    <LeaderItem 
                        rank={1}
                        userName='Sai Thanmae K'
                        state='Amalapuram'
                        marks={{
                            saas: 346.75,
                            iot: 346.75,
                            cyber: 346.75,
                            ml: 346.75
                        }}
                        total={346.75}
                    />

                        <LeaderItem 
                        rank={2}
                        userName='Sai Thanmae K'
                        state='Amalapuram'
                        marks={{
                            saas: 346.75,
                            iot: 346.75,
                            cyber: 346.75,
                            ml: 346.75
                        }}
                        total={346.75}
                    />

                        <LeaderItem 
                        rank={3}
                        userName='Sai Thanmae K'
                        state='Amalapuram'
                        marks={{
                            saas: 346.75,
                            iot: 346.75,
                            cyber: 346.75,
                            ml: 346.75
                        }}
                        total={346.75}
                    />

                    <LeaderItem 
                        rank={4}
                        userName='Sai Thanmae K'
                        state='Amalapuram'
                        marks={{
                            saas: 346.75,
                            iot: 346.75,
                            cyber: 346.75,
                            ml: 346.75
                        }}
                        total={346.75}
                    />
                </div>
              
            </div>
        </main>
    )
}