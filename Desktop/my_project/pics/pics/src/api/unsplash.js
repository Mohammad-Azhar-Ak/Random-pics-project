import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID uHa9wZbTo4UwXZ2gfFm5FISuEj4HaC6S6vwclrGGOAE' 
    }
});