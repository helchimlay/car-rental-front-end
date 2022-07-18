import React from "react"
import "./Summary.css"

import { Pie } from "react-chartjs-2"

const Summary = (props) => {
  const { priceBrutto, priceNetto, numberOfRentDays, deliveryFee, fuelPrice } =
    props.summary
  const { kilometersToDrive, future_location } = props.rentInfo
  const priceForOneNight = props.priceForOneNight
  const presentLocation = props.presentLocation

  return (
    <section className="calculator-summary">
      {/* Koszty paliwa   |   Podatek VAT   |    Cena wypożyczenia samochodu   |   Koszt dostarczenia samochodu*/}
      <div className="calculator-summary-graph">
        {/* <Pie
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
              // {
              //   label: 'Quantity',
              //   data: [47, 52, 67, 58, 9, 50],
              //   backgroundColor: 'orange',
              //   borderColor: 'red',
              // },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        /> */}
      </div>
      <div className="calculator-summary-info">
        <p className="price-brutto">
          <b>Wyliczona cena brutto:</b> {priceBrutto} zł
        </p>
        <p>
          <b>Wyliczona cena netto:</b> {priceNetto} zł
        </p>
        <p>
          <b>Ilość dni wypożyczenia:</b> {numberOfRentDays}
        </p>
        <p>
          <b>Aktualna cena paliwa:</b> {fuelPrice} zł/litr
        </p>
        <p>
          <b>Bazowa cena wypożyczenia:</b> {priceForOneNight} zł
        </p>
        <p>
          <b>Liczba kilometrów do przejechania:</b> {kilometersToDrive} km
        </p>
        <p>
          <b>Koszt dostarczenia pojazdu:</b> {deliveryFee} zł
        </p>
      </div>
    </section>
  )
}

export default Summary
