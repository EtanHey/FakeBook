"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.isUserLoggedIn = exports.searchUsers = exports.loginUser = exports.addUser = void 0;
var userModel_1 = require("../model/userModel");
var jwt_simple_1 = require("jwt-simple");
var secret = process.env.JWT_SECRET;
exports.addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, email, password, gender, birthDate, anEmail, registerData, newUser, result, registerData, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, gender = _a.gender, birthDate = _a.birthDate;
                if (!firstName || !lastName)
                    throw new Error('something missing on addUser - server side');
                return [4 /*yield*/, userModel_1["default"].findOne({ email: email }).collation({
                        locale: 'en_US',
                        strength: 1
                    })];
            case 1:
                anEmail = _b.sent();
                if (anEmail) {
                    registerData = {
                        message: anEmail.email + " is already registered under " + anEmail.username
                    };
                    res.send({ registerData: registerData });
                    return [2 /*return*/];
                }
                if (!!anEmail) return [3 /*break*/, 3];
                newUser = new userModel_1["default"]({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    gender: gender,
                    birthDate: birthDate
                });
                return [4 /*yield*/, newUser.save()];
            case 2:
                result = _b.sent();
                registerData = {
                    result: result,
                    message: email + " is now registered, you can proceed to login"
                };
                res.send({ registerData: registerData });
                _b.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.loginUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userData, username, password, emailLookup, loginData, email, verified, loginData, verifiedUserPersonalInfo, result, loginData, payload, encryptedInfo, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                userData = req.body;
                username = userData.username, password = userData.password;
                return [4 /*yield*/, userModel_1["default"].findOne({ email: username }).collation({
                        locale: 'en_US',
                        strength: 2
                    })];
            case 1:
                emailLookup = _a.sent();
                if (!emailLookup) {
                    loginData = {
                        message: "found no user with email " + username
                    };
                    res.send({ loginData: loginData });
                }
                if (!emailLookup) return [3 /*break*/, 3];
                email = emailLookup.email;
                return [4 /*yield*/, userModel_1["default"].findOne({ email: email, password: password })];
            case 2:
                verified = _a.sent();
                if (!verified) {
                    loginData = {
                        message: "Welcome back " + emailLookup.email + ", thats not the password"
                    };
                    res.send({ loginData: loginData });
                }
                if (verified) {
                    verifiedUserPersonalInfo = {
                        firstName: verified.firstName,
                        lastName: verified.lastName,
                        id: verified._id,
                        ok: true
                    };
                    result = verified;
                    loginData = {
                        result: result,
                        verifiedUserPersonalInfo: verifiedUserPersonalInfo,
                        message: 'welcome back, get out of this modal and wander around your recent posts'
                    };
                    payload = { loginData: loginData };
                    encryptedInfo = jwt_simple_1["default"].encode(payload, secret);
                    res.cookie('currentUserInfo', encryptedInfo, {});
                    res.send({ loginData: loginData });
                    return [2 /*return*/];
                }
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.searchUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchTerm, userSearchList, userSearchListIds, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                searchTerm = req.body.searchTerm;
                return [4 /*yield*/, userModel_1["default"].find({ firstName: searchTerm } || { lastName: searchTerm } || {
                        email: searchTerm
                    }).collation({
                        locale: 'en_US',
                        strength: 1
                    })];
            case 1:
                userSearchList = _a.sent();
                userSearchListIds = userSearchList.map(function (user) {
                    return user;
                });
                res.send(userSearchListIds);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log(error_3.message);
                res.send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.isUserLoggedIn = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cookie, currentUserInfo, currentUser, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                cookie = req.cookies.currentUserInfo;
                if (!cookie) {
                    res.send({ ok: false });
                    return [2 /*return*/];
                }
                currentUserInfo = jwt_simple_1["default"].decode(cookie, secret).loginData.verifiedUserPersonalInfo;
                return [4 /*yield*/, userModel_1["default"].findById(currentUserInfo.id, { password: 0 })];
            case 1:
                currentUser = _a.sent();
                if (!currentUser) {
                    res.send({ ok: false, message: 'no user was found using your cookies' });
                    return [2 /*return*/];
                }
                res.send({ currentUser: currentUser, ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.log(error_4.message);
                res.send({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
