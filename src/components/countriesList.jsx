import { useState } from 'react'
import countries from '../data/countries.json'
import Card from './card.jsx'

export default function Country({ option }) {

    return (
        <>
            {countries.map(country => {
                if (option === 'All' || option === country.region) {
                    return (
                        <Card
                            key={country.name.common}
                            className=""
                            title={country.name.common}
                            img={country.flags.svg}
                            info={
                                <>
                                    <p className="text-gray-400 text-sm">Capital: {country.capital}</p>
                                    <p className="text-gray-400 text-sm">Population: {country.population}</p>
                                    <p className="text-gray-400 text-sm">Region: {country.region}</p>
                                    <p className="text-gray-400 text-sm">Currency: {country.currencies ? Object.keys(country.currencies).join(', ') : ''}</p>
                                    <p className="text-gray-400 text-sm">Language: {country.languages ? Object.keys(country.languages).join(', ') : ''}</p>
                                </>
                            }
                        />

                    )
                }
            })}

        </>
    )
}

