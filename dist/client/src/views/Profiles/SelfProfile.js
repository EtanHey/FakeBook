"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const framer_motion_1 = require("framer-motion");
const react_router_dom_1 = require("react-router-dom");
const Feed_1 = __importDefault(require("../components/Feed"));
function SelfProfile(props) {
    const { usersPersonalInfo, loggedIn, darkTheme, lightTheme, theme, postsList, setPostsList, } = props;
    const { firstName, lastName } = usersPersonalInfo;
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        if (!loggedIn) {
            navigate("/");
        }
    }, []);
    const params = (0, react_router_dom_1.useParams)();
    const { userId } = params;
    return (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="wrapper">
      <material_1.CssBaseline />
      <div className="wrapper_profile-self">
        <div className="wrapper_profile-self-left">
          <p>
            {firstName}
            {lastName}
          </p>
        </div>
      </div>
      <Feed_1.default userId={userId} loggedIn={loggedIn} usersPersonalInfo={usersPersonalInfo} setPostsList={setPostsList} postsList={postsList} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme}/>
    </framer_motion_1.motion.div>);
}
exports.default = SelfProfile;
//# sourceMappingURL=SelfProfile.js.map