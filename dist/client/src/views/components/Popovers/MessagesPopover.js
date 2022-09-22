"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//styling imports:
//mui ->
const material_1 = require("@mui/material");
function MessagesPopover(props) {
    const { messagesAnchor, setMessagesAnchor, PopoverButton, Initials, firstName, lastName, setTheme, theme, } = props;
    function handleClosePopover() {
        setMessagesAnchor(null);
        console.log('MessagesAnchor down', messagesAnchor);
        if (PopoverButton) {
            PopoverButton.style.backgroundColor = "#e3e6ea";
            PopoverButton.style.color = "#050505";
        }
    }
    return (<div>
      <material_1.Popover open={Boolean(messagesAnchor)} anchorReference="anchorPosition" anchorPosition={{ top: 55, left: 2400 }} anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
        }} transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }} anchorEl={messagesAnchor} onClose={() => handleClosePopover()}>
        'messages'
      </material_1.Popover>
    </div>);
}
exports.default = MessagesPopover;
//# sourceMappingURL=MessagesPopover.js.map