import { BASE_URL } from "./contranst";
import axios from "axios";
import toast from "react-hot-toast";

const client = axios.create({ baseURL: `${BASE_URL}/` });

export const request = ({ ...options }) => {
  //   client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  //     "auth"
  //   )}`;

  const onSuccess = (response: any) => {
    return response;
  };

  const onError = (error: any) => {
    let { message } = error?.response?.data;
    toast.error(message || "Something Wrong");

    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
