
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
                                <span className='text-heading-wow-2'>Questions?</span>
                                <span className='text-body-1'>Do you love what we do and want to help use revolutionize ----</span>
                                <span className='text-heading-2'>Get in touch</span>
                            </div>


                            <div className={`${styles.icons} row `}>
                                <FacebookSvg />
                                <InstaSvg />
                                <LinkedInSvg />
                                <RedditSvg />
                                <TwitterSvg />
                            </div>
                        </div>

                        <div className='pb-20 row align-center space-between wrap'>
                                <div className='row gap-10 align-center'>
                                    <span className='text-gray caption'>Terms & Conditions</span>
                                    <span className='text-gray caption'>Privacy Policy</span>
                                    <span className='text-gray caption'>2025 © by India’s Super Brain</span>
                                </div>
                                <span className='text-body-1'>An Alien Brains Initiative</span>
                        </div>
                </div>
            </div>
        </section>
    )
}