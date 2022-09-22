"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
//styling imports:
//mui ->
const material_1 = require("@mui/material");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
function BellOnAvatar(props) {
    const { AvatarStyling, setPopoverButton, setBellAnchor } = props;
    function handleOpenNavPopover(ev) {
        const button = ev.currentTarget.firstChild;
        const icon = ev.currentTarget;
        setPopoverButton(icon);
        setBellAnchor(button);
        icon.style.backgroundColor = "#E7F3FF";
        icon.style.color = "hsl(214, 89%, 52%)";
        console.dir(button);
    }
    return (<framer_motion_1.motion.div animate={{ rotate: 0 }} whileHover={{ rotate: ['90deg', '-90deg', '90deg'] }} transition={{ repeat: 15, duration: 2 }}>
      <material_1.Avatar style={AvatarStyling} onClick={(ev) => handleOpenNavPopover(ev)}>
        <react_fontawesome_1.FontAwesomeIcon size="xs" icon={["fas", "bell"]}/>
      </material_1.Avatar>

    </framer_motion_1.motion.div>);
}
exports.default = BellOnAvatar;
//# sourceMappingURL=BellOnAvatar.js.map