import React from "react"
import "./Summary.css"

const Summary = () => {
  return (
    <section className="calculator-summary">
      <div className="calculator-summary-graph"></div>
      <div className="calculator-summary-info">
        <p className="price-brutto">
          <b>Wyliczona cena brutto:</b>
        </p>
        <p>
          <b>Wyliczona cena netto:</b>123
        </p>
        <p>
          <b>Ilość dni wypożyczenia:</b>123
        </p>
        <p>
          <b>Aktualna cena paliwa:</b>123
        </p>
        <p>
          <b>Bazowa cena wypożyczenia:</b>123
        </p>
        <p>
          <b>Liczba kilometrów do przejechania:</b>123
        </p>
        <p>
          <b>Obecna lokalizacja pojazdu:</b>123
        </p>
        <p>
          <b>Miejsce dostarczenia pojazdu:</b>123
        </p>
        <p>
          <b>Koszt dostarczenia pojazdu:</b>123
        </p>
      </div>
    </section>
  )
}

export default Summary
