
import { TextField } from '@/app/(auth)/_components/TextField'
import { Button } from '@/app/(auth)/_components/Button'

import styles from './style.module.css'


export const Form = () => {
    return (
        <form className={` ${styles.cont} full-width column gap-20`}>

            <TextField 
             placeholder='Full Name'
             inputMode='text'
             type='text'
             autoComplete="name"
            />


            <TextField 
             placeholder='Email'
             inputMode="email"
             type="email"
             autoComplete="email"
            />


            <TextField 
             placeholder='Personal Mobile Number'
             inputMode="tel"
             type="text"
             autoComplete="mobile tel"
            />


            <TextField 
             placeholder='Password'
             inputMode="text"
             type='password'
            />


            <TextField 
             placeholder='Confirm Password'
             inputMode="text"
             type='password'
            />

            <Button type="submit">Start your Journey</Button>
        </form>
    )
}