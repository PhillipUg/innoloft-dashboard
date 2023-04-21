import api from '../api';

const fetchConfiguration = (appId) => api.get(`/configuration/${appId}/`);

export default fetchConfiguration;
