"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//styling imports:
//mui ->
const material_1 = require("@mui/material");
function PostSk(props) {
    const { theme, lightTheme, darkTheme } = props;
    if (theme) {
        var { primary, secondary, background } = lightTheme.palette;
    }
    else {
        var { primary, secondary, background } = darkTheme.palette;
    }
    return (<material_1.Card style={{
            color: theme ? primary.contrastText : primary.contrastText,
            backgroundColor: theme ? secondary.main : primary.main,
            textAlign: "left",
        }}>
      <material_1.CardHeader color={primary.contrastText} style={{ textAlign: "left" }} avatar={<material_1.Avatar sx={{
                color: theme ? primary.contrastText : primary.main,
                bgcolor: theme ? primary.dark : secondary.main,
            }}></material_1.Avatar>} title={<material_1.Typography className="post_sk-name"></material_1.Typography>} subheader={<material_1.Typography className="post_sk-time"></material_1.Typography>}></material_1.CardHeader>
      <material_1.CardContent>
        <material_1.Typography className="post_sk-Content"></material_1.Typography>
      </material_1.CardContent>
    </material_1.Card>);
}
exports.default = PostSk;
//# sourceMappingURL=PostSk.js.map