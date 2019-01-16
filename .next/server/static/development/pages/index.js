module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jacolbygreen/front-end-dev/TreeHouse/components/Banner.js";






var styles = function styles(theme) {
  return {
    container: {
      marginTop: '75px'
    },
    gridContainer: {
      width: '100%'
    },
    treehouse: {
      width: '70%',
      height: '100%'
    },
    title: {
      width: '100%'
    },
    icons: {
      width: '40px',
      height: '40px'
    },
    socialContainer: {
      paddingTop: 30
    }
  };
};

var IconBox = react_pose__WEBPACK_IMPORTED_MODULE_3___default.a.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2
  }
});
var Box = react_pose__WEBPACK_IMPORTED_MODULE_3___default.a.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2
  }
});

var Banner = function Banner(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    justify: "center",
    direction: "column",
    alignItems: "center",
    className: classes.gridContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    className: classes.gridItems,
    xs: 10,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/Banner2.png",
    alt: "Treehouse_Room",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    className: classes.gridItems,
    xs: 12,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/GrayTreehouse.png",
    className: classes.treehouse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    justify: "center",
    spacing: 24,
    className: classes.socialContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/facebook.png",
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/Twitter_Social_Icon_Circle_Color.png",
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/linkedin.png",
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/Instagram.png",
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))))))));
};

Banner.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Banner));

/***/ }),

/***/ "./components/Contacts.js":
/*!********************************!*\
  !*** ./components/Contacts.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/jacolbygreen/front-end-dev/TreeHouse/components/Contacts.js";











var styles = function styles(theme) {
  return {
    avatar: {
      width: '40%',
      height: '40%'
    },
    paper: {
      backgroundColor: '#FAFAFA',
      opacity: 1,
      marginTop: 15,
      marginBottom: 15,
      padding: 15
    },
    contactsCont: {
      marginTop: 25,
      marginBottom: 25
    },
    icons: {
      width: 25,
      height: 25
    },
    contactTitle: {
      marginTop: 10,
      marginBottom: 10
    },
    contactSocial: {
      marginBottom: 10
    },
    contactDescription: {
      marginBottom: 10
    }
  };
};

var IconBox = react_pose__WEBPACK_IMPORTED_MODULE_9___default.a.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2
  }
});

var TreehouseContacts = function TreehouseContacts(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    xs: 12,
    align: "center",
    justify: "space-around",
    className: classes.contactsCont,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    sm: 5,
    md: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a, {
    elevation: 1,
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.avatar,
    src: "/static/images/NancyImg.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "title",
    component: "h1",
    className: classes.contactTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Nancy Hong"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    justify: "center",
    spacing: 24,
    className: classes.contactSocial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/facebook.png",
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/Twitter_Social_Icon_Circle_Color.png",
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/linkedin.png",
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "subheading",
    component: "h1",
    className: classes.contactDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    xs: 12,
    align: "center",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    sm: 10,
    md: 10,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "subtitle1",
    color: "inherit",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "nancy@addisontreehouse.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    sm: 10,
    md: 10,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "subtitle1",
    color: "inherit",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "(972) 450-7076"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    sm: 5,
    md: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a, {
    elevation: 1,
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.avatar,
    src: "/static/images/NancyImg.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "title",
    component: "h1",
    className: classes.contactTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Nancy Hong"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    justify: "center",
    spacing: 24,
    className: classes.contactSocial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/facebook.png",
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/Twitter_Social_Icon_Circle_Color.png",
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/linkedin.png",
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "subheading",
    component: "h1",
    className: classes.contactDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    xs: 12,
    align: "center",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    sm: 10,
    md: 10,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "subtitle1",
    color: "inherit",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "nancy@addisontreehouse.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 12,
    sm: 10,
    md: 10,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "subtitle1",
    color: "inherit",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "(972) 450-7076"))))));
};

TreehouseContacts.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(TreehouseContacts));

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jacolbygreen/front-end-dev/TreeHouse/components/Footer.js";






var styles = function styles(theme) {
  return {
    root: {
      backgroundColor: 'rgba(89, 89, 91, 1.0)'
    },
    item: {
      marginTop: 50,
      marginBottom: 50
    },
    logo: {
      width: '50%',
      height: '100%'
    }
  };
};

var Footer = function Footer(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    xs: 12,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 4,
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    src: "/static/images/addison-network.png",
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 4,
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    src: "/static/images/dec-network.png",
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 4,
    className: classes.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    src: "/static/images/redbird-network.png",
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Footer));

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/jacolbygreen/front-end-dev/TreeHouse/components/Header.js";









 // Avatar is for testing to see if a loga can be added to a Material-UI AppBar

 // Using the material-ui Button for testing as a link to another page.
// const typograph = {
//   variant: 'h6',
//   color: 'secondary'
// }
// const style = {
//     width: '100px',
//     height: '100px'
// }

var styles = {
  root: {
    flexGrow: 1
  },
  title: {
    width: '50%'
  },
  logoAvatar: {
    width: 50,
    height: 50
  },
  appBar: {
    opacity: 0.9
  }
};

var Header = function Header(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "fixed",
    color: "primary",
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10___default.a, {
    src: "/static/images/addison-network.png",
    className: classes.logoAvatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    container: true,
    direction: "row",
    justify: "space-around",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true,
    xs: 12,
    style: {
      'textAlign': 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/benefits",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      "margin": '0px 20px 0px auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Benefits")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/events",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      "margin": '0px 20px 0px auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Events")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/interns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      "margin": '0px 20px 0px auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Interns")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(Header));

/***/ }),

/***/ "./components/IndexContent.js":
/*!************************************!*\
  !*** ./components/IndexContent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Contacts */ "./components/Contacts.js");
