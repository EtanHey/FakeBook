"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//basic workflow imports:
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const system_1 = require("@mui/system");
//styling imports:
//mui ->
const material_1 = require("@mui/material");
function RegisterForm(props) {
    const { theme, lightTheme, darkTheme, registerWarning, setRegisterWarning } = props;
    const [gender, setGender] = (0, react_1.useState)();
    function handleGender(ev) {
        setGender(ev.target.value);
    }
    function handleRegistration(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            ev.preventDefault();
            try {
                let { firstName, lastName, email, password, birthDate } = ev.target.elements;
                firstName = firstName.value;
                lastName = lastName.value;
                email = email.value;
                password = password.value;
                birthDate = birthDate.value;
                if (!firstName ||
                    !lastName ||
                    !email ||
                    !password ||
                    !gender ||
                    !birthDate)
                    throw new Error(`something missing in handleRegister -client side`);
                // if (password !== confirmPassword)
                //   setRegisterWarning("*Passwords dont match");
                // setTimeout(() => setRegisterWarning(""), 5000);
                const { data } = yield axios_1.default.post("/api/users/add-new-user", {
                    firstName,
                    lastName,
                    email,
                    password,
                    gender,
                    birthDate,
                    setRegisterWarning,
                });
                const { registerData } = data;
                const message = registerData.message;
                if (!registerData.result) {
                    setRegisterWarning(`${message}`);
                    setTimeout(() => setRegisterWarning(""), 5000);
                    return;
                }
                setRegisterWarning(`${message}`);
                setTimeout(() => setRegisterWarning(""), 5000);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    const ShortTextField = (0, system_1.styled)(material_1.TextField)({
        margin: "0 auto ",
    });
    const TwoTextFieldsGroup = (0, system_1.styled)(material_1.FormGroup)({
        flexWrap: "nowrap",
        gap: 10,
    });
    return (<form className="register-form" onSubmit={(ev) => handleRegistration(ev)}>
      <TwoTextFieldsGroup row>
        <ShortTextField size="small" name="firstName" id="firstName" placeholder="First Name"/>
        <ShortTextField size="small" name="lastName" id="lastName" placeholder="Last Name"/>
      </TwoTextFieldsGroup>
      <material_1.TextField fullWidth size="small" type="email" name="email" id="email" placeholder="Email"/>
      <material_1.TextField fullWidth size="small" type="password" name="password" id="password" placeholder="Password"/>
      <material_1.FormControl>
        <material_1.FormLabel id="date-label">Date of birth</material_1.FormLabel>
        <material_1.FormGroup>
          <material_1.TextField style={{ minWidth: "100%" }} size="small" type="date" name="birthDate" id="birthDate" placeholder="whats your birth date?"/>
        </material_1.FormGroup>
      </material_1.FormControl>
      <material_1.FormControl>
        <material_1.FormLabel id="gender-label">Gender</material_1.FormLabel>
        <material_1.RadioGroup onChange={(ev) => handleGender(ev)} row>
          <material_1.FormControlLabel value="female" control={<material_1.Radio />} label="Female"/>
          <material_1.FormControlLabel value="male" control={<material_1.Radio />} label="Male"/>
          <material_1.FormControlLabel value="costume" control={<material_1.Radio />} label="Costume"/>
        </material_1.RadioGroup>
      </material_1.FormControl>
      {/* <FormControlLabel
          control={
            <FormGroup> */}
      {/* <Select
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Gender</em>;
              }
              
              return selected;
            }}
            size="small"
            name="gender"
            autoWidth
            id="gender"
            label="gender"
            defaultValue="male"
            onChange={(ev) => {
              setGender(ev.target.value);
            }}
            >
              <MenuItem disabled value="Gender">
                Gender
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select> */}
      {/* </FormGroup>
          }
          label="Gender"
          labelPlacement="top"
          /> */}
      {/* <TextField
          size="small"
          defaultValue="Etanhey"
          name="role"
          id="role"
          placeholder="Role"
          /> */}
      <material_1.Typography style={{ fontSize: "62.5%" }} variant="subtitle1">
        By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
        Policy. You may receive SMS notifications from us and can opt out at any
        time.
      </material_1.Typography>
      <material_1.Button type="submit" color="success" variant="contained" style={{ width: "fit-content" }}>
        Sign Up!
      </material_1.Button>

      <material_1.Typography variant="h6" color="warning">
        {registerWarning}
      </material_1.Typography>
    </form>);
}
exports.default = RegisterForm;
//# sourceMappingURL=RegisterForm.js.map