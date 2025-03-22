

import Link from "next/link"
import { Button } from "../_components/Button"
import styles from "./style.module.css"
import { Form } from "./_components/Form"
import { Footer } from "./_components/Footer"


export default function Page(){
    return (
        <div className={`${styles.container} column`}>

            <div className="column-center grow-1">
                <div className={`${styles.content} column gap-20 full-width`}>
                    <div className={` ${styles.text_cont} column gap-10 text-center`}>
                        <h1 className="text-head-3 color-text-primary">Welcome</h1>
                        <span className="text-body-1 color-text-primary">Please log in to your account.</span>
                    </div>

                    <Form />

                    <div className="row gap-10 align-center">
                        <div className={`${styles.line} grow-1`}/>
                        <div className="">
                            <span className="text-body-4 color-text-tertiary">OR</span>
                        </div>
                        <div className={`${styles.line} grow-1`}/>
                    </div>

                    <Link href="/signup" className="full-width">
                        <Button fullWidth variant="secondary">
                            Register Now
                        </Button>
                    </Link>

                </div>
            </div>

            <Footer />
        </div>
    )
}