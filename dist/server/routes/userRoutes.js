"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var userCont_1 = require("../controller/userCont");
router.post('/add-new-user', userCont_1.addUser)
.post('/login-user', userCont_1.loginUser)
.post('/search-users', userCont_1.searchUsers)
.get('/is-user-logged-in', userCont_1.isUserLoggedIn);
exports["default"] = router;
