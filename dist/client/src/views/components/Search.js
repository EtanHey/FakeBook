"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_1 = require("react");
function Search(props) {
    const { DynamicSearchStyling, AvatarStyling, SearchToggle, setSearchToggle, width, height, setMounted, searchTerm, setSearchTerm, searchMenuToggle, setSearchMenuToggle, handleSearchResult } = props;
    const [drawer, setDrawer] = (0, react_1.useState)();
    function handleOpenSearchDrawer(ev) {
        const button = ev.currentTarget.firstChild;
        const icon = ev.currentTarget;
        setSearchToggle(!SearchToggle);
        // setSearchToggle(true);
        icon.style.backgroundColor = "#E7F3FF";
        icon.style.color = "hsl(214, 89%, 52%)";
        console.dir(button);
    }
    function handleCloseSearchDrawer(ev) {
        const button = ev.currentTarget.firstChild;
        const icon = ev.currentTarget;
        console.log(button);
        console.log(icon);
        setSearchToggle(!SearchToggle);
        // setSearchToggle(true);
        icon.style.backgroundColor = "#e3e6ea";
        icon.style.color = "#050505";
        console.dir(button);
    }
    function handleSearchMenu(ev) {
        setSearchTerm(ev.target.value);
        handleSearchResult(ev);
    }
    (0, react_1.useEffect)(() => {
        let w = document.documentElement.clientWidth;
        // let h = document.documentElement.clientHeight;
        if (w < 1265) {
            setMounted(true);
        }
        if (w > 1265) {
            setMounted(false);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (searchTerm) {
            setSearchMenuToggle(true);
        }
        else {
            setSearchMenuToggle(false);
            // console.log(searchTerm.length);
        }
    }, [searchTerm]);
    return (<div style={DynamicSearchStyling} className="NavBar_left-search">
      <material_1.Avatar style={AvatarStyling} onClick={(ev) => {
            width < 1256
                ? handleCloseSearchDrawer(ev)
                : handleOpenSearchDrawer(ev);
        }}>
        <react_fontawesome_1.FontAwesomeIcon size="xs" icon="magnifying-glass"/>
      </material_1.Avatar>
      <material_1.Collapse orientation="horizontal" in={SearchToggle === true}>
        <material_1.InputBase className="NavBar_left-search-input" style={{ width: "80%" }} placeholder="Search Facebook" onKeyUp={(ev) => handleSearchMenu(ev)} onKeyPress={(ev) => {
            if (ev.key === "Enter") {
                handleSearchResult(ev);
            }
        }}/>
      </material_1.Collapse>
    </div>);
}
exports.default = Search;
//# sourceMappingURL=Search.js.map