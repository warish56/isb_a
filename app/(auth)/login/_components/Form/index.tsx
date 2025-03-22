
import Link from 'next/link'

import { TextField } from '@/app/(auth)/_components/TextField'
import { Button } from '@/app/(auth)/_components/Button'

import styles from './style.module.css'


export const Form = () => {
    return (
        <form className={` ${styles.cont} column gap-10`}>

            <TextField 
             placeholder='Registered email'
             inputMode="email"
             type='text'
            />


            <TextField 
             placeholder='Password'
             inputMode="text"
             type='password'
            />


            <div className='mb-10 row align-center row-end '>
                <Link href="/forgot-password" className='no-underline' >
                    <span className='text-body-4 accent-dark-blue '>Forgot password?</span>
                </Link>
            </div>

            <Button type="submit">Submit</Button>

        </form>
    )
}