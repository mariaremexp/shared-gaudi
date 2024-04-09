import axios from 'axios'

const { API_BASE_URL } = process.env // API URL
const apiService = axios.create({
    baseURL: API_BASE_URL,
  });

export const createThread = async () => {
    try {
      const response = await apiService.post('threads');
      return response.data;
    } catch (error) {
      throw error;
    }
};

/*
export const deleteThread = async () => {
    try {
      const response = await apiService.delete('threads');
      return response.data;
    } catch (error) {
      throw error;
    }
};
*/

export const createMessage = async (dataMessage) => {
    try {
      const response = await apiService.post('message', dataMessage);
      return response.data;
    } catch (error) {
      throw error;
    }
};

export const convertTextToAudio = async (textToAudio) => {
  try {
    const response = await apiService.post('voice', textToAudio);
    // para acceder a los headers pasamos todo, no solo 'data'
    return response;
  } catch (error) {
    error
  }
}