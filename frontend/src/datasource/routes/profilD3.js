import axios from 'axios';
import { BASE_URL, PATHS } from '../consts';

const fetchAll = async () => {
  try {
    const result = await axios.get(`${BASE_URL}${PATHS.PROFIL_D3_PATH}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

const fetchOne = async (id) => {
  try {
    const result = await axios.get(`${BASE_URL}${PATHS.PROFIL_D3_PATH}/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

const count = async () => {
  try {
    const result = await axios.get(`${BASE_URL}${PATHS.PROFIL_D3_PATH}/count`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export {fetchAll, fetchOne, count}