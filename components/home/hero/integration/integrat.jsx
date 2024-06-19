import styles from './integrat.module.css';


export default function Integrat() {
    return (
        <>
            <div className={`container ${styles.inte}`}>
                <div className={`container rounded-5 ${styles.inte_box}`}>
                    <h3 className={styles.he3}>Easy to integrate</h3>
                    <h5 className='mt-2'>Takes 60 seconds. Just copy and paste into your website's <code>&lt;head&gt;</code>. Step-by-step guide provided!</h5>
                    <div className='mt-3 mb-3'>
                        {/* <pre>
                            &lt;script src=&quot;https://script.usefeedbackfusion.com
                            /widget.js?project=...&quot; defer&gt;&lt;/script&gt;{"\n"}
                            {"\n"}
                            &lt;button data-feedbackfusion-button=&quot;true&quot;&gt;{"\n"}
                            &nbsp;&nbsp;Open Feedbackfusion widget{"\n"}
                            &lt;/button&gt;
                        </pre> */}
                    </div>
                </div>
            </div>
        </>

    )
}
