


import styles from './style.module.css'

export const Minds = () => {
    
    return(
        <main className={`${styles.container}  bg-accent-pink`}>
            <section className={`${styles.content} bg-dark row-center`}>
                <div className=' body-wrapper'>
                    <div className='body-wrapper-content '>

                    <div className='column gap-20'>
                        <div className='column'>
                            <span className='text-head-3 color-text-secondary'>The Minds</span>
                            <span className='text-head-3 color-text-secondary'>Behind the Mission</span>
                        </div>
                        <span className={`${styles.text} text-body-1 color-text-secondary`}>We love teaching and seeing our students succeed, and we’re all about sharing our knowledge and experience. Meet the visionaries who will guide you through your journey.</span>
                    </div>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}