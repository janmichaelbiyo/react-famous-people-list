import axios from 'axios';

export const fetchPeople = () => {
  // axios GET call
  return axios.get('/api/people')
};

