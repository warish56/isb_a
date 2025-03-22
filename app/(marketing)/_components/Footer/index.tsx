
import FacebookSvg from './assets/facebook.svg'
import InstaSvg from './assets/instagram.svg'
import LinkedInSvg from './assets/linkedin.svg'
import RedditSvg from './assets/reddit.svg'
import TwitterSvg from './assets/twitter.svg'

import styles from './style.module.css';



export const Footer = () => {
    return (
        <section className={`bg-gray`}>
            <div className={`body-wrapper`}>
                <div className={`${styles.container} body-wrapper-content column`}>
                        <div className={` ${styles.content} column`}>

                            <div className='column gap-20'>
                                <span className='text-head-2 color-text-primary'>Questions?</span>
                                <span className='text-body-1 color-text-primary'>Do you love what we do and want to help use revolutionize ----</span>
                                <span className='text-head-3 color-text-primary'>Get in touch</span>
                            </div>


                            <div className={`${styles.icons} row `}>
                                <FacebookSvg />
                                <InstaSvg />
                                <LinkedInSvg />
                                <RedditSvg />
                                <TwitterSvg />
                            </div>
                        </div>

                        <div className='pb-20 row align-center space-between wrap gap-10'>
                                <div className='row gap-10 align-center'>
                                    <span className='text-body-4 color-text-tertiary'>Terms & Conditions</span>
                                    <span className='text-body-4 color-text-tertiary'>Privacy Policy</span>
                                    <span className='text-body-4 color-text-tertiary'>2025 © by India’s Super Brain</span>
                                </div>
                                <span className='text-body-3 color-text-primary'>An Alien Brains Initiative</span>
                        </div>
                </div>
            </div>
        </section>
    )
}