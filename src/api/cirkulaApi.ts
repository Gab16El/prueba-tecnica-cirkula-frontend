// src/api/cirkulaApi.ts
import axios from 'axios';

const cirkulaApi = axios.create({
    baseURL: 'https://prueba-tecnica-cirkula-backend-production.up.railway.app/api'
});

export default cirkulaApi;