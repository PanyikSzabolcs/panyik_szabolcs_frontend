import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Megrendeles() {

    const [db, setDb] = useState("");

    function handleChange(event) {
        setDb(event.target.value);
    }

    return (
        <div>
            <header>
                <a href="/"><img src="/assets/img/sunflower.jpg" alt="fa" id="logo" /></a>
                <h1>Nevenincs Bt.</h1>
                <h2>Vetőmagok - Mindenféle, minden mennyiségben</h2>
            </header>
            <main class="container">
            {/* {aruk.map(value => (  dinamikusra megírni a megrendelés oldalt! */} 
                <h2>Dália (Kerti virág)</h2>
                <div class="row">
                    <div class="col-md-6">
                        <img src="/assets/img/dalia.jpg" alt="Dália" class="img-thumbnail"></img>
                    </div>
                    <div class="col-md-6">
                        <p>A dáliák gumós, fagyérzékeny évelők. Tápanyagdús talajban virágoznak a legszebben. Vízigényük közepes, virágzásuk idején rendszeres vízellátást igényelnek. Virágzási idejük júliustól októberig tart. Kiválóan alkalmasak vágott virágnak. </p>

                        <form
                            type="text"
                            name="darabszam"
                            onChange={handleChange}
                            value={db}
                        >
                            <p class="text-center"><span id="ar">Ár: 356 Ft</span>
                                <label for="mennyiseg">Mennyiség:</label>
                                <input type="number" name="mennyiseg" id="mennyiseg" min="1" max="999" value="1" ></input>
                            </p>
                            <p class="text-center"><button class="btn btn-warning btn-lg">Megrendelem</button></p>
                        </form>
                        {/* <form>
                            <p class="text-center"><span id="ar">Ár: 356 Ft</span>
                               
                                <form
                                    type="text"
                                    name="darabszam"
                                    onChange={handleChange}
                                    value={db}
                                >

                                </form>
                            </p>
                        </form> */}
                    </div>
                </div>

            </main>
            <footer class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-lg-2">
                        <h3>Nyitvatartás:</h3>
                    </div>
                    <div class="col-md-8 col-lg-4">
                        <ul>
                            <li>Hétfő-Péntek: 8-17 óráig</li>
                            <li>Szombat: 8-13 óráig</li>
                            <li>Vasárnap: 9-12 óráig</li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-lg-2">
                        <h3>Kapcsolat:</h3>
                    </div>
                    <div class="col-md-8 col-lg-4">
                        <ul>
                            <li>06-30/111-1111</li>
                            <li>06-70/111-1111</li>
                            <li>nevenincsbt@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Megrendeles