import styles from "./home.module.css"
import Forms from "../Form/form"
import bitcoinUpdate from "../../Hook/BitcoinUpdate"

export default function Home() {
    //Traigo el valor del Bitcoin en Dolares para mostrarlo
    const { valueBitcoinInDollars } = bitcoinUpdate()

    return (
        <>
            <article className={styles.containerHome}>
                <div className={styles.containerContent}>
                    <div className={styles.containerInfoWithImg}>
                        <div className={styles.containerImgHome}>
                            <img src="/Item Container.png" alt="" />
                        </div>
                        <section className={styles.containerInfoHome}>
                            <p>Sneekers for Men</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</span>
                            <div className={styles.pClass}>
                                <p>Price in BTC</p>
                            </div>
                            <strong>₿ {valueBitcoinInDollars > 0 ? valueBitcoinInDollars : "Loading"}</strong>
                            <div className={styles.pClass}>
                                <p>Price in USD</p>
                            </div>
                            <strong>$69.00</strong>
                        </section>
                    </div>
                    <article className={styles.containerForms}>
                        <Forms />
                    </article>
                </div>
            </article>
        </>
    )
}