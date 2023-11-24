import axios from "axios";

const BASE_URL="https://youtube-v31.p.rapidapi.com";
const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key':'5deb65f468msh9c464fa14c3bb9ep15e37bjsn45d2cdd1cbea',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };