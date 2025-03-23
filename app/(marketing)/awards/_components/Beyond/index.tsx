

import styles from './style.module.css'


type props ={
    title: string;
    count: string;
    desc1: string;
    desc2: string;
    classNames?: string;
}


const BeyondItem = ({title, count, desc1, desc2, classNames}:props) => {
    return (
        <div className={`${styles.item} ${classNames} column space-between`}>
            <span className='text-body-5 color-text-primary'>{title}</span>

            <div className={`${styles.item_desc} column text-right gap-20`}>
                <span className='text-head-2 color-text-primary'>TOP {count}</span>
                <div className='column'>
                    <span className='text-body-1 color-text-primary'>{desc1}</span>
                    <span className='text-body-1 color-text-primary'>{desc2}</span>
                </div>
            </div>
        </div>
    )
}

export const Beyond = () => {
    
    return(
        <section className={`${styles.container} body-wrapper `}>
            <div className='body-wrapper-content gap-20 column '>
                <div className='column-center gap-10 text-center mb-40'>
                    <h1 className='text-head-2 color-text-primary'>Beyond Cash Prizes</h1>
                    <span className='text-body-1 color-text-primary'>Well there’s More</span>
                </div>

                <div className='row-center wrap gap-20 align-stretch'>
                    <BeyondItem classNames='bg-accent-yellow' title='Hiring Auction' count='250' desc1='Participants get a chance to' desc2='showcase their talent.'/>
                    <BeyondItem classNames='bg-accent-pink' title='One-on-One Expert Meeting' count='500' desc1='Participants get to meet with PhDs/Working' desc2='Professionals from Fortune 500 Companies'/>
                </div>
               
            </div>
        </section>
    )
}