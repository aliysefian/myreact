import axios from "axios";
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
    alert("An Expected");
  }
});
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
