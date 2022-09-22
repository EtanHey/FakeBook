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
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
//styling imports:
//mui ->
const material_1 = require("@mui/material");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const styles_1 = require("@mui/material/styles");
//website logo import:
const facebook_icon_svg_1 = require("../styles/facebook-icon.svg");
// local components imports:
const DotsAvatar_1 = __importDefault(require("./Anchors/DotsAvatar"));
const DotsPopover_1 = __importDefault(require("./Popovers/DotsPopover"));
const MessagesAvatar_1 = __importDefault(require("./Anchors/MessagesAvatar"));
const MessagesPopover_1 = __importDefault(require("./Popovers/MessagesPopover"));
const CaretDownAvatar_1 = __importDefault(require("./Anchors/CaretDownAvatar"));
const CaretDownPopover_1 = __importDefault(require("./Popovers/CaretDownPopover"));
const BellOnAvatar_1 = __importDefault(require("./Anchors/BellOnAvatar"));
const BellOnPopover_1 = __importDefault(require("./Popovers/BellOnPopover"));
const ProfileAvatar_1 = __importDefault(require("./Anchors/ProfileAvatar"));
const Search_1 = __importDefault(require("./Search"));
const SearchMenu_1 = __importDefault(require("./SearchMenu"));
function useWindowSize() {
    const [size, setSize] = (0, react_1.useState)([0, 0]);
    (0, react_1.useLayoutEffect)(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
}
function NavBar(props) {
    const { setTheme, theme, lightTheme, darkTheme, usersPersonalInfo, loggedIn, userId, setProfileId } = props;
    const [registered, setRegistered] = (0, react_1.useState)(false);
    const [PopoverButton, setPopoverButton] = (0, react_1.useState)();
    const [open, setOpen] = (0, react_1.useState)(false);
    const [ArrowAnchor, setArrowAnchor] = (0, react_1.useState)();
    const [ProfileAnchor, setProfileAnchor] = (0, react_1.useState)();
    const [BellAnchor, setBellAnchor] = (0, react_1.useState)();
    const [messagesAnchor, setMessagesAnchor] = (0, react_1.useState)();
    const [dotsAnchor, setDotsAnchor] = (0, react_1.useState)();
    const [SearchToggle, setSearchToggle] = (0, react_1.useState)();
    const [searchTerm, setSearchTerm] = (0, react_1.useState)();
    const [searchMenuToggle, setSearchMenuToggle] = (0, react_1.useState)();
    const [screenWidth, setScreenWidth] = (0, react_1.useState)();
    const [width, height] = useWindowSize();
    const [mounted, setMounted] = (0, react_1.useState)(false);
    const [nav, setNav] = (0, react_1.useState)(false);
    const [postResults, setPostResults] = (0, react_1.useState)([]);
    const [userResults, setUserResults] = (0, react_1.useState)([]);
    const { firstName, lastName } = usersPersonalInfo;
    const Initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    const navigate = (0, react_router_dom_1.useNavigate)();
    function navigateHome() {
        navigate("/HomePage");
    }
    function handleSearchResult(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const searchTerm = ev.target.value;
                if (!searchTerm)
                    throw new Error(`no search term in handle search result -search.tsx`);
                if (searchTerm) {
                    //search for users
                    const { data } = yield axios_1.default.post("/api/users/search-users", {
                        searchTerm,
                    });
                    setUserResults(data);
                    //search for posts
                    axios_1.default.post("/api/posts/search-posts", { searchTerm }).then((res) => {
                        setPostResults(res.data);
                    });
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    function displayWindowSize() {
        // // Get width and height of the window excluding scrollbars
        // let w = document.documentElement.clientWidth;
        // let h = document.documentElement.clientHeight;
        // // Display result inside a div element
        const widerScreenWidth = window.matchMedia("(min-width: 1265px)");
        if (widerScreenWidth.matches === true) {
            setScreenWidth(true);
            return;
        }
        if (widerScreenWidth.matches === false) {
            setScreenWidth(false);
            return;
        }
    }
    (0, react_1.useEffect)(() => {
        if (searchMenuToggle === false) {
            setSearchToggle(screenWidth);
        }
    }, [screenWidth]);
    (0, react_1.useEffect)(() => {
        window.addEventListener("resize", displayWindowSize);
    }, []);
    function handleOpenNavPopover(ev) {
        const button = ev.currentTarget.firstChild;
        console.dir(button);
        const icon = ev.currentTarget;
        console.dir(icon);
        setPopoverButton(icon);
        setArrowAnchor(button);
        icon.style.backgroundColor = "#E7F3FF";
        icon.style.color = "hsl(214, 89%, 52%)";
        console.dir(button);
    }
    if (theme) {
        var { primary, secondary, background } = darkTheme.palette;
    }
    else {
        var { primary, secondary, background } = lightTheme.palette;
    }
    function handleClosePopover(ev) {
        setArrowAnchor(null);
        if (PopoverButton) {
            PopoverButton.style.backgroundColor = "#e3e6ea";
            PopoverButton.style.color = "#050505";
        }
    }
    function handleSearch(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) { }
        });
    }
    const AvatarStyling = {
        cursor: "pointer",
        backgroundColor: "#e3e6ea",
        color: "#050505",
    };
    const ToolbarStyling = {
        padding: 15,
        placeContent: "space-between",
    };
    const StyledFixedLogo = (0, styles_1.styled)(facebook_icon_svg_1.ReactComponent)({
        cursor: "pointer",
    });
    const MenuArrowStyling = (0, styles_1.styled)(react_fontawesome_1.FontAwesomeIcon)({});
    const DynamicSearchStyling = {
        backgroundColor: "#e3e6ea",
        color: "#65676B",
    };
    const hasWindow = typeof window !== "undefined";
    (0, react_1.useEffect)(() => {
        mounted ? setSearchToggle(false) : setSearchToggle(true);
    }, [mounted]);
    (0, react_1.useEffect)(() => {
        console.log(hasWindow, "hasloaded");
        console.log(usersPersonalInfo, "UsersPersonalInfo");
    }, []);
    return (<material_1.AppBar className="NavBar" position="fixed" color="secondary">
      <material_1.Toolbar style={ToolbarStyling} disableGutters>
        <div className="NavBar_left">
          <StyledFixedLogo onClick={() => {
            navigateHome();
        }}/>
          <Search_1.default setMounted={setMounted} DynamicSearchStyling={DynamicSearchStyling} AvatarStyling={AvatarStyling} SearchToggle={SearchToggle} setSearchToggle={setSearchToggle} searchMenuToggle={searchMenuToggle} setSearchMenuToggle={setSearchMenuToggle} width={width} height={height} searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearchResult={handleSearchResult}/>
          <SearchMenu_1.default userResults={userResults} postResults={postResults} searchMenuToggle={searchMenuToggle} width={width} height={height} searchTerm={searchTerm} setProfileId={setProfileId}/>
        </div>
        {/* <Logo fill={background.default} stroke={background.default} /> */}
        <div>
          {height} {`${SearchToggle}`} {width}
        </div>
        <div className="NavBar_right">
          <CaretDownAvatar_1.default setPopoverButton={setPopoverButton} setArrowAnchor={setArrowAnchor} AvatarStyling={AvatarStyling}/>
          <CaretDownPopover_1.default PopoverButton={PopoverButton} setArrowAnchor={setArrowAnchor} ArrowAnchor={ArrowAnchor} Initials={Initials} firstName={firstName} lastName={lastName} setTheme={setTheme} theme={theme}/>
          <BellOnAvatar_1.default setPopoverButton={setPopoverButton} setBellAnchor={setBellAnchor} AvatarStyling={AvatarStyling}/>
          <BellOnPopover_1.default PopoverButton={PopoverButton} setBellAnchor={setBellAnchor} BellAnchor={BellAnchor} Initials={Initials} firstName={firstName} lastName={lastName} setTheme={setTheme} theme={theme}/>
          <MessagesAvatar_1.default setPopoverButton={setPopoverButton} setMessagesAnchor={setMessagesAnchor} AvatarStyling={AvatarStyling}/>
          <MessagesPopover_1.default PopoverButton={PopoverButton} setMessagesAnchor={setMessagesAnchor} messagesAnchor={messagesAnchor} Initials={Initials} firstName={firstName} lastName={lastName} setTheme={setTheme} theme={theme}/>
          <DotsAvatar_1.default setPopoverButton={setPopoverButton} setDotsAnchor={setDotsAnchor} AvatarStyling={AvatarStyling}/>
          <DotsPopover_1.default PopoverButton={PopoverButton} setDotsAnchor={setDotsAnchor} dotsAnchor={dotsAnchor} Initials={Initials} firstName={firstName} lastName={lastName} setTheme={setTheme} theme={theme}/>
          <ProfileAvatar_1.default setPopoverButton={setPopoverButton} setProfileAnchor={setArrowAnchor} AvatarStyling={AvatarStyling} Initials={Initials} firstName={firstName} lastName={lastName} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} userId={userId}/>
        </div>
      </material_1.Toolbar>
    </material_1.AppBar>
    // </ThemeProvider>
    //   ) : (
    // <div></div>
    //   );
    );
}
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map