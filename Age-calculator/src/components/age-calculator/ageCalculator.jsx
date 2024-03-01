import { useState } from 'react';
import styles from './ageCalculator.module.css';
import data from './data.json'

export const AgeCalculator = () => {

  const [birthDate, setBirthDate] = useState({});
  const [age, setAge] = useState({ years: "", months: "", days: "" });

  // porque no enviarle el label y el event?
  // const handleInputChange = (label, event) => { - OK

  const handleInputChange = (label, event) => {
    //No es necesario recuperar todo el brithDate - PENDIENTE CORREGIR
    setBirthDate({
      ...birthDate,
      [label]: event.target.value
    });
  };

  const handleAgeCalc = () => {

    if (birthDate.year !== undefined && birthDate.month !== undefined && birthDate.day !== undefined) {

      let today = new Date();
      let todayDay = today.getDate();
      let todayMonth = today.getMonth() + 1;
      let todayYear = today.getFullYear();

      let daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (birthDate.day > todayDay) {
        todayDay = todayDay + daysOfMonth[todayMonth + 1];
        todayMonth = todayMonth - 1;
      }

      if (birthDate.month > todayMonth) {
        todayMonth = todayMonth + 12;
        todayYear = todayYear - 1;
      }

      let years = (todayYear - birthDate.year).toString();
      let months = (todayMonth - birthDate.month).toString();
      let days = (todayDay - birthDate.day).toString();

      // No es necesario recuperar todo el objeto (...age, ...). - OK
      setAge({ years: years, months: months, days: days })

    } else {
      console.error("Falta uno de los campos")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_div_inputs}>
        {
          data.map((elemento, index) => {
            return (
              <div key={index} className={styles.input_container}>
                <label htmlFor={elemento.titulo} >{elemento.label}</label>
                {/* <input type='number' min="0" onChange={(event) => handleInputChange(elemento.label, event)}></input> - OK */}

                <input type='number' placeholder={elemento.placeholder} onChange={(event) => handleInputChange(elemento.label, event)}></input>
              </div>
            )
          })
        }
        <button className={styles.button} onClick={handleAgeCalc}>↓</button>
      </div>
      <div className={styles.container_items}>

        <h1><span>{(age.days === "") ? "- -" : `${age.days}`} </span>days</h1>
        <h1><span>{(age.months === "") ? "- -" : `${age.months}`} </span>months</h1>
        <h1><span>{(age.years === "") ? "- -" : `${age.years}`} </span>years</h1>

      </div>
    </div>
  )
}