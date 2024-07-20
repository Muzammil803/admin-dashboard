import * as url from "../constant/Endpoints";
import axios from "axios";
import { toast } from "react-toastify";
import { objectToQueryString } from "helper/urlquerystring";
import { AES, enc } from "crypto-js";

import "react-toastify/dist/ReactToastify.css"; // Make sure you're importing the CSS file as well

import { GetAllAmenities as getAllAmenitiesAgain } from "store/action/index";
import { GetAllFlatSize as getAllFlatSizeAgain } from "store/action/index";
import { GetAllFlat as getAllFlatAgain } from "store/action/index";
import { GetAllTaxes as getAllTaxesAgain } from "store/action/index";
import { dispatch } from "store/index";
const CryptoJS = require("crypto-js");

export default {
  // ========================================= property managment ===================================

  fetchLoginUser: (payload, cb) => {
    if (payload.email === "" || payload.password === "") {
      payload.setLoading(false);

      return false;
    }

    const data = {
      email: payload.email,
      password: payload.password,
    };

    PostData(url.base_url + url.logInApii, data)
      .then((res) => {
        console.log(res)
        if (res.data && res.data?.data && (res.data.data?.user_type === "admin")) {
          const encryptedToken = CryptoJS.AES.encrypt(
            res.data.data.token,
            url.encryptionSecret
          ).toString();

          const encryptedLoginData = CryptoJS.AES.encrypt(
            JSON.stringify(res?.data?.data),
            url.encryptionSecret
          ).toString();
          localStorage.setItem("token", encryptedToken);
          localStorage.setItem("Id", res.data.data.id);
          // localStorage.setItem("LoginData", JSON.stringify(res?.data?.data));
          localStorage.setItem("data", encryptedLoginData);

          window.location.reload();
          window.location.href = "/dashboard";

          toast.success(res?.data?.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            bodyClassName: "toastStyle",
          });
          payload.setLoading(false);

          cb(res.data);
        } else {
          throw new Error('Unauthenticated.')
        }
      })
      .catch((err) => {
        if (err?.message === "Unauthenticated.") {
          localStorage.clear();
          window.location = "/";
          window.location.reload();
        }
        payload.setLoading(false);
        cb(err?.response?.data?.success);
        toast.error(err?.response?.data?.data?.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          bodyClassName: "toastStyle",
        });
      });
  },

  // <----------------------------Dashboard--------------------------->

  getAllDashboard: (payload, cb) => {
    payload?.payload.setLoading(true);
    getData(url.base_url + url.getAllDashboard)
      .then((res) => {
        payload?.payload.setLoading(false);
        cb(res.data);
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Unauthenticated.") {
          localStorage.clear();
          window.location = "/";
          window.location.reload();
        }
        payload?.payload.setLoading(false);

        cb(err?.response?.status);
      });
  },

  // ----------------------------------------------------------------------------

  // <----------------- USERS  --------------------->

  CreateAddCurrency: (payload, cb) => {
    payload?.payload.setLoading(true);

    PostRegisterData(url.base_url + url.addCurrency, payload?.payload.payload)
      .then((res) => {
        toast.success("Currency Added Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          bodyClassName: "toastStyle",
        });
        payload?.payload.setLoading(false);
        cb(res.data);
        window.location = "/currency/all-currency";
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Unauthenticated.") {
          localStorage.clear();
          window.location = "/";
          window.location.reload();
        }
        payload?.payload.setLoading(false);

        cb(err?.response?.status);
      });
  },
  EditUpdateCurrency: (payload, cb) => {
    console.log('payload',payload);
    payload?.payload.setLoading(true);
    PostRegisterData(url.base_url + url.updateCurrency, {
      currency: payload?.payload.currency,
          short_code: payload?.payload.short_code,
          flag: payload?.payload.image,
          buy: payload?.payload.buy,
          sell: payload?.payload.sell,
    })
      .then((res) => {
        toast.success("Currency Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          bodyClassName: "toastStyle",
        });
        payload?.payload.setLoading(false);
        cb(res.data);
        window.location = "/currency/all-currency";
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Unauthenticated.") {
          localStorage.clear();
          window.location = "/";
          window.location.reload();
        }
        payload?.payload.setLoading(false);

        cb(err?.response?.status);
      });
  },

  GetAllCurrency: (payload, cb) => {
    // payload?.payload.setLoading(true);
    getData(url.base_url + url.getAllCurrency)
      .then((res) => {
        // dispatch(getAllTaxesAgain({ setLoading: payload?.payload.setLoading }))
        payload?.payload.setLoading(false);
        cb(res.data);
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Unauthenticated.") {
          localStorage.clear();
          window.location = "/";
          window.location.reload();
        }
        payload?.payload.setLoading(false);

        cb(err?.response?.status);
      });
  },
  // <----------------- USERS  --------------------->

  FetchAllUsersView: (payload, cb) => {
    getData(url.base_url + url.allUsersApi + "?page=" + payload)
      .then((res) => {
        cb(res.data);
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Unauthenticated.") {
          localStorage.clear();
          window.location = "/";
          window.location.reload();
        }
        cb(err?.response?.status);
      });
  },

  FetchUsersStatusUpdateView: (payload, cb) => {
    getData(url.base_url + url.usersStatusUpdateApi + payload)
      .then((res) => {
        cb(res.data);
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Unauthenticated.") {
          localStorage.clear();
          window.location = "/";
          window.location.reload();
        }
        cb(err?.response?.status);
      });
  },

}

function PostData(URL, data) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(URL, data, config);
}
export function JsonPostData(URL, data) {
  let getNewTokenn = localStorage.getItem("token");
  let NewToekn = "";
  if (getNewTokenn) {
    NewToekn = CryptoJS.AES.decrypt(
      getNewTokenn,
      url.encryptionSecret
    ).toString(CryptoJS.enc.Utf8);
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getNewTokenn}`,
    },
  };
  return axios.post(URL, data, config);
}
function PostRegisterData(URL, data) {
  let getNewTokenn = localStorage.getItem("token");
  let NewToekn = "";
  if (getNewTokenn) {
    NewToekn = CryptoJS.AES.decrypt(
      getNewTokenn,
      url.encryptionSecret
    ).toString(CryptoJS.enc.Utf8);
  }
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${NewToekn}`,
      // "Access-Control-Allow-Origin": "*"
    },
  };
  return axios.post(URL, data, config);
}

// axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
function getData(URL) {
  let getNewTokenn = localStorage.getItem("token");
  let NewToekn = "";
  if (getNewTokenn) {
    NewToekn = CryptoJS.AES.decrypt(
      getNewTokenn,
      url.encryptionSecret
    ).toString(CryptoJS.enc.Utf8);
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${NewToekn}`,
    },
  };
  return axios.get(URL, config);
}
