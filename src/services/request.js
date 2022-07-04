import axios from "axios";

const request = async () => {
    
    const response = await axios.get('./jsons/cars_data.json?CarBrandId=11&PriceTo=5000&CarFuelType=BenzynaLPG');
    return response;
}

const getCarBySlug = async (slug) => {
    
    const response = await axios.get('./jsons/cars_data.json?CarBrandId=11&PriceTo=5000&CarFuelType=BenzynaLPG');
    return response;
    const {car} = props;
    const {carId} = useParams();
    const thisProduct = car.cars_data[carId];
}
 
export default request;