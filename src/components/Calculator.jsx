//Kalkulator postotka
//Izracun postotka nekog broja, povecavanje/smanjivanje odreden postotkom
//Koristiti css, urediti izgled
//https://percentagecalculator.net/

import { createSignal } from "solid-js";
import "../css/calculator.css";

function KalkulatorPostotka() {
  const [broj1, setBroj1] = createSignal(0);
  const [postotak1, setPostotak1] = createSignal(0);
  const [rezultat1, setRezultat1] = createSignal(0);

  const [broj2, setBroj2] = createSignal(0);
  const [brojUkupno, setBrojUkupno] = createSignal(0);
  const [rezultat2, setRezultat2] = createSignal(0);

  const [broj3, setBroj3] = createSignal(0);
  const [broj4, setBroj4] = createSignal(0);
  const [rezultat3, setRezultat3] = createSignal(0);

  //FUNKCIJE

  const izracunajPostotak = (e) => {
    e.preventDefault();
    setRezultat1(((broj1() * postotak1()) / 100).toFixed(2)); // Zaokruživanje na 2 decimale
  };

  const izracunajKojiPostotak = (e) => {
    e.preventDefault();
    setRezultat2(((broj2() / brojUkupno()) * 100).toFixed(2));
  };

  const izracunajPromjenu = (e) => {
    e.preventDefault();
    setRezultat3((((broj4() - broj3()) / broj3()) * 100).toFixed(2));
  };

  return (
    <div class="container">

      <h2 class="title"> KALKULATOR POSTOTKA </h2>
      
      {/* 1. Forma */}
      <div class="window-small">
        <form class="form-section" onSubmit={izracunajPostotak}>
          <label>
            Koliko je
            <input
              type="number"
              value={broj1()}
              onInput={(e) => setBroj1(parseFloat(e.target.value))}
            />
            % od
            <input
              type="number"
              value={postotak1()}
              onInput={(e) => setPostotak1(parseFloat(e.target.value))}
            />
            ?
          </label>
          <div>
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
              value={broj2()}
              onInput={(e) => setBroj2(parseFloat(e.target.value))}
            />
            od
            <input
              type="number"
              value={brojUkupno()}
              onInput={(e) => setBrojUkupno(parseFloat(e.target.value))}
            />
            ?
          </label>
          <div>
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
              value={broj3()}
              onInput={(e) => setBroj3(parseFloat(e.target.value))}
            />
            na
            <input
              type="number"
              value={broj4()}
              onInput={(e) => setBroj4(parseFloat(e.target.value))}
            />
            ?
          </label>
          <div>
            <button type="submit">Izračunaj</button>
            <div class="result-box">{rezultat3()}%</div>
          </div>
        </form>
      </div>

    </div>
  );
}

export default KalkulatorPostotka;
