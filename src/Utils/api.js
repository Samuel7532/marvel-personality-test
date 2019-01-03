import axios from "axios";
const BASEURL = "https://gateway.marvel.com:443/v1/public/characters?name=";
const APIKEY = "96592ec9dedd9fb3f54343039b31caf7";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};