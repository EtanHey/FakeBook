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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//basic workflow imports:
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
//styling imports:
//mui ->
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const loginButtonStyle = (0, styles_1.styled)(material_1.Button)(({ theme }) => ({}));
function LoginForm(props) {
    const { theme, lightTheme, darkTheme, loginWarning, setLoginWarning, setUsersPersonalInfo, setLoggedIn, setUserId, loggedIn, userId, } = props;
    const navigate = (0, react_router_dom_1.useNavigate)();
    if (theme) {
        var { primary, secondary, background, divider } = darkTheme.palette;
    }
    else {
        var { primary, secondary, background, divider } = lightTheme.palette;
    }
    function handleLogin(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            ev.preventDefault();
            try {
                let { username, password } = ev.target;
                username = username.value;
                password = password.value;
                if (!username || !password)
                    throw new Error(`no username or password provided at handleLogin -client side`);
                const userData = {
                    username,
                    password,
                };
                console.log(userData);
                const { data } = yield axios_1.default.post("/api/users/login-user", userData);
                const { loginData } = data;
                if (!loginData.result) {
                    const message = loginData.message;
                    setLoginWarning(`${message}`);
                    setTimeout(() => {
                        setLoginWarning("");
                    }, 5000);
                }
                else {
                    const { result } = loginData;
                    const currentUsersPersonalInfo = loginData.verifiedUserPersonalInfo;
                    setUsersPersonalInfo(currentUsersPersonalInfo);
                    setLoggedIn(true);
                    setUserId(result._id);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    (0, react_1.useEffect)(() => {
        if (loggedIn) {
            navigate("/HomePage");
        }
    }, [userId]);
    return (<form className="login-form" onSubmit={(ev) => handleLogin(ev)}>
      {/* <FormControl> */}
      <material_1.FormGroup sx={{ gap: "12px" }}>
        <material_1.TextField 
    // margin="dense"
    name="username" id="username" placeholder="Email address"/>
        <material_1.TextField 
    // margin="dense"
    type="password" name="password" id="password" placeholder="Password"/>
        <material_1.Button type="submit" color={"primary"} style={{ fontSize: "20px", lineHeight: "42px" }} variant="contained">
          <material_1.Typography color={primary.contrastText} style={{}} variant="h6">Log In</material_1.Typography>
        </material_1.Button>
        <a href="/">
          Forgotten password?
        </a>
        {loginWarning ? (<material_1.Typography variant="h6" fontSize="-10px">{loginWarning}</material_1.Typography>) : null}
      </material_1.FormGroup>
      {/* </FormControl> */}
    </form>);
}
exports.default = LoginForm;
//# sourceMappingURL=LoginForm.js.map