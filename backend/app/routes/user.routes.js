const { Router } = require("express");
const router = Router();

const { getUsers, createUser, getUserById } = require("../controllers/user.controller");

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post('/users', createUser);


module.exports = router;
