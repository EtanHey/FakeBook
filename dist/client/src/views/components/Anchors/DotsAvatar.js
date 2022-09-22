"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
const threeDots_svg_1 = require("../../styles/threeDots.svg");
//styling imports:
//mui ->
const material_1 = require("@mui/material");
function DotsAvatar(props) {
    const { AvatarStyling, setPopoverButton, setDotsAnchor } = props;
    function handleOpenNavPopover(ev) {
        const button = ev.currentTarget.firstChild;
        const icon = ev.currentTarget;
        setPopoverButton(icon);
        setDotsAnchor(button);
        icon.style.backgroundColor = "#E7F3FF";
        icon.style.color = "hsl(214, 89%, 52%)";
        console.dir(button);
    }
    const FlexAvatarStyling = {
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        placeContent: "center",
        gap: 0,
    };
    return (<framer_motion_1.motion.div>
      <material_1.Avatar style={AvatarStyling} onClick={(ev) => handleOpenNavPopover(ev)}>
        <div style={FlexAvatarStyling}>
          <threeDots_svg_1.ReactComponent />
        </div>
      </material_1.Avatar>
    </framer_motion_1.motion.div>);
}
exports.default = DotsAvatar;
//# sourceMappingURL=DotsAvatar.js.map