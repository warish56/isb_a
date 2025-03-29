
import { Posts } from './_components/Posts';
import { Profile } from './_components/Profile';
import styles from './style.module.css';


export default function Page(){
    return (
        <main className="body-wrapper">
            <div className="body-wrapper-content column">
                <div className={`${styles.content}`}>
                    <div className={`${styles.posts_cont} navbar-off`}>
                        <Posts />
                    </div>
                    <div className={`${styles.profile_cont}`}>
                        <Profile />
                    </div>
                </div>
            </div>
        </main>
    )
}