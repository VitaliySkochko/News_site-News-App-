import { API_KEY } from './key';
import axios from 'axios';

export const getArticlesByWord = async (word) => { //це асинхронна функція, яка отримує параметр word (пошукове слово).
     const data = await axios.get(`https://content.guardianapis.com/search?q=${word}&api-key=${API_KEY}`, {withCredentials: false});
     return data;
}

export const getArticlesByTeg = async (tag, page='1') => { // асинхронна функція яка приймає 2 параметри
     const data = await axios.get(`https://content.guardianapis.com/search?tag=${tag}&page=${page}&api-key=${API_KEY}`, {withCredentials: false});
     return data;
}