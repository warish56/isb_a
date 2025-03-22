import React, { DetailedHTMLProps } from "react"
import styles from './style.module.css'


type BtnVariant = 'primary' | 'secondary';
type props = {
    children: React.ReactNode;
    variant?: BtnVariant;
    fullWidth?: boolean;
} & DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = ({children, fullWidth=false, variant='primary'}:props) => {

    const classNames:Record<BtnVariant, string> = {
        'primary': 'bg-accent-blue text-btn-2 color-text-secondary',
        'secondary': 'bg-dark  text-btn-2 color-text-secondary'
    }

    return (
        <button className={`${styles.cont} ${classNames[variant]} ${fullWidth ? 'full-width': ''} `}>
            {children}
        </button>

    )
}