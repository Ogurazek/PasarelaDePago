import formLogic from "../../Hook/formLogic"
import styles from "./form.module.css"



export default function Forms() {
    const { handleGetcvcCode,
        handleGetdateCard,
        handleGetNumberCard,
        NumberCard,
        cvcCode,
        date,
        onClickSubmit,
        getCardName } = formLogic()




    const getImageCardName = (getCardName: string) => {
        switch (getCardName) {
            case "Visa":
                return "/visa.svg";
            case "Mastercard":
                return "/mastercard2.svg";
            case "American Express":
                return "/AmericanExpress.svg";
            case "Diners":
                return "/diners.svg";
        }
    };
    return (
        <>
            <form className={styles.containerForm}>
                <div className={styles.containerFormSection}>
                    <label htmlFor="">Card Number</label>
                    <section className={styles.formCard}>
                        <input type="text"
                            placeholder="5399 3524 3653 1424"
                            maxLength={16}
                            onChange={handleGetNumberCard}
                            value={NumberCard}
                        />
                        <div className={styles.containerImgFC}>
                            {getCardName() && <img src={getImageCardName(getCardName())} alt="" />}                        </div>
                    </section>
                    <label htmlFor="">MM/YY</label>
                    <section className={styles.formCard}>
                        <input type="text"
                            placeholder="12/30"
                            onChange={handleGetdateCard}
                            value={date}
                        />
                    </section>
                    <label htmlFor="">CVC Code</label>
                    <section className={styles.formCard}>
                        <input type="text"
                            placeholder="539"
                            onChange={handleGetcvcCode}
                            value={cvcCode}
                        />
                    </section>
                </div>

                <button type="submit" onClick={onClickSubmit} className={styles.buttonForm}>PAY NOW</button>
            </form>
        </>
    )
}