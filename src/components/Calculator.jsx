//Kalkulator postotka
//Izracun postotka nekog broja, povecavanje/smanjivanje odreden postotkom
//Koristiti css, urediti izgled
//https://percentagecalculator.net/

import { createSignal } from "solid-js";
import "../css/calculator.css";
import ErrorMessage from "./ErrorMessage";

function KalkulatorPostotka() {
  const [error, setError] = createSignal("");

  const [broj1, setBroj1] = createSignal("0");                           //"0" string , a 0 broj
  const [postotak1, setPostotak1] = createSignal("0");
  const [rezultat1, setRezultat1] = createSignal(0);

  const [broj2, setBroj2] = createSignal("0");
  const [brojUkupno, setBrojUkupno] = createSignal("0");
  const [rezultat2, setRezultat2] = createSignal(0);

  const [broj3, setBroj3] = createSignal("0");
  const [broj4, setBroj4] = createSignal("0");
  const [rezultat3, setRezultat3] = createSignal(0);

  //FUNKCIJE

  const showError = (message) => {
    setError(message);
  };

  const validateInput = (value) => {
    return /^[+-]?\d*\.?\d*$/.test(value) && value.length <= 12;           //format unosa +/- x.y
  };

  const izracunajPostotak = (e) => {
    e.preventDefault();
    if (!validateInput(broj1()) || !validateInput(postotak1())) {
      showError("Unos može sadržavati samo brojeve i jedan -. Duljina ne smije prelaziti 12 znakova.");
      return;
    }
  
    const broj = parseFloat(broj1());                                      //pretvorba stringa u broj
    const postotak = parseFloat(postotak1());
    setRezultat1(((broj * postotak) / 100).toFixed(5));
  };
  

  const izracunajKojiPostotak = (e) => {
    e.preventDefault();
    
    if (!validateInput(broj2()) || !validateInput(brojUkupno())) {
      showError("Unos može sadržavati samo brojeve i jedan minus na početku. Duljina ne smije prelaziti 12 znakova.");
      return;
    }
  
    const broj = parseFloat(broj2());
    const ukupno = parseFloat(brojUkupno());
  
    if (ukupno === 0) {                                                       //neki broj x je 0% od 0
      setRezultat2(0); 
      return;
    }else{
      setRezultat2(((broj / ukupno) * 100).toFixed(5));
    }
  };
  

  const izracunajPromjenu = (e) => {
    e.preventDefault();
    if (!validateInput(broj3()) || !validateInput(broj4())) {
      showError(
        "Unos može sadržavati samo brojeve i jedan minus na početku. Duljina ne smije prelaziti 12 znakova."
      );
      return;
    }

    setRezultat3((((broj4() - broj3()) / broj3()) * 100).toFixed(5));
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
              type="text"
              value={broj1()}
              onInput={(e) => setBroj1(e.target.value)}
              placeholder="Unesite broj"
            />
            % od
            <input
              type="text"
              value={postotak1()}
              onInput={(e) => setPostotak1(e.target.value)}
              placeholder="Unesite postotak"
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
              type="text"
              value={broj2()}
              onInput={(e) => setBroj2(e.target.value)}
              placeholder="Unesite broj"
            />
            od
            <input
              type="text"
              value={brojUkupno()}
              onInput={(e) => setBrojUkupno(e.target.value)}
              placeholder="Unesite ukupnu vrijednost"
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
              type="text"
              value={broj3()}
              onInput={(e) => setBroj3(e.target.value)}
              placeholder="Unesite početnu vrijednost"
            />
            na
            <input
              type="text"
              value={broj4()}
              onInput={(e) => setBroj4(e.target.value)}
              placeholder="Unesite krajnju vrijednost"
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
