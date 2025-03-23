
import { StudentForm } from './_components/Form'
import styles from './style.module.css'



export const KnowMore = () => {
    return(
        <section className={`${styles.container} body-wrapper bg-dark-blue`}>
            <div className={`${styles.content} body-wrapper-content gap-40 column-center text-center gap-20`}>
                <div className='column gap-30'>
                    <h1 className='text-head-3 color-text-secondary'>Wanna Know More?</h1>
                    <span className='text-body-1 color-text-secondary'>Submit your Enquiry and out team will get back to you</span>
                </div>
                <div className={`${styles.form_cont} row`}>
                    <StudentForm />
                </div>
            </div>
        </section>
    )
}