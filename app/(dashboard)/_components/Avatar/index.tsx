

import styles from './style.module.css';


type props = {
    name: string;
    url?: string;
    size?: 'grow' | 'sm' | 'md' | 'lg'
}

export const Avatar = ({name, url, size='grow'}:props) => {
    const initials = name.split(' ');
    return (
        <div data-size={size} className={`${styles.cont} row-center`}>
            {url && <img src={url} alt="user"/>}
            {!url && <span className='color-text-primary text-head-4'>{`${initials[0].charAt(0)}${initials.length > 1 ? initials[initials.length-1].charAt(0): ''}`}</span>}
        </div>
    )
}