const axios = require("axios");

const getRandomUsers = url => {
  return axios
    .get(url)
    .then(res => res.data.results)
    .catch(err => console.log(err));
};

module.exports = getRandomUsers;
