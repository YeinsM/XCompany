import axios from "axios";

const url = "https://localhost:7097/api";

const getAll = async (state, name) => {
  const request = await axios.get(`${url}/${name}`);
  state(request.data);
};

export { getAll };
