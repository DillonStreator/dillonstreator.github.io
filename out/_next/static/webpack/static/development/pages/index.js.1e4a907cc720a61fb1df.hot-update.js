webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Card/Card.js":
false,

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Loader, MarkdownView, TerminalType, Link, PDFView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader/Loader */ "./components/Loader/Loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _Loader_Loader__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MarkdownView_MarkdownView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownView/MarkdownView */ "./components/MarkdownView/MarkdownView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownView", function() { return _MarkdownView_MarkdownView__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TerminalType_TerminalType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TerminalType/TerminalType */ "./components/TerminalType/TerminalType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TerminalType", function() { return _TerminalType_TerminalType__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Link_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link/Link */ "./components/Link/Link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link_Link__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _PDFView_PDFView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PDFView/PDFView */ "./components/PDFView/PDFView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PDFView", function() { return _PDFView_PDFView__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\dillo\\workspace\\portfolio\\pages\\index.js";




var captions = ['Positive', 'Passionate', 'Dedicated', 'Simplicity > Complexity', 'Secure, Succinct Development', 'Test Driven Development', 'Iterative Development'];

var Index = function Index() {
  var _React$createElement;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    key: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Dillon Streator")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.profileImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: 'Picture of me',
    src: "/static/profile.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    "data-text": "Dillon Streator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Dillon Streator")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.about,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    "data-text": "Full Stack Developer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Full Stack Developer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TerminalType"], {
    before: ">",
    commands: captions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "/static/resume.pdf",
    raw: true,
    target: "blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "CV"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.socialLinks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    icon: "linkedin.svg",
    href: "https://www.linkedin.com/in/dillon-streator-75b01b83/",
    raw: true,
    target: "blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    icon: "github.svg",
    href: "https://github.com/DillonStreator",
    raw: true,
    target: "blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Link"], (_React$createElement = {
    icon: "stack-overflow",
    href: "https://stackoverflow.com/users/8765619/cranky-coder"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "icon", "stack-overflow.svg"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "raw", true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "target", "blank"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "rel", "noopener noreferrer"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 25
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    icon: "npm.svg",
    href: "https://www.npmjs.com/~dillonstreator",
    raw: true,
    target: "blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1e4a907cc720a61fb1df.hot-update.js.map