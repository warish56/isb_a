
import styles from './style.module.css'

import Medal1Svg from '../../assets/medal/medal_1.svg'
import Medal2Svg from '../../assets/medal/medal_2.svg'
import HeadSvg from '../../assets/medal/head.svg'


type props = {
    title:string;
    desc: string;
    count: string;
    icon: React.ReactNode;
    classNames?: string;
}
const MedalItem = ({title, desc, count, icon, classNames=''}:props) => {
    return (
        <div className={`${classNames} ${styles.medal_cont} row gap-10 grow-1 space-between`}>
            <div className={` ${styles.text_cont} column space-between`}>
                <h4 className='text-head-4 color-text-secondary'>{title}</h4>
                <span className='text-body-3 color-text-secondary'>{desc}</span>
                <div className='column'>
                    <h3 className='text-body-3 color-text-secondary'>Each</h3>
                    <span className='text-head-3 color-text-secondary'>{count}</span>
                </div>
            </div>
            <div className={`${styles.icon}`}>{icon}</div>
        </div>
    )
}

export const Medals = () => {
    return(
        <section className={`${styles.container} column `}>
            <div className='column gap-10'>
                <div className='body-wrapper'>
                    <div className='body-wrapper-content'>
                        <div className='row'>
                            <HeadSvg/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.content} column gap-10 bg-dark`}>
                <div className='body-wrapper'>
                    <div className='body-wrapper-content'>
                        <div className='row wrap space-around align-stretch gap-20'>
                            <MedalItem  title='Topic Stars' desc='Top 50 in Each Topicwill win' count='₹3,000' icon={<Medal1Svg />} />
                            <div className={`${styles.border} mb-40`} />
                            <MedalItem title='Institutional Excellence' desc='Top 100 Respective Institute/Company Toppers will win' count='₹2,500' icon={<Medal2Svg/>} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}