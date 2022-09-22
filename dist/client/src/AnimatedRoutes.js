"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Personal workflow imports:
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const framer_motion_1 = require("framer-motion");
//styling imports:
require("./views/styles/global.scss");
const styles_1 = require("@mui/material/styles");
const colors_1 = require("@mui/material/colors");
//local components imports:
const HomePage_1 = __importDefault(require("./views/components/HomePage"));
const LoginPage_1 = __importDefault(require("./views/components/LoginPage"));
const SelfProfile_1 = __importDefault(require("./views/Profiles/SelfProfile"));
const Profile_1 = __importDefault(require("./views/Profiles/Profile"));
const Layout_1 = __importDefault(require("./Layout"));
const lightTheme = (0, styles_1.createTheme)({
    palette: {
        primary: {
            light: colors_1.blue[200],
            main: "#1977f2",
            dark: colors_1.blue[900],
            contrastText: colors_1.common.black,
        },
        secondary: {
            main: "#FFFFF",
        },
        background: {
            default: "#f0f2f5",
        },
    },
});
const darkTheme = (0, styles_1.createTheme)({
    palette: {
        primary: {
            light: colors_1.blue[200],
            main: "#28376f",
            dark: "#28376f",
            contrastText: colors_1.common.white,
        },
        secondary: {
            main: "#242526",
        },
        background: {
            default: "#18191a",
        },
        divider: "#42b72a",
    },
});
function AnimatedRoutes() {
    const location = (0, react_router_dom_1.useLocation)();
    const [postsList, setPostsList] = (0, react_1.useState)([]);
    const [othersPostsList, setOthersPostsList] = (0, react_1.useState)([]);
    const [loggedIn, setLoggedIn] = (0, react_1.useState)(false);
    const [userId, setUserId] = (0, react_1.useState)("");
    const [usersPersonalInfo, setUsersPersonalInfo] = (0, react_1.useState)({
        firstName: "",
        lastName: "",
        ok: false,
    });
    const [registerWarning, setRegisterWarning] = (0, react_1.useState)("");
    const [loginWarning, setLoginWarning] = (0, react_1.useState)("");
    const [theme, setTheme] = (0, react_1.useState)(true);
    const [profileId, setProfileId] = (0, react_1.useState)('');
    if (theme) {
        var { primary, secondary, background } = darkTheme.palette;
    }
    else {
        var { primary, secondary, background } = lightTheme.palette;
    }
    return (<framer_motion_1.AnimatePresence>
      <react_router_dom_1.Routes location={location} key={location.pathname}>
        <react_router_dom_1.Route path="/" element={<LoginPage_1.default userId={userId} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} loginWarning={loginWarning} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setLoginWarning={setLoginWarning} setUsersPersonalInfo={setUsersPersonalInfo} setUserId={setUserId} registerWarning={registerWarning} setRegisterWarning={setRegisterWarning}/>}/>
        <react_router_dom_1.Route path="/HomePage" element={<Layout_1.default setProfileId={setProfileId} setTheme={setTheme} theme={theme} loggedIn={loggedIn} darkTheme={darkTheme} lightTheme={lightTheme} usersPersonalInfo={usersPersonalInfo} userId={userId}/>}>
          <react_router_dom_1.Route index element={<HomePage_1.default theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} loginWarning={loginWarning} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setLoginWarning={setLoginWarning} setUsersPersonalInfo={setUsersPersonalInfo} setUserId={setUserId} registerWarning={registerWarning} setRegisterWarning={setRegisterWarning} userId={userId} usersPersonalInfo={usersPersonalInfo} setPostsList={setPostsList} postsList={postsList} setTheme={setTheme}/>}></react_router_dom_1.Route>
          <react_router_dom_1.Route path="Profile">
            <react_router_dom_1.Route path=":userId" element={userId === profileId ?
            <SelfProfile_1.default userId={userId} loggedIn={loggedIn} usersPersonalInfo={usersPersonalInfo} setPostsList={setPostsList} postsList={postsList} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme}/> : <Profile_1.default userId={userId} loggedIn={loggedIn} usersPersonalInfo={usersPersonalInfo} setPostsList={setPostsList} postsList={postsList} othersPostsList={othersPostsList} setOthersPostsList={setOthersPostsList} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} profileId={profileId}/>}></react_router_dom_1.Route>
          </react_router_dom_1.Route>
        </react_router_dom_1.Route>
      </react_router_dom_1.Routes>
    </framer_motion_1.AnimatePresence>);
}
exports.default = AnimatedRoutes;
//# sourceMappingURL=AnimatedRoutes.js.map