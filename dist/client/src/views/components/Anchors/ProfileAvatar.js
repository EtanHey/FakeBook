"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
//styling imports:
//mui ->
const material_1 = require("@mui/material");
function ProfileAvatar(props) {
    const { AvatarStyling, setPopoverButton, setProfileAnchor, Initials, firstName, lastName, theme, lightTheme, darkTheme, userId, } = props;
    const navigate = (0, react_router_dom_1.useNavigate)();
    if (theme) {
        var { primary, secondary, background } = darkTheme.palette;
    }
    else {
        var { primary, secondary, background } = lightTheme.palette;
    }
    const ProfileAvatarStyling = {
        display: 'flex',
        placeItems: "center",
        placeContent: "space-between",
        gap: '1em',
        backgroundColor: "transparent",
        cursor: "pointer",
        fontSize: "1em",
        width: "fit-content",
        color: secondary,
        borderRadius: "50px",
    };
    (0, react_1.useEffect)(() => {
        //  AvatarStyling.width = 100;
        //  AvatarStyling.borderRadius = 10;
    }, []);
    function handleOpenSelfProfile(ev) {
        navigate(`/HomePage/Profile/${userId}`);
        // const button = ev.currentTarget.firstChild;
        // const icon = ev.currentTarget;
        // setPopoverButton(icon);
        // setProfileAnchor(button);
        // icon.style.backgroundColor = "#E7F3FF";
        // icon.style.color = "hsl(214, 89%, 52%)";
        // console.dir(button);
    }
    return (<button style={ProfileAvatarStyling} 
    // sx={{borderRadius:10}}
    onClick={(ev) => handleOpenSelfProfile(ev)}>
      <material_1.Avatar sx={{ backgroundColor: "transparent" }}>{Initials}</material_1.Avatar>

      <material_1.Typography>{firstName}</material_1.Typography>
    </button>);
}
exports.default = ProfileAvatar;
//# sourceMappingURL=ProfileAvatar.js.map