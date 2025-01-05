import styles from "./form.module.css"


export default function Forms() {
    return (
        <>
            <article className={styles.containerForm}>
                <div className={styles.containerFormSection}>
                    <label htmlFor="">Card Number</label>
                    <form className={styles.formCard}>
                        <input type="text"
                            placeholder="5399 3524 3653 1424"
                            maxLength={16}
                        />
                        <img src="/Mastercard Logo.png" alt="" />
                    </form>
                    <label htmlFor="">MM/YY</label>
                    <form className={styles.formCard}>
                        <input type="text"
                            placeholder="12/30"
                        />
                    </form>
                    <label htmlFor="">CVC Code</label>
                    <form className={styles.formCard}>
                        <input type="text"
                            placeholder="539"
                        />
                    </form>
                </div>

                <button className={styles.buttonForm}>PAY NOW</button>
            </article>
        </>
    )
}