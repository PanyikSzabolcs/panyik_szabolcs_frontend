import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Aruk() {

    const [aruk, setAruk] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/api/aruk")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setAruk(data)
            })
    }, [])

    return (
        <div>
            <header>
                <a href="/"><img src="/assets/img/sunflower.jpg" alt="fa" id="logo" /></a>
                <h1>Nevenincs Bt.</h1>
                <h2>Vetőmagok - Mindenféle, minden mennyiségben</h2>
            </header>
            <main className="container">
                <div className="row">
                    <h2>Vetőmagjaink:</h2>
                    {aruk.map(value => (
                        <div className="col-lg-4 mt-4 arukep" key={value.id}>
                            <h4>{value.nev}</h4>
                            <a href="/megrendeles"><img src={value.kepUrl} alt={value.nev} className="img-fluid"></img></a>
                        </div>
                    ))}
                </div>
            </main>
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

export default Aruk