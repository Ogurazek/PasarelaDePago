import styles from "./home.module.css"

export default function Home() {
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
                            <strong>₿ 0.0028162403</strong>
                            <div className={styles.pClass}>
                                <p>Price in BTC</p>
                            </div>
                            <strong>$69.00</strong>
                        </section>
                    </div>
                    <article className={styles.containerForms}>
                        <input type="text" />
                    </article>
                </div>
            </article>
        </>
    )
}