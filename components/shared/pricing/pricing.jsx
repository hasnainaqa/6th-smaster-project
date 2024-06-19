import styles from './pricing.module.css';


export default function Pricing() {
    return (
        <>
            <div className={`container ${styles.pridiv}`}>
                <div className={styles.prid}>
                    <h3 className={styles.head3}>Pricing</h3>
                    <h5 className={styles.head5}>Get started on our generous free plan, upgrade to Pro to use all features</h5>
                    <div className='row d-flex justify-content-center mt-4'>
                    <div className={`col-7 col-md-6 col-lg-5 ${styles.pri}`}>
                        <p>Pro</p>
                        <h5> <span className={styles.head4}>$2.99</span>
                       /mo </h5>
                        <p>Unlimited feedbacks</p>
                        <p>User identification</p>
                        <p>Notifications</p>
                        <p>Screenshots</p>
                        <p>Remove branding</p>
                        <button type="button" className={`btn ${styles.cus_btn}`}>Sign up feedbackfusion</button>

                    </div>
                    </div>
                    <div className={styles.right}><p> © FeedbackFusion 2024 - All Rights Reserved</p></div>

                </div>
            </div>

        </>

    )
}