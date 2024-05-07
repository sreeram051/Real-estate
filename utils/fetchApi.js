import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data} = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '30560018e0mshbeb03415eea23eap16d60fjsne6298f33c4af',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
  return data;
}