import axios from "axios";
import _ from "lodash";
import { GET_TOKEN_URL, API_URL, API_URL2 } from "../config";
import { POST } from "../utils/apiRequest";
class Rest {
  constructor() {
    this.endpoint = `${API_URL}`;
    this.token = localStorage.getItem("_token");
  }

  getToken = () => {
    return localStorage.getItem("_token");
  };

  request = (method, endpoint, data) => {
    return new Promise((rs, rj) => {
      let requestOptions = {
        url: `${API_URL2}${endpoint}`,
        method: method,
        headers: {
          Authorization: `Bearer ${this.getToken()}`,
        },
        withCredentials: true,
        data: data,
      };
      axios(requestOptions)
        .then((res) => {
          if (_.get(res, "data.errors")) return rj(res.data.errors);
          return rs(res.data);
        })
        .catch((err) => rj(err));
    });
  };
  requestLogin = (method, data) => {
    return new Promise((rs, rj) => {
      let requestOptions = {
        url: `${GET_TOKEN_URL}`,
        method: method,
        headers: {
          Authorization: `Basic SHJlb19BcHA6MXEydzNFKg==`,
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        withCredentials: true,
        data: data,
      };
      axios(requestOptions)
        .then((res) => {
          if (_.get(res, "data.errors")) return rj(res.error);
          return rs(res.data);
        })
        .catch((err) => rj(err));
    });
  };

  login = async (data) => {
    return this.requestLogin(POST, data)
      .then((res) => {
        console.log(res);
        const { access_token } = res;
        localStorage.setItem("_token", access_token);
        return Promise.resolve(res);
      })
      .catch((err) => Promise.reject(err));
    // const result = await apiRequest(LOGIN_ENTRY_POINT, POST, values);
  };
}

export default new Rest();
