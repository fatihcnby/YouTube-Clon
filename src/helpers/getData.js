import axios from "axios";

const options = {
  params: { geo: "TR", lang: "tr" },
  headers: {
    "X-RapidAPI-Key": "8f2338731dmshad5eab8466f1c23p1b528fjsn439012045b95",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

export const getData = async (endpoint) => {
  try {
    const res = await axios.get(endpoint, options);
    return res.data;
  } catch (err) {
    console.log("Verileri çekerken hata oluştu", err);
  }
};
