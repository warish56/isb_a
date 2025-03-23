
import React from 'react'
import styles from './style.module.css'

import FirstSvg from '../../assets/trophy/first.svg'

import SecondSvg from '../../assets/trophy/second.svg'
import ThirdSvg from '../../assets/trophy/third.svg'


type props = {
    icon: React.ReactNode,
    title: string;
    desc1: string;
    desc2: string;
    classNames?: string;
}
const StakeItem = ({icon, title, desc1, desc2, classNames=''}:props) => {
    return (
        <div className={`${classNames} ${styles.item_cont} column gap-20 `}>
            <div className={`${styles.icon}`}>{icon}</div>
            <div className='column text-center'>
                <h6 className='text-head-6 accent-dark-blue'>{title}</h6>
                <div className='column'>
                    <span className='text-body-3 color-text-primary'>{desc1}</span>
                    <span className='text-body-3 color-text-primary'>{desc2}</span>
                </div>
                
            </div>

        </div>
    )
}

export const Stake = () => {
    
    return(
        <section className={`${styles.container} body-wrapper `}>
            <div className='body-wrapper-content column  text-center'>
                <div className='column gap-10 mb-20'>
                    <h1 className='text-head-2 color-text-primary'>What’s at Stake?</h1>
                </div>
                <div className='column gap-20'>
                    <StakeItem classNames={`${styles.mw}`} title={`Champion's Trophy`} desc1='Rank 1 wins ₹1,00,000' desc2='Cash Prize Each' icon={<FirstSvg/>} />
                    <div className={`${styles.trophy_cont} row align-center gap-20 space-around`}>
                        <StakeItem title='Runner-Up' desc1='Rank 2-5 win ₹25,000' desc2='Cash Prize Each' icon={<SecondSvg/>} />
                        <StakeItem classNames={`${styles.wd}`} title={`Champion's Trophy`} desc1='Rank 1 wins ₹1,00,000' desc2='Cash Prize Each' icon={<FirstSvg/>} />
                        <StakeItem title='Top Achievers' desc1='Rank 6-50 win ₹10,000' desc2='Cash Prize Each' icon={<ThirdSvg/>} />
                    </div>
                </div>
            </div>
        </section>
    )
}