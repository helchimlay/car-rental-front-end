import React from 'react';
import './CarsList.css';

const CarsList = (props) => {

    const {cars_data} = props.carslist

    const ListOfCars = cars_data.map((item,index) => {
        
        const car_description = `${(cars_data[index].car_details.description).substring(0, 200)}...`

        return (
            <section key={cars_data[index].car_details.id} className="single-car-card">

                <div className='photo-of-single-car'>
                    <img src={cars_data[index].car_details.images[0].src} alt={cars_data[index].car_details.images[1].alt} />
                </div>

                <div className="summary-of-single-car">
                    <h2>{cars_data[index].car_details.brand} {cars_data[index].car_details.model} {cars_data[index].car_details.generate}</h2>
                    <span>
                        <ul>
                            <li>{cars_data[index].car_details.year_of_production}</li>
                            <li className="details-list">{cars_data[index].car_details.mileage}</li>
                            <li className="details-list">{cars_data[index].car_details.fuel}</li>
                        </ul>
                    </span>
                    <p>
                        {car_description}
                    </p>
                </div>
                <div className="price-of-single-car">
                    <h3>
                        {`${cars_data[index].car_details.price} PLN`}
                    </h3>
                </div>

            </section>
        )
    })

    return ( 
        <main className="cars-list">
            <section className="filter-cars">
                <h1>Witamy w serwisie CarRental</h1>
                <h3>Zajmujemy się wypożyczaniem samochodów</h3>
            </section>
            {ListOfCars}
        </main>
     );
}
 
export default CarsList;