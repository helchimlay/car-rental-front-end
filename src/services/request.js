import axios from "axios";

const request = async () => {
    
    const response = await axios.get('./jsons/cars_data.json');
    return response;
}
 
export default request;