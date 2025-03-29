

import styles from './style.module.css';

import IsbLogo from '../../assets/isb_logo.svg'


type itmeProps = {
    title: string;
    active?: boolean;
}
const TabItem = ({title, active=false}:itmeProps) => {
    return (
        <button data-active={active ? 'true' : 'false'} className={`${styles.tab_item}`}>{title}</button>
    )
}



type postProps = {
    title: string;
    date:string;
    time: string;
    content: string;
    imgUrl?: string;
}
const Post = ({time, date, title, content, imgUrl}:postProps) => {
    return(
        <div className='column gap-10'>
            <div className='row gap-10 align-center'>

                <div className={`${styles.post_icon}`}>
                    <IsbLogo />
                </div>

                <div className='column'>
                    <span className='color-text-primary text-head-7'>{title}</span>
                    <div className='row gap-10'>
                        <span className='color-text-primary text-body-4'>{date}</span>
                        <span className='color-text-primary text-body-4'>{time}</span>
                    </div>
                </div>

            </div>

            <span className='color-text-primary text-body-3'>{content}</span>
            {imgUrl &&
                <div className={`${styles.post_img} row center`}>
                    <img src={imgUrl} alt="post_pic"/>
                </div>
            }
        </div>
    )
}

export const Posts = () => {
    return (
        <div className="column">
            <h4 className={` ${styles.head} color-text-primary text-head-4 mbottom-20`}>Welcome back, Bella! </h4>

            <div className="column gap-10 mbottom-20">
                <span className="color-text-primary text-head-7">Announcements</span>
                <div className="row gap-10">
                    <TabItem title='Important' active />
                    <TabItem title='Resources' />
                    <TabItem title='Schedule' />
                    <TabItem title='Tags' />
                </div>
            </div>

            <div className='column gap-30'>

                <Post 
                  title='India’s Super Brain 2025' 
                  content='Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia pulvinar ridiculus malesuada ultricies cursus cursus ex. Tincidunt urna aenean malesuada feugiat eu. Inceptos vivamus lectus purus quam in sagittis scelerisque. Sollicitudin integer primis potenti tristique hendrerit. Fames erat tellus adipiscing non ...see more' 
                  time='10:45 am'
                  date='16 March'
                  imgUrl='aa'
                />
                <Post 
                  title='India’s Super Brain 2025' 
                  content='Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia pulvinar ridiculus malesuada ultricies cursus cursus ex. Tincidunt urna aenean malesuada feugiat eu. Inceptos vivamus lectus purus quam in sagittis scelerisque. Sollicitudin integer primis potenti tristique hendrerit. Fames erat tellus adipiscing non ...see more' 
                  time='10:45 am'
                  date='16 March'
                  imgUrl='aa'
                />

                <Post 
                  title='India’s Super Brain 2025' 
                  content='Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia pulvinar ridiculus malesuada ultricies cursus cursus ex. Tincidunt urna aenean malesuada feugiat eu. Inceptos vivamus lectus purus quam in sagittis scelerisque. Sollicitudin integer primis potenti tristique hendrerit. Fames erat tellus adipiscing non ...see more' 
                  time='10:45 am'
                  date='16 March'
                  imgUrl='aa'
                />
            </div>


        </div>
    )
}