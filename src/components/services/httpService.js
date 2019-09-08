import axios from "axios";
import { toast } from "react-toastify";
axios.interceptors.response.use(null, error => {
  // console.log("inter response error", error);
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (expectedError) {
    return Promise.reject(error);
  } else {
    console.log("logging error", error);
    // toast.error("An Expected");
    toast("خطا در برقراری ارتباط با سرور");
  }
});
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
