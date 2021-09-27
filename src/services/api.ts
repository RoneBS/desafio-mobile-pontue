import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://desafio.pontue.com.br/'
});
