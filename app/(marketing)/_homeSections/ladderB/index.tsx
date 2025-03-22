
import styles from './style.module.css';

import LadderSvg from '../assets/ladder/second.svg'

import CyberSvg from '../assets/topics/cyber.svg'
import IotSvg from '../assets/topics/iot.svg'
import MlSvg from '../assets/topics/ml.svg'
import SaasSvg from '../assets/topics/saas.svg'
import React from 'react';


type topicProps = {
    title: string;
     description: string;
     img: React.ReactNode;
     classNames?: string;
}

const Topic = ({title, description, img, classNames=''}:topicProps) => {
    return (
        <div className={`${classNames} ${styles.topic} column gap-10`}>
            <span className='text-head-3 color-text-primary'>{title}</span>
                {img}
            <span className='text-body-3 color-text-primary'>{description}</span>
        </div>
    )
}


export const LadderB = () => {
    return (
        <section className={`${styles.container} body-wrapper`}>
            <div className={`${styles.content} body-wrapper-content`}>
                <div className={styles.back}>
                    <LadderSvg/>
                </div>

                <div className={` ${styles.topic_cont} column gap-10`}>
                    <div className='column'>
                        <span className='accent-green text-head-5 uppercase'>Skills that</span>
                        <span className='accent-green text-head-5 uppercase'>open new doors</span>
                    </div>
                    
                    <div className={styles.topic_content}>
                        <Topic title='SaaS' description='Learn how to design scalable, cloud-based solutions that power modern businesses.' img={<SaasSvg/>} classNames={styles.topicA}/>
                        <Topic title='Cybersecurity' description='Master tools and strategies to protect systems from real-world cyber threats.' img={<CyberSvg/>} classNames={styles.topicB}/>
                        <Topic title='Deep Learning' description='Solve complex problems with cutting-edge machine learning techniques.' img={<MlSvg/>} classNames={styles.topicC}/>
                        <Topic title='IoT' description='Discover how to connect devices and create smart ecosystems.' img={<IotSvg/>} classNames={styles.topicD}/>
                    </div>
                </div>
            </div>
        </section>
    )
}