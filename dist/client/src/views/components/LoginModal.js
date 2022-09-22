"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Modal_1 = __importDefault(require("@mui/material/Modal"));
const LoginForm_1 = __importDefault(require("./LoginForm"));
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
function LoginModal(props) {
    const { theme, lightTheme, darkTheme, loginWarning, loggedIn, setLoginWarning, setUsersPersonalInfo, setLoggedIn, setUserId, userId, } = props;
    const [open, setOpen] = (0, react_1.useState)(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    (0, react_1.useEffect)(() => {
        handleClose();
    }, [loggedIn]);
    return (<div>
      <Button_1.default color="primary" onClick={handleOpen}>
        Login!
      </Button_1.default>
      <Modal_1.default open={open} onClose={handleClose}>
        <Box_1.default sx={style}>
          <LoginForm_1.default userId={userId} loggedIn={loggedIn} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} loginWarning={loginWarning} setLoginWarning={setLoginWarning} setUsersPersonalInfo={setUsersPersonalInfo} setLoggedIn={setLoggedIn} setUserId={setUserId}/>
        </Box_1.default>
      </Modal_1.default>
    </div>);
}
exports.default = LoginModal;
//# sourceMappingURL=LoginModal.js.map