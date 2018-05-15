const express = require("express");
const router = express.Router();
const getRandomUsers = require("../lib/axios");
const _ = require("lodash");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

router.get("/random", (req, res) => {
  const data = getRandomUsers(
    "https://randomuser.me/api/?results=50&gender=female&nat=fr"
  ).then(users => res.send(users));
});

router.get("/city", (req, res) => {
  const data = getRandomUsers(
    "https://randomuser.me/api/?results=50&gender=female&nat=fr"
  ).then(users => {
    const g = _.groupBy(users, el => el.location.city);
    console.log(g);
    res.send(g);
  });
});

// router.get("/random", (req, res) => {
//   const users = getRandomUsers(
//     "https://randomuser.me/api/?results=500&gender=female&nat=fr"
//   );
//   users.then(resultats => res.send(resultats));
// });

module.exports = router;
