import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST}/api/v1`,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});

const requestHandler = (request) => {
  let token = Cookies.get("token");

  if (token !== undefined) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
};

const responseHandler = (response) => {
  return response;
};

const expiredTokenHandler = () => {
  localStorage.clear();
  Cookies.remove("token");
  window.location.href = "/login";
};

const errorHandler = (error) => {
  if (error.response && error.response.status === 401) {
    expiredTokenHandler();
  } else if (error.code === "ERR_NETWORK") {
    window.history.pushState({}, "Redirect Network Error", "/login");
    console.log(error);
    if (error.response?.status === 401) {
      expiredTokenHandler();
    }
  }
  return error;
};

request.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

request.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

// Fungsi untuk mengatur Content-Type secara dinamis
const getHeaders = (contentType, customHeaders = {}) => {
  const headers = { ...customHeaders };

  if (contentType === "multipart/form-data") {
    // Jika form-data, biarkan axios yang mengatur Content-Type
    delete headers["Content-Type"];
  } else if (contentType === "application/json") {
    headers["Content-Type"] = "application/json";
  }

  return headers;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: (url, params = null, headers = {}) =>
    request({ method: "get", url, params, headers }),

  post: (url, data, contentType = "application/json", headers = {}) =>
    request({
      method: "post",
      url,
      data,
      headers: getHeaders(contentType, headers),
    }),

  put: (url, data, contentType = "application/json", headers = {}) =>
    request({
      method: "put",
      url,
      data,
      headers: getHeaders(contentType, headers),
    }),

  patch: (url, data, contentType = "application/json", headers = {}) =>
    request({
      method: "patch",
      url,
      data,
      headers: getHeaders(contentType, headers),
    }),

  delete: (url, data, contentType = "application/json", headers = {}) =>
    request({
      method: "delete",
      url,
      data,
      headers: getHeaders(contentType, headers),
    }),

  setToken: (token) => {
    if (token) {
      request.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete request.defaults.headers.common.Authorization;
    }
  },
};