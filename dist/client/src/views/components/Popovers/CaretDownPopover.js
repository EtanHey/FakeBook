"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//styling imports:
//mui ->
const material_1 = require("@mui/material");
function CaretDownPopover(props) {
    const { ArrowAnchor, setArrowAnchor, PopoverButton, Initials, firstName, lastName, setTheme, theme, } = props;
    function handleClosePopover() {
        setArrowAnchor(null);
        console.log('arrowanchor down', ArrowAnchor);
        if (PopoverButton) {
            PopoverButton.style.backgroundColor = "#e3e6ea";
            PopoverButton.style.color = "#050505";
        }
    }
    return (<div>
      <material_1.Popover open={Boolean(ArrowAnchor)} anchorReference="anchorPosition" anchorPosition={{ top: 55, left: 2400 }} anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
        }} transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }} anchorEl={ArrowAnchor} onClose={() => handleClosePopover()}>
        <material_1.Card>
          <material_1.CardHeader action={<material_1.Button sx={{ gap: "1em" }}>
                <material_1.Avatar>{Initials}</material_1.Avatar>
                {firstName} {lastName}
              </material_1.Button>}/>

          <material_1.CardContent>
            <material_1.Button sx={{ width: "100%" }}>See All Profiles</material_1.Button>
          </material_1.CardContent>
        </material_1.Card>
        <material_1.FormControlLabel control={<material_1.Switch color="secondary" onChange={() => {
                setTheme(!theme);
            }}/>} label={`${theme ? "Dark Mode" : "Light Mode"}`} labelPlacement="end"/>
      </material_1.Popover>
    </div>);
}
exports.default = CaretDownPopover;
//# sourceMappingURL=CaretDownPopover.js.map