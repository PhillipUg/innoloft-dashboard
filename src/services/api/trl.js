import api from '../api';

const fetchTRL = () => api.get('/trl/');

export default fetchTRL;
