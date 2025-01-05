import styles from "./form.module.css"


export default function Forms() {
    return (
        <>
            <article className={styles.containerForm}>
                <label htmlFor="">Card Number</label>
                <form className={styles.formCard}>
                    <input type="text"
                        placeholder="Pure"
                    />
                    <img src="/Mastercard Logo.png" alt="" />
                </form>
                <label htmlFor="">MM/YY</label>
                <form className={styles.formCard}>
                    <input type="text"
                        placeholder="Pure"
                    />
                </form>
                <label htmlFor="">CVC Code</label>
                <form className={styles.formCard}>
                    <input type="text"
                        placeholder="Pure"
                    />
                </form>


                <button>Hola</button>
            </article>
        </>
    )
}