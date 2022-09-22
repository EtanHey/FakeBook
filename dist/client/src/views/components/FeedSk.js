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
function FeedSk(props) {
    const { postsList, setPostsList, setOthersPostsList, othersPostsList, theme, lightTheme, darkTheme, usersPersonalInfo, loggedIn, userId, profileId } = props;
    const [isPending, startTransition] = (0, react_1.useTransition)();
    if (theme) {
        var { primary, secondary, background } = lightTheme.palette;
    }
    else {
        var { primary, secondary, background } = darkTheme.palette;
    }
    function handleGetOthersPostsList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(profileId);
                const { data } = yield axios_1.default.post(`/api/posts/get-others-posts-list`, { profileId });
                const otherUsersPostsList = data;
                // let halfArray: any = [];
                // for (let i = 0; i < 100; i++) {
                //   halfArray.push(currentUsersPostsList[i]);
                // }
                setOthersPostsList(otherUsersPostsList);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // useEffect(() => {}, [usersPersonalInfo]);
    (0, react_1.useEffect)(() => {
        if (loggedIn) {
            handleGetOthersPostsList();
        }
    }, [userId]);
    return (<div className="wrapper_feed">
      <div className="wrapper_post-root">
        {othersPostsList.map((post, i) => {
            return (<Post_1.default key={i} setPostsList={setPostsList} post={post} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme}/>);
        })}
      </div>
    </div>);
}
exports.default = FeedSk;
//# sourceMappingURL=FeedSk.js.map