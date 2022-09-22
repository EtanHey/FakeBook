"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const NavBar_1 = __importDefault(require("./views/components/NavBar"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
function Layout(props) {
    const { theme, lightTheme, darkTheme, loggedIn, setTheme, usersPersonalInfo, userId, setProfileId } = props;
    // if (theme) {
    //     var { primary, secondary, background } = lightTheme.palette;
    //   } else {
    //     var { primary, secondary, background } = darkTheme.palette;
    //   }
    return (<div>
    <styles_1.ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <material_1.CssBaseline />
        <NavBar_1.default setProfileId={setProfileId} loggedIn={loggedIn} usersPersonalInfo={usersPersonalInfo} setTheme={setTheme} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} userId={userId}/>
        <react_router_dom_1.Outlet />
        </styles_1.ThemeProvider>
    </div>);
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map