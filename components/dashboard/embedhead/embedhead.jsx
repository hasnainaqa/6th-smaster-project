import styles from "./embedhead.module.css"

export default function EmbedHead() {
    return (
      <>
      <div className={styles.padding}>
      <h1>Embed</h1>
    <p>Please refer to our documentation for instructions on how to embed your FeedbackHQ widget and identify users.</p>
    <div>
    {/* <input><script src="https://script.usefeedbackhq.com/widget.js?project=hyyp9rQeN7Q4UfXicX90tMDl26F2" defer></script></input> */}
    <button type="button" className={`btn ${styles.cus_btn}`}>Copy</button>
    </div>
    </div>
    
      </>
    );
  }
  




