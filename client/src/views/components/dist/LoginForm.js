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
//basic workflow imports:
var react_1 = require("react");
var axios_1 = require("axios");
var react_router_dom_1 = require("react-router-dom");
//styling imports:
//mui ->
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var loginButtonStyle = styles_1.styled(material_1.Button)(function (_a) {
    var theme = _a.theme;
    return ({});
});
function LoginForm(props) {
    var theme = props.theme, lightTheme = props.lightTheme, darkTheme = props.darkTheme, loginWarning = props.loginWarning, setLoginWarning = props.setLoginWarning, setUsersPersonalInfo = props.setUsersPersonalInfo, setLoggedIn = props.setLoggedIn, setUserId = props.setUserId, loggedIn = props.loggedIn, userId = props.userId;
    var navigate = react_router_dom_1.useNavigate();
    if (theme) {
        var _a = darkTheme.palette, primary = _a.primary, secondary = _a.secondary, background = _a.background, divider = _a.divider;
    }
    else {
        var _b = lightTheme.palette, primary = _b.primary, secondary = _b.secondary, background = _b.background, divider = _b.divider;
    }
    function checkLogin() {
        return __awaiter(this, void 0, void 0, function () {
            var data, currentUser, ok, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get('/api/users/is-user-logged-in')];
                    case 1:
                        data = (_a.sent()).data;
                        currentUser = data.currentUser, ok = data.ok;
                        if (ok) {
                            setUsersPersonalInfo(currentUser);
                            setLoggedIn(true);
                            setUserId(currentUser._id);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function handleLogin(ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, password, userData, data, loginData, message, currentUsersPersonalInfo, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ev.preventDefault();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = ev.target, username = _a.username, password = _a.password;
                        username = username.value;
                        password = password.value;
                        if (!username || !password)
                            throw new Error("no username or password provided at handleLogin -client side");
                        userData = {
                            username: username,
                            password: password
                        };
                        return [4 /*yield*/, axios_1["default"].post('/api/users/login-user', userData)];
                    case 2:
                        data = (_b.sent()).data;
                        loginData = data.loginData;
                        if (!loginData.result) {
                            message = loginData.message;
                            setLoginWarning("" + message);
                            setTimeout(function () {
                                setLoginWarning('');
                            }, 5000);
                        }
                        else {
                            currentUsersPersonalInfo = loginData.verifiedUserPersonalInfo;
                            setUsersPersonalInfo(currentUsersPersonalInfo);
                            setLoggedIn(true);
                            setUserId(currentUsersPersonalInfo.id);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        if (loggedIn) {
            navigate('/HomePage');
        }
        return function () {
            checkLogin();
        };
    }, [userId]);
    return (React.createElement("form", { className: 'login-form', onSubmit: function (ev) { return handleLogin(ev); } },
        React.createElement(material_1.FormGroup, { sx: { gap: '12px' } },
            React.createElement(material_1.TextField
            // margin="dense"
            , { 
                // margin="dense"
                name: 'username', id: 'username', placeholder: 'Email address' }),
            React.createElement(material_1.TextField
            // margin="dense"
            , { 
                // margin="dense"
                type: 'password', name: 'password', id: 'password', placeholder: 'Password' }),
            React.createElement(material_1.Button, { type: 'submit', color: 'primary', style: { fontSize: '20px', lineHeight: '42px' }, variant: 'contained' },
                React.createElement(material_1.Typography, { color: primary.contrastText, style: {}, variant: 'h6' }, "Log In")),
            React.createElement("a", { href: '/' }, "Forgotten password?"),
            loginWarning ? (React.createElement(material_1.Typography, { variant: 'h6', fontSize: '\n          clamp(1rem, 1.2vw, 2rem); \n          ' }, loginWarning)) : null)));
}
exports["default"] = LoginForm;
