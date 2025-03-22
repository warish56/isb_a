

import { DetailedHTMLProps } from 'react'
import { InputHTMLAttributes } from 'react'

import styles from './style.module.css'


type props = {

} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const TextField = ({...rest}:props) => {
    return (
        <div className={`${styles.container} row align-center`}>
            <input {...rest} className={` full-width text-body-3`}/>
        </div>
    )
}
