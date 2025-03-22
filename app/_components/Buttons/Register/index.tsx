
import styles from './style.module.css';

type props = {
    title?: string;
}

export const RegisterButton = ({title='Register Now'}:props) => {
    return (
        <button className={`${styles.register_btn} bg-dark text-btn-2 color-text-secondary`}>{title}</button>
    )
}