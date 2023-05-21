import useSWR from "swr";
import { URL } from "../api/api";
import { API_KEY } from "../api/api_key";

export const useApiRequest = (endpoint, page) => {
    const url = endpoint && URL + endpoint + page + API_KEY;
    const {data, error} = useSWR(url);

    return {data, error};
};