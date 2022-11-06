import axios from "axios";

const baseUrl = "https://bayut.p.rapidapi.com";

const fetchApi = async (url) => {
  const res = await axios.get(url, {
    headers: {
      "RapidAPI-Key": "ef751db8e1msh448a1b861503cccp1a1ec2jsncc78a5610760",
      "RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  const data = res.data;

  return data;
};
export { fetchApi, baseUrl };
