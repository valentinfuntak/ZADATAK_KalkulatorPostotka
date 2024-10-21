//Kalkulator postotka
//Izracun postotka nekog broja, povecavanje/smanjivanje odreden postotkom
//Koristiti css, urediti izgled

import "../css/Calculator.css"
import { createSignal } from 'solid-js';

function Calcluator() {

  const [firstNumber, setFirstNumber] = createSignal();
  const [firstPrecentage, setFirstPrecentage] = createSignal();
  const [firstResult, setFirstResult] = createSignal();


  const [secondNumber, setSecondNumber] = createSignal();
  const [secondPrecentage, setSecondPrecentage] = createSignal();
  const [secondResult, setSecondResult] = createSignal();

  const [thirdNumber, setThirdNumber] = createSignal();
  const [thirdPrecentage, setThirdPrecentage] = createSignal();
  const [thirdResult, setThirdResult] = createSignal();

  function CalculatePrecentage(e) {
    e.preventDefault();
    setFirstResult((firstNumber() * firstPrecentage()) / 100);
  }

  return (
    <>
      <h1>KALKULATOR POSTOTKA</h1>
      <div class="kucica">
        <form onSubmit={CalculatePrecentage}>
          <label class="text1">Koliko je</label>
          <input class="input1" type="number" value={firstPrecentage} name='postotak' />
          <label class="text2">& od</label>
          <input class="input2" type="number" value={firstNumber}></input>
          <button class="button" type="sumbit" >Izračunaj</button>
          <div>Rezultat: {firstResult()}</div>
        </form>
      </div>
    </>
  );
}

export default Calcluator;
