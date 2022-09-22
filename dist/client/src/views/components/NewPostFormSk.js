"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//basic workflow imports:
const react_1 = __importDefault(require("react"));
//styling imports:
//mui ->
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
function NewPostFormSk(props) {
    const { theme, lightTheme, darkTheme } = props;
    if (theme) {
        var { primary, secondary, background } = darkTheme.palette;
    }
    else {
        var { primary, secondary, background } = lightTheme.palette;
    }
    // async function getPostsList() {
    //     const { data } = await axios("https://jsonplaceholder.typicode.com/todos");
    //     setPostsList(data);
    //   }
    return (<material_1.Card style={{
            color: theme ? primary.contrastText : primary.contrastText,
            backgroundColor: theme ? secondary.main : primary.main,
            textAlign: "center",
            padding: "1em",
        }}>
      <form className="wrapper_post-form">
        <material_1.Avatar sx={{
            color: theme ? primary.contrastText : primary.main,
            bgcolor: theme ? primary.main : secondary.main,
        }}>

        </material_1.Avatar>

        <material_1.TextField name="newPostContent" className="newPostSk_Content" variant="outlined" sx={{
            input: { color: primary.contrastText, flexBasis: "100%" },
            fieldset: {
                width: "100%",
                flex: "100%",
                borderRadius: "3em",
            },
        }}/>

        <material_1.Button color={theme ? 'primary' : 'secondary'} type="submit">
          <icons_material_1.Send />
        </material_1.Button>
      </form>
    </material_1.Card>);
}
exports.default = NewPostFormSk;
//# sourceMappingURL=NewPostFormSk.js.map