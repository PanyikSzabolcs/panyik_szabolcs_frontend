import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchAruById from "./fetchAruById";
import { useParams } from "react-router-dom";

function Megrendeles() {
    const [db, setDb] = useState("");
    const [aru, setAru] = useState({});
    const {id} = useParams();
    useEffect(() => {
        fetchAruById({ setAru, id });
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        //itt kezelem majd a formot
    }

    return (
        <div>
            <header>
                <a href="/"><img src="/assets/img/sunflower.jpg" alt="fa" id="logo" /></a>
                <h1>Nevenincs Bt.</h1>
                <h2>Vetőmagok - Mindenféle, minden mennyiségben</h2>
            </header>
            {aru && <main className="container">
                <h2>{aru.nev} ({aru.Kategoria.nev})</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img src={aru.kepUrl} alt={aru.nev} className="img-thumbnail"></img>
                    </div>
                    <div className="col-md-6">
                        <p>{aru.leiras}</p>

                        <form
                            type="submit"
                            name="darabszam"
                            // onChange={handleChange}
                            value={db}
                        >
                            <p className="text-center"><span id="ar">Ár: {aru.ar} Ft</span>
                                <label for="mennyiseg">Mennyiség:</label>
                                <input type="number" name="mennyiseg" id="mennyiseg" min="1" max="999" value={db}></input>
                            </p>
                            <p className="text-center"><button className="btn btn-warning btn-lg">Megrendelem</button></p>
                        </form>
                    </div>
                </div>
            </main>}
            <footer className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-lg-2">
                        <h3>Nyitvatartás:</h3>
                    </div>
                    <div className="col-md-8 col-lg-4">
                        <ul>
                            <li>Hétfő-Péntek: 8-17 óráig</li>
                            <li>Szombat: 8-13 óráig</li>
                            <li>Vasárnap: 9-12 óráig</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-2">
                        <h3>Kapcsolat:</h3>
                    </div>
                    <div className="col-md-8 col-lg-4">
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