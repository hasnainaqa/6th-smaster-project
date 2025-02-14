import styles from './hero.module.css';
import { Colors } from "@/theme/colors"

export default function Hero() {
    return (
        <>
            <div className='container mt-5 pt-5 d-flex flex-column align-items-center ${st}'>
            <svg className={styles.icon} width={100} height={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z"/></svg>
                <h1 className={styles.heroh1}> Collect customer feedback in <span >Feedback</span>
                <span style={{color: Colors.red}}>Fusion</span></h1>
                <h3 className={styles.heroh3}>FeedbackFusion is a simple widget that sends customer feedback, ideas, and bugs direct to your workspace</h3>
                    <button type="button" className={`btn ${styles.cus_btn}`}>Start collecting feedback</button>
            </div>
        </>

    )
}


