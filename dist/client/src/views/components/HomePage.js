"use strict";
//Personal workflow imports:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import 'dotenv/config'
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const framer_motion_1 = require("framer-motion");
//styling imports:
//mui ->
const material_1 = require("@mui/material");
//local components imports:
const Feed_1 = __importDefault(require("./Feed"));
require("../styles/global.scss");
function HomePage(props) {
    const { setTheme, theme, lightTheme, darkTheme, registerWarning, loginWarning, loggedIn, setLoginWarning, setRegisterWarning, setLoggedIn, setUsersPersonalInfo, setUserId, userId, usersPersonalInfo, setPostsList, postsList, } = props;
    const [hasLoaded, setHasLoaded] = (0, react_1.useState)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    if (theme) {
        var { primary, secondary, background } = lightTheme.palette;
    }
    else {
        var { primary, secondary, background } = darkTheme.palette;
    }
    (0, react_1.useEffect)(() => {
        if (!loggedIn) {
            navigate("/");
        }
    }, []);
    (0, react_1.useEffect)(() => {
        console.log(postsList);
    });
    const appStyling = {
        background: background.default,
        color: primary.contrastText,
    };
    return (<div>
      {/* <Routes>
          <Route path="/">
          <LoginPage handleLogin={handleLogin} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} loginWarning={loginWarning}/>
          </Route>
        </Routes> */}
      <framer_motion_1.motion.div style={appStyling} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="wrapper">
        <material_1.CssBaseline />
        {/* <p>{theme ? "light" : "dark"}</p> */}
        {/* {usersPersonalInfo?<p>{firstName}</p>:null} */}
        {/* <NavBar
        loggedIn={loggedIn}
          usersPersonalInfo={usersPersonalInfo}
          setTheme={setTheme}
          theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
        /> */}
        {/* <p>
          {loggedIn
            ? `hello ${usersPersonalInfo.firstName} ${usersPersonalInfo.lastName},
            this is your feed:`
            : "‎"}
        </p> */}
        <div className="wrapper_home">
          <Feed_1.default userId={userId} loggedIn={loggedIn} usersPersonalInfo={usersPersonalInfo} setPostsList={setPostsList} postsList={postsList} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme}/>
        </div>
      </framer_motion_1.motion.div>
    </div>);
}
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map