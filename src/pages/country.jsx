import React from 'react'
import { useParams } from 'react-router-dom'
import countryList from '../data/countries.json'

export default function Country() {

  const { name } = useParams()
  const id = countryList.find(country => (country.name.common).toLowerCase() === name)

  console.log();

  return (
    <>
      <div className='pt-24  p-4 max-w-screen'>

        <h2 className=' text-white text-3xl font-bold ' >{name.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')}</h2>
        <section className='flex flex-col-reverse w-full md:flex-row justify-between' >
          <div className='  md:max-w-[50%]'>

            <p className='text-gray-400'>Capital: {id.capital ? id.capital.join(', ') : ' '}</p>
            <p className='text-gray-400'>Fifa: {id.fifa ? id.fifa : ' '}</p>
            <p className='text-gray-400'>Region: {id.region ? id.region : ' '}</p>
            <p className='text-gray-400'>Area: {id.area ? id.area : ' '}</p>
            <p className='text-gray-400'>Population: {id.population ? id.population : ' '}</p>
            <p className='text-gray-400'>Capital Info: {id.capitalInfo.latlng ? id.capitalInfo.latlng.join(', ') : ' '}</p>
            <p className='text-gray-400'>Continents : {id.continents ? id.continents.join(', ') : ' '}</p>
            <p className='text-gray-400'>Borders : {id.borders ? (id.borders).join(', ') : ''}</p>
            <p className='text-gray-400'>Languages : {id.languages ? Object.keys(id.languages).join(', ') : ''}</p>
            <p className='text-gray-400'>Currencies : {id.currencies ? Object.keys(id.currencies) : ''}</p>
            <p className='text-gray-400'>Times Zone: {id.timezones ? id.timezones.join(', ') : ' '}</p>
            <p className='text-gray-400'>Start Of Week: {id.startOfWeek ? id.startOfWeek : ' '}</p>

            <p className='text-gray-400'>Postal Code : {id.postalCode ? id.postalCode.format : ' '}</p>
            <p className='text-gray-400'>Coat of Arms: {id.coatOfArms.png ? id.coatOfArms.png : ' '}</p>
            <p className='text-gray-400'>Flag : {id.flags.png ? id.flags.png : ' '}</p>
            <p className='text-gray-400'>Map : {id.maps.googleMaps ? id.maps.googleMaps : ' '}</p>
            <p className='text-gray-400'>Alt : {id.flags.alt ? id.flags.alt : ' '}</p>

            <p className='text-gray-400'>Gini: {id.gini ? Object.keys(id.gini) : ' '}</p>
            <p className='text-gray-400'>Coat of Arms : {id.coatOfArms.png ? id.coatOfArms.png : ' '}</p>
            {/* */}
          </div>

          <div className=' md:max-w-[50%]'>
            <img className='w-full p-2' src={id.flags.svg} alt="" />
          </div>
        </section>
      </div>
    </>
  )
}


/*
{
  "name": {
      "common": "Peru",
      "official": "Republic of Peru",
      "nativeName": {
          "aym": {
              "official": "Piruw Suyu",
              "common": "Piruw"
          },
          "que": {
              "official": "Piruw Ripuwlika",
              "common": "Piruw"
          },
          "spa": {
              "official": "República del Perú",
              "common": "Perú"
          }
      }
  },
  "tld": [
      ".pe"
  ],
  "cca2": "PE",
  "ccn3": "604",
  "cca3": "PER",
  "cioc": "PER",
  "independent": true,
  "status": "officially-assigned",
  "unMember": true,
  "currencies": {
      "PEN": {
          "name": "Peruvian sol",
          "symbol": "S/ "
      }
  },
  "idd": {
      "root": "+5",
      "suffixes": [
          "1"
      ]
  },
  "capital": [
      "Lima"
  ],
  "altSpellings": [
      "PE",
      "Republic of Peru",
      "República del Perú"
  ],
  "region": "Americas",
  "subregion": "South America",
  "languages": {
      "aym": "Aymara",
      "que": "Quechua",
      "spa": "Spanish"
  },
  "translations": {
      "ara": {
          "official": "جمهورية بيرو",
          "common": "بيرو"
      },
      "bre": {
          "official": "Republik Perou",
          "common": "Perou"
      },
      "ces": {
          "official": "Peruánská republika",
          "common": "Peru"
      },
      "cym": {
          "official": "Republic of Peru",
          "common": "Peru"
      },
      "deu": {
          "official": "Republik Peru",
          "common": "Peru"
      },
      "est": {
          "official": "Peruu Vabariik",
          "common": "Peruu"
      },
      "fin": {
          "official": "Perun tasavalta",
          "common": "Peru"
      },
      "fra": {
          "official": "République du Pérou",
          "common": "Pérou"
      },
      "hrv": {
          "official": "Republika Peru",
          "common": "Peru"
      },
      "hun": {
          "official": "Perui Köztársaság",
          "common": "Peru"
      },
      "ita": {
          "official": "Repubblica del Perù",
          "common": "Perù"
      },
      "jpn": {
          "official": "ペルー共和国",
          "common": "ペルー"
      },
      "kor": {
          "official": "페루 공화국",
          "common": "페루"
      },
      "nld": {
          "official": "Republiek Peru",
          "common": "Peru"
      },
      "per": {
          "official": "جمهوری پرو",
          "common": "پرو"
      },
      "pol": {
          "official": "Republika Peru",
          "common": "Peru"
      },
      "por": {
          "official": "República do Peru",
          "common": "Perú"
      },
      "rus": {
          "official": "Республика Перу",
          "common": "Перу"
      },
      "slk": {
          "official": "Peruánska republika",
          "common": "Peru"
      },
      "spa": {
          "official": "República de Perú",
          "common": "Perú"
      },
      "srp": {
          "official": "Република Перу",
          "common": "Перу"
      },
      "swe": {
          "official": "Republiken Peru",
          "common": "Peru"
      },
      "tur": {
          "official": "Peru Cumhuriyeti",
          "common": "Peru"
      },
      "urd": {
          "official": "جمہوریہ پیرو",
          "common": "پیرو"
      },
      "zho": {
          "official": "秘鲁共和国",
          "common": "秘鲁"
      }
  },
  "latlng": [
      -10,
      -76
  ],
  "landlocked": false,
  "borders": [
      "BOL",
      "BRA",
      "CHL",
      "COL",
      "ECU"
  ],
  "area": 1285216,
  "demonyms": {
      "eng": {
          "f": "Peruvian",
          "m": "Peruvian"
      },
      "fra": {
          "f": "Péruvienne",
          "m": "Péruvien"
      }
  },
  "flag": "🇵🇪",
  "maps": {
      "googleMaps": "https://goo.gl/maps/uDWEUaXNcZTng1fP6",
      "openStreetMaps": "https://www.openstreetmap.org/relation/288247"
  },
  "population": 32971846,
  "gini": {
      "2019": 41.5
  },
  "fifa": "PER",
  "car": {
      "signs": [
          "PE"
      ],
      "side": "right"
  },
  "timezones": [
      "UTC-05:00"
  ],
  "continents": [
      "South America"
  ],
  "flags": {
      "png": "https://flagcdn.com/w320/pe.png",
      "svg": "https://flagcdn.com/pe.svg",
      "alt": "The flag of Peru is composed of three equal vertical bands of red, white and red, with the national emblem centered in the white band."
  },
  "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/pe.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/pe.svg"
  },
  "startOfWeek": "monday",
  "capitalInfo": {
      "latlng": [
          -12.05,
          -77.05
      ]
  },
  "postalCode": {
      "format": "#####",
      "regex": "^(\\d{5})$"
  }
}
*/