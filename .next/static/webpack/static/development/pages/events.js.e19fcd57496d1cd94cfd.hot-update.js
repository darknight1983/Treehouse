webpackHotUpdate("static/development/pages/events.js",{

/***/ "./components/eventsComp.js":
/*!**********************************!*\
  !*** ./components/eventsComp.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventsList */ "./components/eventsList.js");
var _jsxFileName = "/Users/jacolbygreen/front-end-dev/TreeHouse/components/eventsComp.js";






var styles = function styles(theme) {
  return {
    root: {
      marginTop: 75
    },
    backgroundTest: {
      backgroundImage: 'url(../static/images/events_background.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '50%',
      width: '100vw',
      height: '50vh'
    }
  };
};

var EventsComp = function EventsComp(props) {
  var classes = props.classes,
      events = props.events;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.backgroundTest,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h1",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Events")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_eventsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    events: events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(EventsComp));

/***/ })

})
//# sourceMappingURL=events.js.e19fcd57496d1cd94cfd.hot-update.js.map