"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const framer_motion_1 = require("framer-motion");
// web logo import:
const Facebook_Logoword_svg_1 = require("../styles/Facebook-Logoword.svg");
//local components imports:
const LoginForm_1 = __importDefault(require("./LoginForm"));
const RegisterModal_1 = __importDefault(require("./RegisterModal"));
const Footer_1 = __importDefault(require("./Footer"));
require("../styles/global.scss");
function LoginPage(props) {
    const { theme, lightTheme, darkTheme, loginWarning, loggedIn, setLoginWarning, setUsersPersonalInfo, setLoggedIn, setUserId, registerWarning, setRegisterWarning, userId, } = props;
    if (theme) {
        var { primary, secondary, background, divider } = lightTheme.palette;
    }
    else {
        var { primary, secondary, background, divider } = darkTheme.palette;
    }
    return (<styles_1.ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <framer_motion_1.motion.div className="App" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}>
        <material_1.CssBaseline />
        <div className="wrapper" style={{ background: background }}>
          <div className="wrapper_login">
            <div className="wrapper_login-components">
              <div className="wrapper_login-description">
                <div className="wrapper_login-description-logo">
                  <Facebook_Logoword_svg_1.ReactComponent />
                </div>
                <material_1.Typography variant="h5">
                  Facebook helps you connect and share with the people in your
                  life.
                </material_1.Typography>
              </div>
              <div className="wrapper_loginRegister-bunch">
                <material_1.Card>
                  <material_1.CardHeader sx={{ m: "0 .5em", p: " 1.5em 1em 0 1em" }} action={<LoginForm_1.default userId={userId} loggedIn={loggedIn} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} loginWarning={loginWarning} setLoginWarning={setLoginWarning} setUsersPersonalInfo={setUsersPersonalInfo} setLoggedIn={setLoggedIn} setUserId={setUserId}/>}></material_1.CardHeader>
                  <div className="login-form_buffer">
                    <p>‎</p>
                  </div>
                  <material_1.CardContent sx={{ m: 0, p: 0 }}>
                    <RegisterModal_1.default theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} registerWarning={registerWarning} setRegisterWarning={setRegisterWarning}/>
                  </material_1.CardContent>
                </material_1.Card>
                <h4>
                  <a href="">Create a Page</a> for a celebrity, brand or
                  business.
                </h4>
              </div>
            </div>
          </div>
          <div className="wrapper_footer">
            <Footer_1.default />
          </div>
        </div>
      </framer_motion_1.motion.div>
    </styles_1.ThemeProvider>);
}
exports.default = LoginPage;
//# sourceMappingURL=LoginPage.js.map