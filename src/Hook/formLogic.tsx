import {
  isValid,
  isExpirationDateValid,
  isSecurityCodeValid,
  getCreditCardNameByNumber
} from 'creditcard.js';
import { useState } from 'react';

isValid('4916108926268679');  // returns true
isExpirationDateValid('02', '2027'); // returns true
isSecurityCodeValid('4556603578296676', '250'); // returns true
getCreditCardNameByNumber('4539578763621486'); // returns 'Visa'



export default function formLogic() {
  const [NumberCard, setNumberCard] = useState("");
  const [date, setDate] = useState("");
  const [cvcCode, setCvcCode] = useState("");
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")


  const handleGetNumberCard = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberCard(event.target.value)
  }

  const handleGetdateCard = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setDate(value)

    const [inputMonth, inputYear] = value.split("/");
    setMonth(inputMonth)
    setYear(inputYear)

  }

  const handleGetcvcCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvcCode(event.target.value)
  }

  const onClickSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    isValid(NumberCard)
    const datoGuardado = getCreditCardNameByNumber(NumberCard)
    const isExpirate = isExpirationDateValid(month, year);
    const isSecurity = isSecurityCodeValid(NumberCard, cvcCode);

    if (datoGuardado !== "Credit card is invalid!" && isExpirate === true && isSecurity === true) {
      alert("Compra realizada con exito")
    } else {
      alert("Me parece que hay algo mal... Por favor, reviselo")
    }

  }

  const getCardName = () => {
    return getCreditCardNameByNumber(NumberCard)
  }


  return {
    handleGetNumberCard,
    handleGetcvcCode,
    handleGetdateCard,
    NumberCard,
    date,
    cvcCode,
    onClickSubmit,
    getCardName,
    year,
    month,
  }
}