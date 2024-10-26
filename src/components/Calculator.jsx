//Kalkulator postotka
//Izracun postotka nekog broja, povecavanje/smanjivanje odreden postotkom
//Koristiti css, urediti izgled
//https://percentagecalculator.net/

import { createSignal } from "solid-js";
import "../css/calculator.css";
import ErrorMessage from "./ErrorMessage";

function KalkulatorPostotka() {
  const [error, setError] = createSignal("");

  const [broj1, setBroj1] = createSignal(0);
  const [postotak1, setPostotak1] = createSignal(0);
  const [rezultat1, setRezultat1] = createSignal(0);

  const [broj2, setBroj2] = createSignal(0);
  const [brojUkupno, setBrojUkupno] = createSignal(0);
  const [rezultat2, setRezultat2] = createSignal(0);

  const [broj3, setBroj3] = createSignal(0);
  const [broj4, setBroj4] = createSignal(0);
  const [rezultat3, setRezultat3] = createSignal(0);

  // FUNKCIJE

  const showError = (message) => {
    setError(message);
  };

  const izracunajPostotak = (e) => {
    e.preventDefault();
    if (broj1().toString().length > 12 || postotak1().toString().length > 12) {
      showError("Unos je predugačak, unesite broj manji od 13!");
    } else {
      setRezultat1(((broj1() * postotak1()) / 100).toFixed(5));
    }
  };

  const izracunajKojiPostotak = (e) => {
    e.preventDefault();
    if (broj2().toString().length > 12 || brojUkupno().toString().length > 12) {
      showError("Unos je predugačak, unesite broj manji od 13!");
    } else {
      setRezultat2(((broj2() / brojUkupno()) * 100).toFixed(5));
    }
  };

  const izracunajPromjenu = (e) => {
    e.preventDefault();
    if (broj3().toString().length > 12 || broj4().toString().length > 12) {
      showError("Unos je predugačak, unesite broj manji od 13!");
    } else {
      setRezultat3((((broj4() - broj3()) / broj3()) * 100).toFixed(5));
    }
  };

  return (
    <div class="container">
      <h2 class="title"> KALKULATOR POSTOTKA </h2>

      {error() && (
        <ErrorMessage message={error()} onClose={() => setError("")} />
      )}

      {/* 1. Forma */}
      <div class="window-small">
        <form class="form-section" onSubmit={izracunajPostotak}>
          <label>
            Koliko je
            <input
              type="number"
              step="any"  //Unos decimalnih brojeva
              value={broj1()}
              onInput={(e) => setBroj1(parseFloat(e.target.value))}
            />
            % od
            <input
              type="number"
              step="any" 
              value={postotak1()}
              onInput={(e) => setPostotak1(parseFloat(e.target.value))}
            />
            ?
          </label>
          <div class="result_container">
            <button type="submit">Izračunaj</button>
            <div class="result-box">{rezultat1()}</div>
          </div>
        </form>
      </div>

      {/* 2. Forma */}
      <div class="window-small">
        <form class="form-section" onSubmit={izracunajKojiPostotak}>
          <label>
            Koliki postotak je
            <input
              type="number"
              step="any" 
              value={broj2()}
              onInput={(e) => setBroj2(parseFloat(e.target.value))}
            />
            od
            <input
              type="number"
              step="any" 
              value={brojUkupno()}
              onInput={(e) => setBrojUkupno(parseFloat(e.target.value))}
            />
            ?
          </label>
          <div class="result_container">
            <button type="submit">Izračunaj</button>
            <div class="result-box">{rezultat2()}%</div>
          </div>
        </form>
      </div>

      {/* 3. Forma */}
      <div class="window-small">
        <form class="form-section" onSubmit={izracunajPromjenu}>
          <label>
            Koji je postotak povećanja/smanjenja od
            <input
              type="number"
              step="any" 
              value={broj3()}
              onInput={(e) => setBroj3(parseFloat(e.target.value))}
            />
            na
            <input
              type="number"
              step="any" 
              value={broj4()}
              onInput={(e) => setBroj4(parseFloat(e.target.value))}
            />
            ?
          </label>
          <div class="result_container">
            <button type="submit">Izračunaj</button>
            <div class="result-box">{rezultat3()}%</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default KalkulatorPostotka;

