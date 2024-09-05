// src/api.js
import axios from 'axios';

const API_KEY = 'uVktvfZdjycLoNDU8HGlu633wvCVGRKJk7kfxqXrFtBwOpxGVAYNQsbg'; // Replace with your Pexels API key
const BASE_URL = 'https://api.pexels.com/v1/';

export const fetchImages = async (query = 'nature', perPage = 20) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        query,
        per_page: perPage,
        page: Math.floor(Math.random() * 100) + 1, // Random page for variety
      },
      headers: {
        Authorization: API_KEY,
      },
    });
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
