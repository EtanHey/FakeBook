"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//styling imports:
//mui ->
const material_1 = require("@mui/material");
function calcWidth(vw, less) {
    console.log(parseInt(vw) - parseInt(less));
    return parseInt(vw) - parseInt(less);
}
function BellOnPopover(props) {
    const { BellAnchor, setBellAnchor, PopoverButton, Initials, firstName, lastName, setTheme, theme } = props;
    function handleClosePopover(ev) {
        setBellAnchor(null);
        if (PopoverButton) {
            PopoverButton.style.backgroundColor = "#e3e6ea";
            PopoverButton.style.color = "#050505";
        }
    }
    return (<div><material_1.Popover open={Boolean(BellAnchor)} anchorReference="anchorPosition" anchorPosition={{ top: 55, left: 2400 }} anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
        }} transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }} anchorEl={BellAnchor} onClose={(ev) => handleClosePopover(ev)}>
'bell'
  </material_1.Popover></div>);
}
exports.default = BellOnPopover;
//# sourceMappingURL=BellOnPopover.js.map