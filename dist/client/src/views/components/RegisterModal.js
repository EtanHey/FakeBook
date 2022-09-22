"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const RegisterForm_1 = __importDefault(require("./RegisterForm"));
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -42%)",
    // minWidth: 432,
    width: 432,
    height: 'fit-content',
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
};
function RegisterModal(props) {
    const { theme, lightTheme, darkTheme, registerWarning, setRegisterWarning } = props;
    const [open, setOpen] = (0, react_1.useState)(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<div>
      {/* style={{color:"#42b72a"}} */}
      <material_1.Button style={{ minWidth: "166.523px", minHeight: "48px" }} sx={{ py: 0 }} color={theme ? "success" : "secondary"} variant="contained" onClick={handleOpen}>
        Create New Account
      </material_1.Button>
      <material_1.Modal BackdropProps={{
            sx: {
                backgroundColor: 'rgb(255, 255, 255, .8)',
            },
        }} open={open} onClose={handleClose}>
        <material_1.Card sx={style}>
          <material_1.CardHeader style={{ paddingTop: 0 }} title={<material_1.Typography variant="h3">Sign Up</material_1.Typography>} subheader={<material_1.Typography>It's quick and easy.</material_1.Typography>}></material_1.CardHeader>
          <material_1.CardContent style={{ paddingTop: 0 }}>
            <RegisterForm_1.default theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} registerWarning={registerWarning} setRegisterWarning={setRegisterWarning}/>
          </material_1.CardContent>
        </material_1.Card>
      </material_1.Modal>
    </div>);
}
exports.default = RegisterModal;
//# sourceMappingURL=RegisterModal.js.map