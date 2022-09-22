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
//local components imports:
const Post_1 = __importDefault(require("./Post"));
const NewPostForm_1 = __importDefault(require("./NewPostForm"));
function Feed(props) {
    const { postsList, setPostsList, theme, lightTheme, darkTheme, usersPersonalInfo, loggedIn, userId, } = props;
    const [isPending, startTransition] = (0, react_1.useTransition)();
    if (theme) {
        var { primary, secondary, background } = lightTheme.palette;
    }
    else {
        var { primary, secondary, background } = darkTheme.palette;
    }
    function handleGetPostsList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield axios_1.default.get(`/api/posts/get-posts-list`);
                const currentUsersPostsList = data;
                // let halfArray: any = [];
                // for (let i = 0; i < 100; i++) {
                //   halfArray.push(currentUsersPostsList[i]);
                // }
                setPostsList(currentUsersPostsList);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // useEffect(() => {}, [usersPersonalInfo]);
    (0, react_1.useEffect)(() => {
        if (loggedIn) {
            handleGetPostsList();
        }
    }, [userId]);
    return (<div className="wrapper_feed">
      <NewPostForm_1.default theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} loggedIn={loggedIn} usersPersonalInfo={usersPersonalInfo} userId={userId} handleGetPostsList={handleGetPostsList}/>
      <div className="wrapper_post-root">
        {postsList.map((post, i) => {
            return (<Post_1.default key={i} setPostsList={setPostsList} post={post} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme}/>);
        })}
      </div>
    </div>);
}
exports.default = Feed;
//# sourceMappingURL=Feed.js.map