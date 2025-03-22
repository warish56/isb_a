
import { Detail } from './_components/Detail'
import { Form } from './_components/Form'
import styles from './style.module.css'


import StarSvg from './assets/star.svg'
import BulbSvg from './assets/bulb.svg'
import BookSvg from './assets/book.svg'
import CalendarSvg from './assets/calendar.svg'


export default function Page(){
    
    return (
        <main className={`${styles.container} row`}>

            <div className={`${styles.left} column-center grow-1`}>

                <div className='column gap-10'>
                    <div className='column mb-10'>
                        <span className='text-head-4 color-text-primary'>Be Part of</span>
                        <span className='text-head-4 accent-dark-blue'>India’s Super Brain 2025</span>
                    </div>

                    <Detail 
                     icon={<StarSvg/>}
                     title='₹5 Lakhs in Prizes + Career Opportunities'
                     desc='Compete, learn, and unlock your potential '
                    />

                    <div className='column gap-10'>
                        <span className='text-body-3 color-text-tertiary mb-10'>Your Registration Includes:</span>

                        <Detail 
                        icon={<BulbSvg/>}
                        variant="outlined"
                        title='Access to Expert Mentorship'
                        desc='Learn from Fortune 500 professionals and PhDs.'
                        />

                        <Detail 
                        icon={<BookSvg/>}
                        variant="outlined"
                        title='Hands-On Learning in Top Technologies'
                        desc='Master SaaS, AI, Cybersecurity, IoT & more.'
                        />

                        <Detail 
                        icon={<CalendarSvg/>}
                        variant="outlined"
                        title='Invitation to Hiring Auctions'
                        desc='Top 250 participants get exclusive access to hiring events.'
                        />
                    </div>
                </div>



            </div>


            <div className='column-center grow-1'>
                <div className='column gap-10'>
                    <div className={`${styles.form_head} ${styles.form_head_mobile} column mb-10`}>
                        <span className='text-head-4 color-text-primary'>Be Part of</span>
                        <span className='text-head-4 accent-dark-blue'>India’s Super Brain 2025</span>
                    </div>

                    <div className={`${styles.form_head} column gap-10 mb-10`}>
                        <span className='text-head-4 text-color-primary'>Register Now!</span>
                        <span className='text-body-3 text-color-primary'>Fill in the details below to kickstart your journey toward success.</span>
                    </div>
                    <Form />
                </div>
            </div>




        </main>
    )
}