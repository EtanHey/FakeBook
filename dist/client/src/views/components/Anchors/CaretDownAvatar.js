"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
//styling imports:
//mui ->
const material_1 = require("@mui/material");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
function CaretDownAvatar(props) {
    const { AvatarStyling, setPopoverButton, setArrowAnchor } = props;
    function handleOpenNavPopover(ev) {
        const button = ev.currentTarget.firstChild;
        const icon = ev.currentTarget;
        setPopoverButton(icon);
        setArrowAnchor(button);
        icon.style.backgroundColor = "#E7F3FF";
        icon.style.color = "hsl(214, 89%, 52%)";
        console.dir(button);
    }
    return (<framer_motion_1.motion.div>
      <material_1.Avatar style={AvatarStyling} onClick={(ev) => handleOpenNavPopover(ev)}>
        <react_fontawesome_1.FontAwesomeIcon size="xs" icon={["fas", "caret-down"]}/>
      </material_1.Avatar>

    </framer_motion_1.motion.div>);
}
exports.default = CaretDownAvatar;
//# sourceMappingURL=CaretDownAvatar.js.map