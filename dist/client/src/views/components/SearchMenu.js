"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const framer_motion_1 = require("framer-motion");
const material_1 = require("@mui/material");
function SearchMenu(props) {
    const { searchMenuToggle, width, height, searchTerm, postResults, userResults, setProfileId, } = props;
    return (<div className="NavBar_left-search-menu">
      <material_1.Collapse className="NavBar_left-search-menu-content" in={searchMenuToggle}>
        <material_1.Card>
          <material_1.CardHeader style={{ flexDirection: "column" }} action={<div className="NavBar_left-search-menu-searchTerm">
                <material_1.Avatar>
                  <react_fontawesome_1.FontAwesomeIcon size="xs" icon="magnifying-glass"/>
                </material_1.Avatar>
                <p>
                  Search for <strong>{searchTerm}</strong>
                </p>
              </div>}/>
          {postResults && userResults
            ? userResults.map((user, i) => {
                const Initials = user.firstName.charAt(0).toUpperCase() +
                    user.lastName.charAt(0).toUpperCase();
                return (<material_1.CardHeader style={{ flexDirection: "column" }} key={i} action={<framer_motion_1.motion.div 
                    // transition={{duration: '2s'}}
                    whileTap={{
                            scale: [1, 0.8],
                            rotate: [0, -90, 180, 0, -180, 90, 0],
                            borderRadius: [10, 50],
                        }} data-search-result className="NavBar_left-search-menu-result">
                        <react_router_dom_1.Link onClick={() => {
                            setProfileId(user._id);
                            // console.log(user.id);
                        }} to={`/HomePage/Profile/${user._id}`}>
                          <material_1.Avatar>{Initials}</material_1.Avatar>
                          <p>
                            {user.firstName} {user.lastName}
                          </p>
                        </react_router_dom_1.Link>
                      </framer_motion_1.motion.div>}/>);
            })
            : null}
        </material_1.Card>
      </material_1.Collapse>
    </div>);
}
exports.default = SearchMenu;
//# sourceMappingURL=SearchMenu.js.map