"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const free_solid_svg_icons_2 = require("@fortawesome/free-solid-svg-icons");
const App_1 = __importDefault(require("./App"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas, free_solid_svg_icons_1.faR, free_solid_svg_icons_2.faCaretDown, free_solid_svg_icons_2.faCheckSquare, free_solid_svg_icons_2.faCoffee);
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(<react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
//# sourceMappingURL=index.js.map