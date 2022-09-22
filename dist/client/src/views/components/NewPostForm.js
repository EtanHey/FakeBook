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
const react_1 = __importDefault(require("react"));
const axios_1 = __importDefault(require("axios"));
//styling imports:
//mui ->
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
function NewPostForm(props) {
    const { theme, lightTheme, darkTheme, loggedIn, usersPersonalInfo, userId, handleGetPostsList, } = props;
    function handleNewPost(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                ev.preventDefault();
                if (!userId)
                    throw new Error(`no user id in handleNewPost`);
                const newPostContent = ev.target.elements.newPostContent.value;
                const newPostDate = new Date().toLocaleDateString();
                const newPostHour = new Date().getHours();
                const newPostMinutes = new Date().getMinutes();
                const newPostSeconds = new Date().getSeconds();
                const newPostTime = `${newPostDate},${newPostHour}:${newPostMinutes}:${newPostSeconds}`;
                const newPostInfo = {
                    ownerId: userId,
                    content: newPostContent,
                    time: newPostTime,
                };
                ev.target.reset();
                let { data } = yield axios_1.default.post("/api/posts/create-new-post", newPostInfo);
                const { newPost } = data;
                console.log(newPost);
                if (newPost) {
                    handleGetPostsList();
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    const { firstName, lastName } = usersPersonalInfo;
    const Initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    if (theme) {
        var { primary, secondary, background } = lightTheme.palette;
    }
    else {
        var { primary, secondary, background } = darkTheme.palette;
    }
    // async function getPostsList() {
    //     const { data } = await axios("https://jsonplaceholder.typicode.com/todos");
    //     setPostsList(data);
    //   }
    return (<material_1.Card 
    // color='secondary'
    style={{
            color: primary.contrastText,
            backgroundColor: background.default,
            textAlign: "center",
            padding: "1em",
            minWidth: '640px',
            maxWidth: '680px',
            overflow: 'hidden'
        }}>
      <form onSubmit={(ev) => handleNewPost(ev)} className="wrapper_post-form">
        <material_1.Avatar sx={{
            color: primary.main,
            bgcolor: secondary.main,
        }}>
          {Initials}
        </material_1.Avatar>

        <material_1.TextField name="newPostContent" id="newPostContent" variant="outlined" placeholder={loggedIn ? `Whats on your mind, ${firstName}?` : ""} style={{ width: "100%", maxWidth: '680px' }} sx={{
            input: { color: primary.contrastText, flexBasis: "100%" },
            fieldset: {
                // width: "100%",
                flex: "100%",
                borderRadius: "3em",
            },
        }}/>

        <material_1.Button color='primary' type="submit">
          <icons_material_1.Send />
        </material_1.Button>
      </form>
    </material_1.Card>);
}
exports.default = NewPostForm;
//# sourceMappingURL=NewPostForm.js.map