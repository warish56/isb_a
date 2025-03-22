
import styles from './style.module.css'


type props = {
    bgColor: string;
    title: string;
    count: string;
    desc: string;
}
const ImpactItem = ({bgColor, title, count, desc}:props) => {
    const titleParts = title.split(' ');
    return (
        <div className={`${styles.imp_cont} column ${bgColor} text-left`}>
            <div className='column'>
                <span className='text-head-6 color-text-primary align-self-start'>{titleParts[0]}</span>
                <span className='text-head-6 color-text-primary align-self-start'>{titleParts[1]}</span>
            </div>
            <div className='column gap-20 text-right mt-auto'>
                <span className='text-head-2 color-text-primary'>{count}</span>
                <span className='text-body-1 color-text-primary'>{desc}</span>
            </div>
        </div>
    )
}

export const Impact = () => {
    return(
        <section className={`${styles.container} body-wrapper `}>
            <div className='body-wrapper-content gap-40 column-center text-center'>
                <div className='column gap-20'>
                    <h1 className='text-head-3 color-text-primary'>Our Impact at a Glance</h1>
                    <span className='text-body-1 color-text-primary'>Shaping the future, one participant at a time.</span>
                </div>

                <div className='row wrap gap-10'>
                    <ImpactItem title='Participants Trained' count='10,000+' desc='Students mentored across multiple technologies' bgColor='bg-light-orange' />
                    <ImpactItem title='Hackathon Projects' count='500+' desc='Innovative projects built' bgColor='bg-light-green' />
                    <ImpactItem title='Placement Success' count='80%' desc='Participants got internships or jobs post-program' bgColor='bg-light-dark-blue' />
                </div>
            </div>
        </section>
    )
}