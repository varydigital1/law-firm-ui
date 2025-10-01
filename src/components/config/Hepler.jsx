import axios from "axios";
export const config = {
  base_apiUrl: "http://localhost:9090/",//production
  base_apiUrl: "http://10.30.0.160:9090/",
//   base_apiUrl: "http://192.168.100.2:9090/",
//   base_apiUrl: "http://localhost:8080/api",//development
};

export const fetchData = (url,data,method="GET") => {
    return axios({
        url: config.base_apiUrl + url,
        method: method,
        data: data
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.error(err);
        return err;
    });
};