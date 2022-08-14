"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/cjs/index.js
var cjs = __webpack_require__(6431);
;// CONCATENATED MODULE: ./components/theme-toggle.js




const ThemeToggle = ()=>{
    const { toggleColorMode  } = (0,react_.useColorMode)();
    const ThemeButtonColors = (0,react_.useColorModeValue)("#2b94d1", "#fdf0bd");
    return /*#__PURE__*/ jsx_runtime_.jsx(cjs/* AnimatePresence */.M_, {
        exitBeforeEnter: true,
        initial: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx(cjs/* motion.div */.EA.div, {
            style: {
                display: "inline-block"
            },
            initial: {
                rotate: -180,
                x: -50,
                opacity: 0
            },
            animate: {
                rotate: -360,
                x: 0,
                opacity: 1
            },
            exit: {
                rotate: -180,
                x: 50,
                opacity: 0
            },
            transition: {
                duration: 0.35
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                "aria-label": "Toggle theme",
                borderRadius: 100,
                bg: (0,react_.useColorModeValue)("accentColor", "#fbe384"),
                color: (0,react_.useColorModeValue)("white", "black"),
                icon: (0,react_.useColorModeValue)(/*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.MoonIcon, {}), /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.SunIcon, {})),
                onClick: toggleColorMode,
                _hover: {
                    bg: ThemeButtonColors
                },
                my: 1
            })
        }, (0,react_.useColorModeValue)("light", "dark"))
    });
};
/* harmony default export */ const theme_toggle = (ThemeToggle);

;// CONCATENATED MODULE: ./components/navbar.js





const LinkItem = ({ href , path , children  })=>{
    const active = path === href;
    const inactiveColor = (0,react_.useColorModeValue)("gray200", "whiteAlpha.900");
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            py: 1.5,
            px: 3,
            fontSize: 17.2,
            borderRadius: 50,
            bg: active ? "accentColor" : undefined,
            color: active ? "white" : inactiveColor,
            fontFamily: "Teriyake",
            children: children
        })
    });
};
const Navbar = (props)=>{
    const { path  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        position: "fixed",
        as: "nav",
        w: "100%",
        bg: (0,react_.useColorModeValue)("#e7dfc6", "#1B1725"),
        style: {
            backdropFilter: "blur(10px)"
        },
        zIndex: 1,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            display: "flex",
            p: 2,
            maxW: "container.lg",
            wrap: "wrap",
            align: "center",
            justify: "space-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    align: "center",
                    mt: 2,
                    mr: 5,
                    ml: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        path: path,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                as: "h1",
                                fontSize: 30,
                                fontFamily: "Trap",
                                fontWeight: "normal",
                                color: "#A60067",
                                children: "HSCS"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    direction: {
                        base: "column",
                        md: "row"
                    },
                    display: {
                        base: "none",
                        md: "flex"
                    },
                    width: {
                        base: "full",
                        md: "auto"
                    },
                    align: "center",
                    alignItems: "center",
                    flexGrow: 1,
                    spacing: 10,
                    ml: 5,
                    mt: {
                        base: 4,
                        nmd: 0
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            href: "/notes",
                            path: path,
                            children: "Notes"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            href: "/qb",
                            path: path,
                            children: "Question Bank"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            href: "/contact",
                            path: path,
                            children: "Contact Us"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    flex: 1,
                    align: "right",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(theme_toggle, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            ml: 2,
                            display: {
                                base: "inline-block",
                                md: "none"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                        as: react_.IconButton,
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.HamburgerIcon, {}),
                                        variant: "outline",
                                        "aria-label": "Options"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                        bg: (0,react_.useColorModeValue)("#F0E68C", "#555555"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "About Us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/notes",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "Dishes"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/qb",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "Resume"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "Contact Us"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
        maxW: "container.lg",
        mt: 36,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
            align: "center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                fontSize: 14,
                fontFamily: "altertype",
                children: [
                    "Designed and Developed by ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://shaan-d.mareliafarm.online",
                        target: "__blank",
                        children: "Shaan Dussoye"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/layouts/main.js





const Main = ({ children , router  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "main",
        pb: 8,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width = device-width, initial-scale = 1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "CS IGCSE"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                path: router.asPath
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                maxW: "container.xl",
                pt: 14,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const main = (Main);

// EXTERNAL MODULE: ./lib/theme.js
var theme = __webpack_require__(7985);
;// CONCATENATED MODULE: external "@emotion/react"
const external_emotion_react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./components/fonts.js


const Fonts = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_emotion_react_namespaceObject.Global, {
        styles: `
    @font-face {
        font-family: Teriyake;
        src:
            url("/fonts/Teriyake-Medium.otf")
            format("opentype");
    }

    @font-face {
        font-family: "Hibana";
        src:
            url("/fonts/Hibana-SubMedium.otf")
            format("opentype");
    }

    @font-face {
        font-family: "Evolventa";
        src:
            url("/fonts/Evolventa-Bold.otf")
            format("opentype");
    }

    @font-face {
        font-family: "Outfit";
        src:
            url("/fonts/Outfit-Medium.ttf")
            format("truetype");
    }

    @font-face {
        font-family: "Zacbel X";
        src:
            url("/fonts/zacbelx-medium.ttf")
            format("truetype");
    }

    @font-face {
        font-family: "altertype";
        src:
            url("/fonts/altertype.otf")
            format("opentype");
    }

    @font-face {
        font-family: "Trap";
        src:
            url("/fonts/Trap-Bold.otf")
            format("opentype");
    }

    `
    });
/* harmony default export */ const fonts = (Fonts);

;// CONCATENATED MODULE: ./pages/_app.js








const Website = ({ Component , pageProps , router  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        theme: theme/* default */.Z,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(fonts, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(main, {
                router: router,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cjs/* AnimatePresence */.M_, {
                    exitBeforeEnter: true,
                    initial: true,
                    children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                        ...pageProps,
                        key: router.route
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (Website);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 8097:
/***/ ((module) => {

module.exports = require("@motionone/dom");

/***/ }),

/***/ 3033:
/***/ ((module) => {

module.exports = require("hey-listen");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 2783:
/***/ ((module) => {

module.exports = require("popmotion");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 505:
/***/ ((module) => {

module.exports = require("style-value-types");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [431,952,664,985], () => (__webpack_exec__(1635)));
module.exports = __webpack_exports__;

})();