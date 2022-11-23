import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api-node-postgre.herokuapp.com/",
});

export default instance;
