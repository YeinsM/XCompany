import axios from "axios";

const url = "https://localhost:7097/api";

const getAll = async (state, name) => {
  const request = await axios.get(`${url}/${name}`);
  state(request.data);
};

const getById = async (id, name) => {
  await axios
    .get(`${url}/${name}/${id}`)
    .then((response) => response.data)
    .catch("problems");
};

const post = async (name, data) => {
  await axios.post(`${url}/${name}`, data).then((response) => {
    console.log(response.data);
    console.log(response.status);
  });
};

const put = async (id, data) => {
  await axios.put(`${url}/${id}`, data).then((response) => response.status);
};

export { getAll, getById, post, put };
