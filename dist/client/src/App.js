"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Personal workflow imports:
const react_router_dom_1 = require("react-router-dom");
//styling imports:
require("./views/styles/global.scss");
//local components imports:
const AnimatedRoutes_1 = __importDefault(require("./AnimatedRoutes"));
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <AnimatedRoutes_1.default />
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
//# sourceMappingURL=App.js.map