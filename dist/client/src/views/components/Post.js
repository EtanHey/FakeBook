"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//basic workflow imports:
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
//styling imports:
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
//mui ->
const material_1 = require("@mui/material");
function Post(props) {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { setPostsList, post, theme, lightTheme, darkTheme } = props;
    const Initials = post.ownerFirstName.charAt(0).toUpperCase() +
        post.ownerLastName.charAt(0).toUpperCase();
    if (theme) {
        var { primary, secondary, background } = lightTheme.palette;
    }
    else {
        var { primary, secondary, background } = darkTheme.palette;
    }
    function handleOpenPostOwnersProfile(ev) {
        // navigate(`/HomePage/Profile/${userId}`);
        console.log(ev.target);
    }
    (0, react_1.useEffect)(() => {
        console.log("posts loaded");
    }, []);
    function handleDeletePost(ev) {
        console.log(post, "post");
    }
    return (<material_1.Card raised style={{
            color: primary.contrastText,
            backgroundColor: background.default,
            textAlign: "left",
            // width: 680,
            // maxWidth: 680,
            minHeight: 194.094,
            // paddingLeft: 16,
            // paddingRight: 16,
            // paddingTop: 12,
        }}>
      <material_1.CardHeader color={primary.contrastText} style={{ textAlign: "left" }} avatar={<material_1.Avatar onClick={handleOpenPostOwnersProfile} sx={{
                color: theme ? primary.contrastText : primary.main,
                bgcolor: theme ? primary.dark : secondary.main,
            }}>
            {Initials}
          </material_1.Avatar>} title={<react_router_dom_1.Link to={`/HomePage/Profile/${post.ownerId}`} onClick={handleOpenPostOwnersProfile}>
            `{post.ownerFirstName} {post.ownerLastName}`
          </react_router_dom_1.Link>} subheader={<material_1.Typography color="primary">{post.time}</material_1.Typography>} action={<material_1.Button color="primary" onClick={(ev) => {
                handleDeletePost(ev);
            }}>
            <react_fontawesome_1.FontAwesomeIcon size="xs" icon={["fas", "trash"]}/>
          </material_1.Button>}></material_1.CardHeader>
      <material_1.CardContent>{post.content}</material_1.CardContent>
    </material_1.Card>);
}
exports.default = Post;
//# sourceMappingURL=Post.js.map