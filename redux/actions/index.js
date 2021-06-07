import { fetchData } from '../../api';
import { serializeProduct } from '../../api/serializers';
import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from './types';


export const fetchDataAction = (query) =>
  (dispatch) => {
    fetchData(query)
      .then((response) => {
        const payload = {
          items: response?.results?.slice(0, 4)?.map((item) => serializeProduct(item)),
          categories: response?.filters[0]?.values[0]?.path_from_root
        }
        
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload
        })
      })
      .catch((error) => {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: error.message
        })
      });
  }