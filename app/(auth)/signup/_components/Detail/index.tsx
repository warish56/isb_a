
import React from 'react'
import styles from './style.module.css'


type Variant =  'contained' | 'outlined';

type props = {
    icon: React.ReactNode;
    title: string;
    desc: string;
    variant?: Variant
}

export const Detail = ({icon, title, desc, variant="contained"}:props) => {

    const classNames:Record<Variant, string> = {
        'contained': 'bg-accent-green color-text-secondayr',
        'outlined': ` ${styles.border_outline} bg-light color-text-primary`,
    }

    const iconClassNames:Record<Variant, string> = {
        'contained': 'bg-light',
        'outlined': `bg-accent-green`,
    }

    return (
        <div className={`${styles.container} row align-center gap-20 ${classNames[variant]}`}>
            <div className={`${styles.icon} row-center ${iconClassNames[variant]}`}>{icon}</div>
            <div className='column'>
                <span className='text-body-3'>{title}</span>
                <span className='text-body-4'>{desc}</span>
            </div>
        </div>
    )
}