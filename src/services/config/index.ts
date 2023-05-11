import axios from "axios";
import { ApiData } from "@/types";

export const fetchApi = async (url: string) => {

    const Api = axios.create({
        baseURL: 'https://bayut.p.rapidapi.com'
    })

    const options = {
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };

    const { data } = await Api(url, options);

    return data as ApiData;
}

