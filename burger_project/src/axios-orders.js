import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-cbf0c.firebaseio.com/'
});

export default instance;