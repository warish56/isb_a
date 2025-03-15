
import styles from './style.module.css';

import ArrowSvg from '../assets/pricing/arrow.svg'
import PlusSvg from '../assets/pricing/plus.svg'



const Feature = ({text}:{text:string}) => {
    return (
        <div className='row align-center gap-10'>
            <PlusSvg />
            <span className='text-body-1 color-text-primary'>{text}</span>
        </div>
    )
}



export const Pricing = () => {
    return (
        <section className={`${styles.container} body-wrapper`}>
            <div className={`${styles.content} body-wrapper-content column`}>
                    <div className={`${styles.content_item} column`}>
                        <ArrowSvg />

                        <div className='column gap-30'>
                            <div className='column text-center'>
                                <span className={`text-head-3 color-text-primary`}>Ready to take the journey</span>
                                <span className={`text-head-3 color-text-primary`}>
                                    from <span className='accent-orange'>“CAN I?”</span> to <span className='accent-green'>“I CAN!”</span>?
                                </span>
                            </div>
                            <span className='text-body-1 color-text-primary'>Join this unique journey of learning, building and winning</span>
                        </div>

                        <div className='column full-width'>
                            <div className={`${styles.pricing_banner} column-center text-center gap-20 bg-accent-pink`}>
                                <span className={`text-head-6 color-text-primary`}>India’s Super Brain 2025 Season</span>
                                <span className={`text-head-2 color-text-primary`}>INR X000</span>
                                <button className='row-center text-btn-1 color-text-primary bg-accent-yellow'>Level up this season</button>
                            </div>
                            <div className={`${styles.pricing_features} column-center gap-40 bg-gray`}>
                                <div className={`${styles.features_cont} column gap-20`}>
                                    <Feature text='Free access to courses bundle'/>
                                    <Feature text='Learn & build Next Gen Products'/>
                                    <Feature text='INR 300 Geeks for Geeks voucher'/>
                                    <Feature text='Free Amazon SDE test series to the top 100 rankers'/>
                                </div>
                                <span className='text-body-1 color-text-primary'>Expand your knowledge and skills on this amazing journey.</span>
                            </div>
                        </div>


                    </div>
            </div>
        </section>
    )
}