var _jsxFileName = "/Users/jacolbygreen/front-end-dev/TreeHouse/components/IndexContent.js";











var styles = function styles(theme) {
  return {
    root: {
      marginTop: 88
    },
    test: {
      backgroundColor: '#BAC256',
      opacity: 0.9
    },
    text: {
      padding: 15
    }
  };
};

var IndexContent = function IndexContent(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    xs: 12,
    justify: "center",
    className: classes.test,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    xs: 10,
    sm: 10,
    md: 10,
    lg: 10,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "headline",
    component: "div",
    paragraph: true,
    className: classes.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "The Addison TreeHouse is part of The DEC network and is a coworking space and 501c3 non-profit created to help entrepreneurs start, build, and grow companies through education, mentorship, and community."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contacts__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
};

IndexContent.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(IndexContent));

/***/ }),

/***/ "./lib/context.js":
/*!************************!*\
  !*** ./lib/context.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getContext; });
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "@material-ui/core/colors/blue");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "@material-ui/core/colors/grey");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_3__);




var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#b7c43f'
    },
    secondary: {
      main: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_3___default.a[700]
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(',')
  }
});

function createPageContext() {
  return {
    theme: theme,
    sheetsManager: new Map(),
    sheetsRegistry: new react_jss__WEBPACK_IMPORTED_MODULE_0__["SheetsRegistry"](),
    generateClassName: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createGenerateClassName"])()
  };
}

function getContext() {
  if (true) {
    return createPageContext();
  }

  if (!global.INIT_MATERIAL_UI) {
    global.INIT_MATERIAL_UI = createPageContext();
  }

  return global.INIT_MATERIAL_UI;
}

/***/ }),

/***/ "./lib/withLayout.js":
/*!***************************!*\
  !*** ./lib/withLayout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/context */ "./lib/context.js");
var _jsxFileName = "/Users/jacolbygreen/front-end-dev/TreeHouse/lib/withLayout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var withLayout = function withLayout(BaseComponent) {
  var App =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props, context) {
      var _this;

      _classCallCheck(this, App);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props, context));
      _this.pageContext = _this.props.pageContext || Object(_lib_context__WEBPACK_IMPORTED_MODULE_6__["default"])();
      return _this;
    }

    _createClass(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["MuiThemeProvider"], {
          theme: this.pageContext.theme,
          sheetsManager: this.pageContext.sheetsManager,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }))));
      }
    }]);

    return App;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
  /*
   *
   * The getInitialProps() can be use to check if the BaseComponent
   * has initial data, and if it does, then pass that data to props
   * of the App component.
   *
  */


  App.propTypes = {
    pageContext: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
  };
  App.defaultProps = {
    pageContext: null
  };

  App.getInitialProps = function (ctx) {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  };

  return App;
};

/* harmony default export */ __webpack_exports__["default"] = (withLayout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_withLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/withLayout */ "./lib/withLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Banner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Banner.js */ "./components/Banner.js");
/* harmony import */ var _components_IndexContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/IndexContent */ "./components/IndexContent.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/jacolbygreen/front-end-dev/TreeHouse/pages/index.js";






 // Import Posed to try an animation on the logo image.


var Box = react_pose__WEBPACK_IMPORTED_MODULE_7___default.a.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  }
});
var style = {
  width: '100%'
};

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2688446529",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2688446529",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Index page"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "This is the description of the Index page",
    className: "jsx-2688446529",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Banner_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_IndexContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2688446529",
    css: ".hero-img-container.jsx-2688446529{margin-top:100px;}.items.jsx-2688446529{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNvbGJ5Z3JlZW4vZnJvbnQtZW5kLWRldi9UcmVlSG91c2UvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNnQixBQUlNLEFBR0EsV0FBQyxNQUhBIiwiZmlsZSI6Ii9Vc2Vycy9qYWNvbGJ5Z3JlZW4vZnJvbnQtZW5kLWRldi9UcmVlSG91c2UvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aExheW91dCBmcm9tICcuLi9saWIvd2l0aExheW91dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyLmpzJztcbmltcG9ydCBJbmRleENvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleENvbnRlbnQnO1xuXG4vLyBJbXBvcnQgUG9zZWQgdG8gdHJ5IGFuIGFuaW1hdGlvbiBvbiB0aGUgbG9nbyBpbWFnZS5cbmltcG9ydCBwb3NlZCBmcm9tICdyZWFjdC1wb3NlJztcblxuXG5jb25zdCBCb3ggPSBwb3NlZC5kaXYoe1xuICBob3ZlcmFibGU6IHRydWUsXG4gIGluaXQ6IHtcbiAgICBzY2FsZTogMSxcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDBweCByZ2JhKDAsMCwwLDApJ1xuICB9LFxuICBob3Zlcjoge1xuICAgIHNjYWxlOiAxLjIsXG4gICAgYm94U2hhZG93OiAnMHB4IDVweCAxMHB4IHJnYmEoMCwwLDAsMC4yKSdcbiAgfVxufSk7XG5cbmNvbnN0IHN0eWxlID0ge1xuICB3aWR0aDogJzEwMCUnXG59XG5cblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+SW5kZXggcGFnZTwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhpcyBpcyB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIEluZGV4IHBhZ2VcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8QmFubmVyIC8+XG4gICAgPEluZGV4Q29udGVudCAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZXJvLWltZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweFxuICAgICAgfVxuICAgICAgLml0ZW1zIHtcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExheW91dChJbmRleCk7XG4iXX0= */\n/*@ sourceURL=/Users/jacolbygreen/front-end-dev/TreeHouse/pages/index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(Index));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/blue":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/blue" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blue");

/***/ }),

/***/ "@material-ui/core/colors/grey":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/grey" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/grey");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-jss":
/*!****************************!*\
  !*** external "react-jss" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map