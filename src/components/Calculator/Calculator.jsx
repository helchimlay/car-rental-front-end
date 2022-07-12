import React, { useState, useEffect } from "react"
import "./Calculator.css"

import { useParams } from "react-router-dom"
import { getCarBySlug, getFuelsPrices } from "../../services/request"

const Calculator = () => {
  const { carSlug } = useParams()

  const [fuelsPrices, setFuelsPrices] = useState()
  const [thisCar, setThisCar] = useState()
  const [rentCarInfo, setRentCarInfo] = useState({
    rentSince: "",
    rentTo: "",
    location: "",
    yearOfDrivingLicense: new Date().getFullYear(),
    kilometersToDrive: 0,
    rentalPrice: null,
  })

  const [errorMsg, setErrorMsg] = useState("")
  const priceForOneNight = 135

  const handleRentSinceChange = (e) => {
    setRentCarInfo({ ...rentCarInfo, rentSince: e.target.value })
  }

  const handleRentToChange = (e) => {
    setRentCarInfo({ ...rentCarInfo, rentTo: e.target.value })
  }

  const handleLocationChange = (e) => {
    setRentCarInfo({ ...rentCarInfo, location: e.target.value })
  }

  const handleYearOfDrivingLicenseChange = (e) => {
    setRentCarInfo({ ...rentCarInfo, yearOfDrivingLicense: e.target.value })
  }

  const handleKilometersToDriveChange = (e) => {
    setRentCarInfo({ ...rentCarInfo, kilometersToDrive: e.target.value })
  }

  useEffect(() => {
    getCarBySlug(carSlug).then((response) => {
      setThisCar(response)
    })
  }, [carSlug])

  useEffect(() => {
    getFuelsPrices().then((response) => {
      setFuelsPrices(response)
    })
  }, [])

  const handleCalculateCarRentPrice = (e) => {
    e.preventDefault()

    let fuelPrice
    const isBenzyna = thisCar.car_details.fuel === "benzyna"
    const isDiesel = thisCar.car_details.fuel === "diesel"
    if (isBenzyna) {
      fuelPrice = fuelsPrices.benzyna
    } else if (isDiesel) {
      fuelPrice = fuelsPrices.diesel
    } else {
      fuelPrice = fuelsPrices.LPG
    }

    setRentCarInfo({
      ...rentCarInfo,
      rentalPrice: RentCar(
        priceForOneNight,
        rentCarInfo.rentSince,
        rentCarInfo.rentTo,
        rentCarInfo.location,
        rentCarInfo.yearOfDrivingLicense,
        thisCar.car_details.category,
        thisCar.car_details.number_of_available_models,
        rentCarInfo.kilometersToDrive,
        fuelPrice
      ),
    })
  }

  //function calls calculation of rent price
  const RentCar = (
    priceForOneNight,
    rentSince,
    rentTo,
    location,
    yearOfDrivingLicense,
    priceCategory,
    number_of_available_models,
    kilometersToDrive,
    fuelPrice
  ) => {
    const numberOfDays =
      (new Date(rentTo).getTime() - new Date(rentSince).getTime()) / 86400000 // the number of days in milliseconds divided by how many milliseconds 1 day has
    let rentPrice =
      priceForOneNight * numberOfDays * kilometersToDrive * fuelPrice
    switch (priceCategory) {
      case "Basic":
        rentPrice *= 1
        break
      case "Standard":
        rentPrice *= 1.3
        break
      case "Medium":
        rentPrice *= 1.6
        break
      case "Premium":
        rentPrice *= 2
        break
      default:
        return rentPrice
    }

    if (new Date().getFullYear() - yearOfDrivingLicense < 5) {
      rentPrice *= 1.2
    }

    if (number_of_available_models < 3) {
      rentPrice *= 1.15
    }

    if (!rentSince || !rentTo || !location || kilometersToDrive === 0) {
      setErrorMsg(
        "Aby sprawdzić cenę wypożyczenia samochodu musisz wypełnić wszystkie pola!"
      )
      return false
    }

    if (
      new Date().getFullYear() - yearOfDrivingLicense < 3 &&
      priceCategory === "Premium"
    ) {
      setErrorMsg(
        "Aby wypożyczyć ten model samochodu musisz posiadać prawojazdy conajmniej 3 lata!"
      )
      return false
    } else {
      setErrorMsg("")
      return Math.ceil(rentPrice)
    }
  }

  //function generates and returns years for <select>
  const renderSelectOptions = () => {
    const years = []
    for (
      let a = new Date().getFullYear();
      a >= new Date().getFullYear() - 100;
      a--
    ) {
      years.push(a)
    }
    return years
  }

  return (
    <>
      {thisCar ? (
        <main className="calculator">
          <section className="calculator-form">
            <div className="div-form">
              <h1 className="calculator-title">
                Oblicz koszt wyposażenia samochodu
              </h1>
              <form onSubmit={handleCalculateCarRentPrice}>
                <span>Termin wyposażenia samochodu</span>
                <br />
                <label htmlFor="rent-since">Od:</label>
                <input
                  type="date"
                  name="rent-since"
                  id="rent-since"
                  onChange={handleRentSinceChange}
                />
                <label htmlFor="rent-to">do:</label>{" "}
                <input
                  type="date"
                  name="rent-to"
                  id="rent-to"
                  onChange={handleRentToChange}
                />
                <br />
                <label htmlFor="adress">Lokalizacja odbioru samochodu</label>
                <br />
                <input
                  placeholder="Wpisz adres..."
                  type="text"
                  name="adress"
                  id="adress"
                  onChange={handleLocationChange}
                  value={rentCarInfo.location}
                />
                <br />
                <label htmlFor="year-of-get-driving-license">
                  Rok otrzymania prawa jazdy
                </label>
                <br />
                <select
                  name="year-of-get-driving-license"
                  id="year-of-get-driving-license"
                  onChange={handleYearOfDrivingLicenseChange}
                  value={rentCarInfo.yearOfDrivingLicense}
                >
                  {renderSelectOptions().map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <br />
                <label htmlFor="kilometers-to-drive">
                  Szacunkowa ilość kilometrów do przejechania
                </label>
                <br />
                <input
                  className="range-display"
                  type="range"
                  name="kilometers-to-drive"
                  id="kilometers-to-drive"
                  min="0"
                  max="1000"
                  onChange={handleKilometersToDriveChange}
                  value={rentCarInfo.kilometersToDrive}
                />
                <div className="calculator-submit">
                  <button>Oblicz koszt</button>
                </div>
              </form>
            </div>
            <div className="car-display">
              <div className="calculator-car-img">
                <img
                  className="calculator-car-img"
                  src={thisCar.car_details.images[0].src}
                  alt={thisCar.car_details.images[0].alt}
                />
              </div>
              <div className="calculator-car-info">
                <h1 className="calculator-car-model">
                  {thisCar.car_details.brand} {thisCar.car_details.model}{" "}
                  {thisCar.car_details.generate}
                </h1>
                <ul>
                  <li>{thisCar.car_details.year_of_production}</li>
                  <li className="calculator-li">
                    {thisCar.car_details.mileage}
                  </li>
                  <li className="calculator-li">{thisCar.car_details.fuel}</li>
                </ul>
              </div>
            </div>
            {/* {errorMsg && <h2>{errorMsg}</h2>}
            <div className="div-price">
              <h2 className="price-title">Koszt wypożyczenia:</h2>
              <div className="price-display">{rentCarInfo.rentalPrice}</div>
            </div> */}
          </section>
        </main>
      ) : (
        <h2>Pobieranie danych o pojeździe...</h2>
      )}
    </>
  )
}

export default Calculator
