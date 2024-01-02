import React from 'react'
import { useState, useEffect } from "react";
import CountriesList from "../components/countriesList.jsx";
import Nav from "../components/nav.jsx"

export default function home({ search }) {

    /* const [exchangeRates, setExchangeRates] = useState({});

    useEffect(() => {
        fetch('https://api.currencybeacon.com/v1/latest?api_key=2wR4qZfcw3LTaMzTU8aeB6jEOwfOx3Vo')
            .then(response => response.json())
            .then(data => setExchangeRates(data.rates))
            .catch(error => console.error('Error fetching exchange rates:', error));
    }, []);
     */




    return (
        <>



            <main className="  pt-20  grid grid-cols-[repeat(auto-fit,minmax(100px,180px))] sm:grid-cols-[repeat(auto-fit,minmax(100px,300px))] justify-center">

                <CountriesList
                    option={search}
                />

            </main>

        </>
    )
}
