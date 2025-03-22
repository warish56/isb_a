'use client';

import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './style.module.css'


type SingleLineField = {
    startSlot?: React.ReactNode;
    multiline?: false;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type MultiLineField = {
    startSlot?: React.ReactNode;
    multiline?: true;
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>


type textFieldProps = MultiLineField | SingleLineField;

const TextField = ({startSlot, multiline, ...rest}:textFieldProps) => {

    if(multiline){
        return(
            <div className={`${styles.text_field_cont} row align-center`}>
                {startSlot && <div>{startSlot}</div>}
                <textarea {...rest as TextareaHTMLAttributes<HTMLTextAreaElement>} rows={4} className={`${styles.text_field} ${styles.multi_field} text-body-3`}/>
            </div>
        )
    }

    return(
        <div className={`${styles.text_field_cont} row align-center`}>
            {startSlot && <div>{startSlot}</div>}
            <input {...rest as InputHTMLAttributes<HTMLInputElement>} className={`${styles.text_field} text-body-3`}/>
        </div>
    )
}

export const StudentForm = () => {
    return (
        <form className={`full-width column gap-30`}>

            <div className="column gap-10">
                <TextField 
                placeholder='Full Name'
                type='text'
                inputMode='text'
                autoComplete="name"
                />
                <TextField 
                placeholder='Email'
                type='text'
                autoComplete='email'
                inputMode='email'
                />
                <TextField 
                placeholder='Personal Mobile Number'
                type='text'
                inputMode='tel'
                autoComplete='mobile tel'
                />

                <TextField 
                placeholder='Message'
                inputMode='text'
                multiline
                />
            </div>

            <button type='submit' className={`${styles.cta_btn} bg-accent-yellow`}>
                <span className='text-btn-2 color-text-primary'>Send</span>
            </button>
        </form>
    )
}