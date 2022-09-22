"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//styling imports:
//mui ->
const material_1 = require("@mui/material");
function FeedsSearchBar(props) {
    const { handleSearch } = props;
    return (<div className="wrapper_feed-search">
      <material_1.TextField name="search" id="search"/>
    </div>);
}
exports.default = FeedsSearchBar;
//# sourceMappingURL=FeedsSearchBar.js.map