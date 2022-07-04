import React from 'react';

const CarsList = (props) => {

    const {cars_data} = props.carslist
    console.log(cars_data[0].car_details.brand)

    return ( 
        <section>
            <div>dads</div>
        </section>
     );
}
 
export default CarsList;