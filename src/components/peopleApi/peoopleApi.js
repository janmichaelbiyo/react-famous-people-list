import axios from 'axios';

export const getPeople = () => {
  // axios GET call
  return axios.get('/api/people')
};

export const postPeople = (peopleData) => {
  return axios.post('/api/people', peopleData);
};
