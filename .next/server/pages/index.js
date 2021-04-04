module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/FiltersArea/HorizontalSelector/index.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/FiltersArea/HorizontalSelector/index.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/FiltersArea/HorizontalSelector/styles.ts");
var _jsxFileName = "C:\\Users\\nsaza\\Desktop\\www\\SearchProject\\src\\components\\FiltersArea\\HorizontalSelector\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HorizontalSelector = props => {
  const {
    label,
    options,
    onFilterChange
  } = props;
  if (!options) return null;

  const onOptionClick = option => onFilterChange(label, option);

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["HorizontalSelector"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, label, ":", __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, options.map(option => __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Option"], {
    key: option,
    onClick: () => onOptionClick(option),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, option))));
};

/* harmony default export */ __webpack_exports__["default"] = (HorizontalSelector);

/***/ }),

/***/ "./src/components/FiltersArea/HorizontalSelector/styles.ts":
/*!*****************************************************************!*\
  !*** ./src/components/FiltersArea/HorizontalSelector/styles.ts ***!
  \*****************************************************************/
/*! exports provided: HorizontalSelector, List, Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalSelector", function() { return HorizontalSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HorizontalSelector = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__HorizontalSelector",
  componentId: "sc-1865qmg-0"
})(["display:flex;align-items:center;border-radius:20px;background:#ffffff;width:100%;font-size:18px;color:black;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__List",
  componentId: "sc-1865qmg-1"
})(["display:flex;overflow-x:auto;margin-left:20px;&::-webkit-scrollbar-track{background-color:white;}&::-webkit-scrollbar{height:6px;}&::-webkit-scrollbar-thumb{background-color:#06092b;border-radius:20px;}"]);
const Option = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Option",
  componentId: "sc-1865qmg-2"
})(["display:flex;align-items:center;background:#e4e8f1;border-radius:20px;width:100%;margin:4px;padding:18px 24px;white-space:nowrap;font-size:18px;color:black;cursor:pointer;"]);

/***/ }),

/***/ "./src/components/FiltersArea/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/FiltersArea/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HorizontalSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalSelector */ "./src/components/FiltersArea/HorizontalSelector/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/FiltersArea/styles.ts");
var _jsxFileName = "C:\\Users\\nsaza\\Desktop\\www\\SearchProject\\src\\components\\FiltersArea\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const FiltersArea = props => {
  const {
    filters,
    onFilterChange
  } = props;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["FiltersArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["SelectedFilters"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, filters.map(filter => filter.options.map(option => __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["SelectedOption"], {
    key: option,
    onClick: () => onFilterChange(filter.category, option),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, option, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["CloseIcon"], {
    src: "img/close.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }))))), __jsx(_HorizontalSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "\u0413\u043E\u0440\u043E\u0434",
    options: ['Москва', 'Санкт-Петербург'],
    onFilterChange: onFilterChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FiltersArea);

/***/ }),

/***/ "./src/components/FiltersArea/styles.ts":
/*!**********************************************!*\
  !*** ./src/components/FiltersArea/styles.ts ***!
  \**********************************************/
/*! exports provided: FiltersArea, SelectedFilters, SelectedOption, CloseIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersArea", function() { return FiltersArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedFilters", function() { return SelectedFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedOption", function() { return SelectedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FiltersArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__FiltersArea",
  componentId: "seztzd-0"
})(["display:flex;flex-direction:column;align-items:center;border-radius:20px;background:#ffffff;width:70%;max-height:60%;margin-top:10px;padding:24px;color:black;"]);
const SelectedFilters = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SelectedFilters",
  componentId: "seztzd-1"
})(["display:flex;width:100%;"]);
const SelectedOption = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SelectedOption",
  componentId: "seztzd-2"
})(["display:flex;align-items:center;justify-content:flex-start;padding:0 5px;margin:0 2px 10px;border:1px dashed black;border-radius:5px;color:black;font-weight:500;font-size:16px;line-height:22px;cursor:pointer;"]);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styles__CloseIcon",
  componentId: "seztzd-3"
})(["display:inline-block;height:14px;margin-left:8px;"]);

/***/ }),

/***/ "./src/components/Main/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Main/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SearchArea */ "./src/components/SearchArea/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Main/styles.ts");
/* harmony import */ var _SearchResultsArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SearchResultsArea */ "./src/components/SearchResultsArea/index.tsx");
/* harmony import */ var _FiltersArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FiltersArea */ "./src/components/FiltersArea/index.tsx");
var _jsxFileName = "C:\\Users\\nsaza\\Desktop\\www\\SearchProject\\src\\components\\Main\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Main = () => {
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: filtersOpen,
    1: setFiltersOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onDropdownButtonClick = () => setFiltersOpen(!filtersOpen);

  const {
    0: filters,
    1: setFilters
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const onFilterChange = (category, option) => {
    const newFiltersState = [...filters];
    const filter = filters.find(filter => filter.category === category);

    if (!filter) {
      newFiltersState.push({
        category,
        options: [option]
      });
      setFilters([...filters, {
        category,
        options: [option]
      }]);
      return;
    }

    const indexOfOption = filter.options.indexOf(option);

    if (indexOfOption !== -1) {
      filter.options.splice(indexOfOption, 1);
    } else {
      filter.options = [...filter.options, option];
    }

    const newArr = newFiltersState.map(_filter => _filter.category === category ? filter : _filter);
    setFilters(newArr);
  };

  const onQueryChange = val => {
    setQuery(val);
    if (val.length >= 3) makeSearch(val);else setResults([]);
  };

  const {
    0: results,
    1: setResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const makeSearch = async query => {
    setLoading(true);
    const url = 'https://localhost:44302/api/Data?query=' + query;
    await fetch(url).then(res => res.json()).then(res => {
      setResults(JSON.parse(res));
      setLoading(false);
    });
  };

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_SearchArea__WEBPACK_IMPORTED_MODULE_1__["default"], {
    query: query,
    setQuery: onQueryChange,
    onDropdownButtonClick: onDropdownButtonClick,
    onSearchButtonClick: makeSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), filtersOpen && __jsx(_FiltersArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    filters: filters,
    onFilterChange: onFilterChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), results.length > 0 && __jsx(_SearchResultsArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    results: results,
    loading: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/Main/styles.ts":
/*!***************************************!*\
  !*** ./src/components/Main/styles.ts ***!
  \***************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1wgt1ms-0"
})(["background-color:#06092b;color:#fff;width:100%;height:100%;padding:3rem;display:flex;flex-direction:column;text-align:center;align-items:center;justify-content:center;"]);

/***/ }),

/***/ "./src/components/SearchArea/DropdownButton/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/SearchArea/DropdownButton/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/SearchArea/DropdownButton/styles.ts");
var _jsxFileName = "C:\\Users\\nsaza\\Desktop\\www\\SearchProject\\src\\components\\SearchArea\\DropdownButton\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DropdownButton = props => {
  const {
    children,
    onClick
  } = props;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, children, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ArrowImg"], {
    src: "img/chevron.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DropdownButton);

/***/ }),

/***/ "./src/components/SearchArea/DropdownButton/styles.ts":
/*!************************************************************!*\
  !*** ./src/components/SearchArea/DropdownButton/styles.ts ***!
  \************************************************************/
/*! exports provided: Button, ArrowImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowImg", function() { return ArrowImg; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Button",
  componentId: "aeczd2-0"
})(["display:flex;justify-content:space-between;align-items:center;flex:3;border:2px solid #e4e8f1;border-radius:12px;margin:0 16px;padding:24px;color:black;font-weight:500;font-size:20px;line-height:26px;cursor:pointer;"]);
const ArrowImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styles__ArrowImg",
  componentId: "aeczd2-1"
})(["display:inline-block;height:14px;"]);

/***/ }),

/***/ "./src/components/SearchArea/SearchButton/index.tsx":
/*!**********************************************************!*\
  !*** ./src/components/SearchArea/SearchButton/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/SearchArea/SearchButton/styles.ts");
var _jsxFileName = "C:\\Users\\nsaza\\Desktop\\www\\SearchProject\\src\\components\\SearchArea\\SearchButton\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SearchButton = props => {
  const {
    children,
    onClick
  } = props;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchButton);

/***/ }),

/***/ "./src/components/SearchArea/SearchButton/styles.ts":
/*!**********************************************************!*\
  !*** ./src/components/SearchArea/SearchButton/styles.ts ***!
  \**********************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Button",
  componentId: "jzga18-0"
})(["display:inline-block;background-color:black;border-radius:12px;padding:24px;color:white;font-weight:500;font-size:20px;line-height:26px;cursor:pointer;"]);

/***/ }),

/***/ "./src/components/SearchArea/SearchInput/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/SearchArea/SearchInput/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/SearchArea/SearchInput/styles.ts");
var _jsxFileName = "C:\\Users\\nsaza\\Desktop\\www\\SearchProject\\src\\components\\SearchArea\\SearchInput\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SearchInput = props => {
  const {
    value,
    onChange
  } = props;
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const onClick = () => {
    var _ref$current;

    return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus();
  };

  const handleInputChange = e => {
    onChange(e.target.value);
  };

  const clearInput = () => onChange('');

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["MagnifierIcon"], {
    src: "img/magnifier.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: value,
    onChange: handleInputChange,
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["ClearIcon"], {
    src: "img/delete.svg",
    onClick: clearInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

/***/ }),

/***/ "./src/components/SearchArea/SearchInput/styles.ts":
/*!*********************************************************!*\
  !*** ./src/components/SearchArea/SearchInput/styles.ts ***!
  \*********************************************************/
/*! exports provided: Wrapper, MagnifierIcon, Input, ClearIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnifierIcon", function() { return MagnifierIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearIcon", function() { return ClearIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1rosj42-0"
})(["display:flex;align-items:center;flex:10;background:#e4e8f1;border-radius:12px;padding:24px;color:black;cursor:text;"]);
const MagnifierIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styles__MagnifierIcon",
  componentId: "sc-1rosj42-1"
})(["display:inline-block;height:16px;margin:8px 8px 8px 0;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "styles__Input",
  componentId: "sc-1rosj42-2"
})(["height:100%;width:100%;border:none;background:inherit;outline:none;font-weight:500;font-size:20px;line-height:26px;"]);
const ClearIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styles__ClearIcon",
  componentId: "sc-1rosj42-3"
})(["display:inline-block;height:20px;margin:8px 0 8px 8px;cursor:pointer;"]);

/***/ }),

/***/ "./src/components/SearchArea/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/SearchArea/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DropdownButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownButton */ "./src/components/SearchArea/DropdownButton/index.tsx");
/* harmony import */ var _SearchButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchButton */ "./src/components/SearchArea/SearchButton/index.tsx");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchInput */ "./src/components/SearchArea/SearchInput/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/SearchArea/styles.ts");
var _jsxFileName = "C:\\Users\\nsaza\\Desktop\\www\\SearchProject\\src\\components\\SearchArea\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SearchArea = props => {
  const {
    query,
    setQuery,
    onDropdownButtonClick,
    onSearchButtonClick
  } = props;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_SearchInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: query,
    onChange: setQuery,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(_DropdownButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: onDropdownButtonClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Filters"), __jsx(_SearchButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onSearchButtonClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Search"));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchArea);

/***/ }),

/***/ "./src/components/SearchArea/styles.ts":
/*!*********************************************!*\
  !*** ./src/components/SearchArea/styles.ts ***!
  \*********************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "jhxiu7-0"
})(["display:flex;align-items:center;background:#ffffff;border-radius:20px;width:70%;padding:24px;"]);

/***/ }),

/***/ "./src/components/SearchResult/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SearchResult/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/SearchResult/styles.ts");
var _jsxFileName = "C:\\Users\\nsaza\\Desktop\\www\\SearchProject\\src\\components\\SearchResult\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SearchResult = props => {
  const {
    result
  } = props;
  return (// <Link
    //   as={'/about/' + result}
    //   href={{
    //     pathname: '/about',
    //     query: {
    //       name: result.name,
    //       logo: result.logo,
    //       photo: result.photo,
    //       descriptions: result.descriptions
    //     }
    //   }}
    // >
    __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["SearchResult"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }
    }, result) // </Link>

  );
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResult);

/***/ }),

/***/ "./src/components/SearchResult/styles.ts":
/*!***********************************************!*\
  !*** ./src/components/SearchResult/styles.ts ***!
  \***********************************************/
/*! exports provided: SearchResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResult", function() { return SearchResult; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SearchResult = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SearchResult",
  componentId: "oze8is-0"
})(["display:flex;align-items:center;background:#e4e8f1;border-radius:20px;width:100%;margin:4px;padding:18px 24px;text-align:left;font-size:18px;color:black;cursor:pointer;"]);

/***/ }),

/***/ "./src/components/SearchResultsArea/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/SearchResultsArea/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Spinner */ "./src/components/Spinner/index.tsx");
/* harmony import */ var _SearchResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchResult */ "./src/components/SearchResult/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/SearchResultsArea/styles.ts");
var _jsxFileName = "C:\\Users\\nsaza\\Desktop\\www\\SearchProject\\src\\components\\SearchResultsArea\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SearchResultsArea = props => {
  const {
    results,
    loading = true
  } = props;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["SearchResultsArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, loading ? __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["SpinnerWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  })) : __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ScrollableArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, results.map(result => __jsx(_SearchResult__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: result,
    result: result,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResultsArea);

/***/ }),

/***/ "./src/components/SearchResultsArea/styles.ts":
/*!****************************************************!*\
  !*** ./src/components/SearchResultsArea/styles.ts ***!
  \****************************************************/
/*! exports provided: SearchResultsArea, SpinnerWrapper, ScrollableArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsArea", function() { return SearchResultsArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerWrapper", function() { return SpinnerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableArea", function() { return ScrollableArea; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SearchResultsArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SearchResultsArea",
  componentId: "sc-14wn3bq-0"
})(["display:flex;flex-direction:column;align-items:center;border-radius:20px;background:#ffffff;width:70%;max-height:60%;margin-top:10px;padding:24px;"]);
const SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SpinnerWrapper",
  componentId: "sc-14wn3bq-1"
})(["margin:155px;"]);
const ScrollableArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ScrollableArea",
  componentId: "sc-14wn3bq-2"
})(["height:100%;width:100%;margin-right:16px;overflow-y:auto;overflow-x:hidden;&::-webkit-scrollbar-track{background-color:white;}&::-webkit-scrollbar{width:6px;}&::-webkit-scrollbar-thumb{background-color:#06092b;border-radius:20px;}"]);

/***/ }),

/***/ "./src/components/Spinner/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Spinner/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Spinner/styles.ts");
var _jsxFileName = "C:\\Users\\nsaza\\Desktop\\www\\SearchProject\\src\\components\\Spinner\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Spinner = () => {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["SpinnerWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Block"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/components/Spinner/styles.ts":
/*!******************************************!*\
  !*** ./src/components/Spinner/styles.ts ***!
  \******************************************/
/*! exports provided: SpinnerWrapper, Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerWrapper", function() { return SpinnerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SpinnerWrapper",
  componentId: "sc-3rguso-0"
})(["color:official;display:inline-block;position:relative;width:80px;height:80px;"]);
const ldsSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
const Block = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Block",
  componentId: "sc-3rguso-1"
})(["transform-origin:40px 40px;animation:", " 1.2s linear infinite;&:after{content:' ';display:block;position:absolute;top:3px;left:37px;width:6px;height:18px;border-radius:20%;background:#06092b;}&:nth-child(1){transform:rotate(0deg);animation-delay:-1.1s;}&:nth-child(2){transform:rotate(30deg);animation-delay:-1s;}&:nth-child(3){transform:rotate(60deg);animation-delay:-0.9s;}&:nth-child(4){transform:rotate(90deg);animation-delay:-0.8s;}&:nth-child(5){transform:rotate(120deg);animation-delay:-0.7s;}&:nth-child(6){transform:rotate(150deg);animation-delay:-0.6s;}&:nth-child(7){transform:rotate(180deg);animation-delay:-0.5s;}&:nth-child(8){transform:rotate(210deg);animation-delay:-0.4s;}&:nth-child(9){transform:rotate(240deg);animation-delay:-0.3s;}&:nth-child(10){transform:rotate(270deg);animation-delay:-0.2s;}&:nth-child(11){transform:rotate(300deg);animation-delay:-0.1s;}&:nth-child(12){transform:rotate(330deg);animation-delay:0s;}"], ldsSpinner);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Main */ "./src/components/Main/index.tsx");
var _jsxFileName = "C:\\Users\\nsaza\\Desktop\\www\\SearchProject\\src\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Home() {
  return __jsx(components_Main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  });
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyc0FyZWEvSG9yaXpvbnRhbFNlbGVjdG9yL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJzQXJlYS9Ib3Jpem9udGFsU2VsZWN0b3Ivc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZpbHRlcnNBcmVhL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJzQXJlYS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQXJlYS9Ecm9wZG93bkJ1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQXJlYS9Ecm9wZG93bkJ1dHRvbi9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQXJlYS9TZWFyY2hCdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEFyZWEvU2VhcmNoQnV0dG9uL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhL1NlYXJjaElucHV0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhL1NlYXJjaElucHV0L3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hSZXN1bHQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0c0FyZWEvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNBcmVhL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGlubmVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGlubmVyL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJIb3Jpem9udGFsU2VsZWN0b3IiLCJwcm9wcyIsImxhYmVsIiwib3B0aW9ucyIsIm9uRmlsdGVyQ2hhbmdlIiwib25PcHRpb25DbGljayIsIm9wdGlvbiIsIm1hcCIsInN0eWxlZCIsImRpdiIsIkxpc3QiLCJPcHRpb24iLCJGaWx0ZXJzQXJlYSIsImZpbHRlcnMiLCJmaWx0ZXIiLCJjYXRlZ29yeSIsIlNlbGVjdGVkRmlsdGVycyIsIlNlbGVjdGVkT3B0aW9uIiwiQ2xvc2VJY29uIiwiaW1nIiwiTWFpbiIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmlsdGVyc09wZW4iLCJzZXRGaWx0ZXJzT3BlbiIsIm9uRHJvcGRvd25CdXR0b25DbGljayIsInNldEZpbHRlcnMiLCJuZXdGaWx0ZXJzU3RhdGUiLCJmaW5kIiwicHVzaCIsImluZGV4T2ZPcHRpb24iLCJpbmRleE9mIiwic3BsaWNlIiwibmV3QXJyIiwiX2ZpbHRlciIsIm9uUXVlcnlDaGFuZ2UiLCJ2YWwiLCJsZW5ndGgiLCJtYWtlU2VhcmNoIiwic2V0UmVzdWx0cyIsInJlc3VsdHMiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiV3JhcHBlciIsIm1haW4iLCJEcm9wZG93bkJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsIkJ1dHRvbiIsIkFycm93SW1nIiwiU2VhcmNoQnV0dG9uIiwiU2VhcmNoSW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicmVmIiwidXNlUmVmIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2xlYXJJbnB1dCIsIk1hZ25pZmllckljb24iLCJJbnB1dCIsImlucHV0IiwiQ2xlYXJJY29uIiwiU2VhcmNoQXJlYSIsIm9uU2VhcmNoQnV0dG9uQ2xpY2siLCJTZWFyY2hSZXN1bHQiLCJyZXN1bHQiLCJTZWFyY2hSZXN1bHRzQXJlYSIsIlNwaW5uZXJXcmFwcGVyIiwiU2Nyb2xsYWJsZUFyZWEiLCJTcGlubmVyIiwibGRzU3Bpbm5lciIsImtleWZyYW1lcyIsIkJsb2NrIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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LHU3QkFFSHlFLFVBRkcsQ0FBWCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CUDtBQUVlLFNBQVNHLElBQVQsR0FBZ0I7QUFDN0IsU0FBTyxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDSkQsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBsYWJlbDogc3RyaW5nXHJcbiAgb3B0aW9uczogc3RyaW5nW11cclxuICBvbkZpbHRlckNoYW5nZTogKGNhdGVnb3J5OiBzdHJpbmcsIG9wdGlvbjogc3RyaW5nKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEhvcml6b250YWxTZWxlY3RvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBsYWJlbCwgb3B0aW9ucywgb25GaWx0ZXJDaGFuZ2UgfSA9IHByb3BzXHJcblxyXG4gIGlmICghb3B0aW9ucykgcmV0dXJuIG51bGxcclxuXHJcbiAgY29uc3Qgb25PcHRpb25DbGljayA9IChvcHRpb246IHN0cmluZykgPT4gb25GaWx0ZXJDaGFuZ2UobGFiZWwsIG9wdGlvbilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTLkhvcml6b250YWxTZWxlY3Rvcj5cclxuICAgICAge2xhYmVsfTpcclxuICAgICAgPFMuTGlzdD5cclxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgPFMuT3B0aW9uIGtleT17b3B0aW9ufSBvbkNsaWNrPXsoKSA9PiBvbk9wdGlvbkNsaWNrKG9wdGlvbil9PlxyXG4gICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgPC9TLk9wdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TLkxpc3Q+XHJcbiAgICA8L1MuSG9yaXpvbnRhbFNlbGVjdG9yPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbFNlbGVjdG9yXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgSG9yaXpvbnRhbFNlbGVjdG9yID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwOTJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBPcHRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZDogI2U0ZThmMTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDRweDtcclxuICBwYWRkaW5nOiAxOHB4IDI0cHg7XHJcblxyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuIiwiaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAndHlwZXMvRmlsdGVyJ1xyXG5pbXBvcnQgSG9yaXpvbnRhbFNlbGVjdG9yIGZyb20gJy4vSG9yaXpvbnRhbFNlbGVjdG9yJ1xyXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBmaWx0ZXJzOiBGaWx0ZXJbXVxyXG4gIG9uRmlsdGVyQ2hhbmdlOiAoY2F0ZWdvcnk6IHN0cmluZywgb3B0aW9uOiBzdHJpbmcpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgRmlsdGVyc0FyZWE6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZmlsdGVycywgb25GaWx0ZXJDaGFuZ2UgfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxTLkZpbHRlcnNBcmVhPlxyXG4gICAgICA8Uy5TZWxlY3RlZEZpbHRlcnM+XHJcbiAgICAgICAge2ZpbHRlcnMubWFwKChmaWx0ZXIpID0+XHJcbiAgICAgICAgICBmaWx0ZXIub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICA8Uy5TZWxlY3RlZE9wdGlvblxyXG4gICAgICAgICAgICAgIGtleT17b3B0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRmlsdGVyQ2hhbmdlKGZpbHRlci5jYXRlZ29yeSwgb3B0aW9uKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgICAgPFMuQ2xvc2VJY29uIHNyYz1cImltZy9jbG9zZS5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L1MuU2VsZWN0ZWRPcHRpb24+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUy5TZWxlY3RlZEZpbHRlcnM+XHJcblxyXG4gICAgICA8SG9yaXpvbnRhbFNlbGVjdG9yXHJcbiAgICAgICAgbGFiZWw9XCLQk9C+0YDQvtC0XCJcclxuICAgICAgICBvcHRpb25zPXtbJ9Cc0L7RgdC60LLQsCcsICfQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsyddfVxyXG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlPXtvbkZpbHRlckNoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvUy5GaWx0ZXJzQXJlYT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnNBcmVhXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVyc0FyZWEgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblxyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWF4LWhlaWdodDogNjAlO1xyXG5cclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcblxyXG4gIGNvbG9yOiBibGFjaztcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdGVkRmlsdGVycyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdGVkT3B0aW9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBtYXJnaW46IDAgMnB4IDEwcHg7XHJcblxyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDbG9zZUljb24gPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuYFxyXG4iLCJpbXBvcnQgU2VhcmNoQXJlYSBmcm9tICcuLi9TZWFyY2hBcmVhJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xyXG5pbXBvcnQgU2VhcmNoUmVzdWx0c0FyZWEgZnJvbSAnLi4vU2VhcmNoUmVzdWx0c0FyZWEnXHJcbmltcG9ydCBGaWx0ZXJzQXJlYSBmcm9tICcuLi9GaWx0ZXJzQXJlYSdcclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAndHlwZXMvRmlsdGVyJ1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICBjb25zdCBbZmlsdGVyc09wZW4sIHNldEZpbHRlcnNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IG9uRHJvcGRvd25CdXR0b25DbGljayA9ICgpID0+IHNldEZpbHRlcnNPcGVuKCFmaWx0ZXJzT3BlbilcclxuXHJcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGU8RmlsdGVyW10+KFtdKVxyXG4gIGNvbnN0IG9uRmlsdGVyQ2hhbmdlID0gKGNhdGVnb3J5OiBzdHJpbmcsIG9wdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBuZXdGaWx0ZXJzU3RhdGU6IEZpbHRlcltdID0gWy4uLmZpbHRlcnNdXHJcblxyXG4gICAgY29uc3QgZmlsdGVyID0gZmlsdGVycy5maW5kKChmaWx0ZXIpID0+IGZpbHRlci5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpXHJcbiAgICBpZiAoIWZpbHRlcikge1xyXG4gICAgICBuZXdGaWx0ZXJzU3RhdGUucHVzaCh7IGNhdGVnb3J5LCBvcHRpb25zOiBbb3B0aW9uXSB9KVxyXG4gICAgICBzZXRGaWx0ZXJzKFsuLi5maWx0ZXJzLCB7IGNhdGVnb3J5LCBvcHRpb25zOiBbb3B0aW9uXSB9XSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5kZXhPZk9wdGlvbiA9IGZpbHRlci5vcHRpb25zLmluZGV4T2Yob3B0aW9uKVxyXG4gICAgaWYgKGluZGV4T2ZPcHRpb24gIT09IC0xKSB7XHJcbiAgICAgIGZpbHRlci5vcHRpb25zLnNwbGljZShpbmRleE9mT3B0aW9uLCAxKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyLm9wdGlvbnMgPSBbLi4uZmlsdGVyLm9wdGlvbnMsIG9wdGlvbl1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdBcnIgPSBuZXdGaWx0ZXJzU3RhdGUubWFwKChfZmlsdGVyKSA9PlxyXG4gICAgICBfZmlsdGVyLmNhdGVnb3J5ID09PSBjYXRlZ29yeSA/IGZpbHRlciA6IF9maWx0ZXJcclxuICAgIClcclxuICAgIHNldEZpbHRlcnMobmV3QXJyKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25RdWVyeUNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0UXVlcnkodmFsKVxyXG4gICAgaWYgKHZhbC5sZW5ndGggPj0gMykgbWFrZVNlYXJjaCh2YWwpXHJcbiAgICBlbHNlIHNldFJlc3VsdHMoW10pXHJcbiAgfVxyXG5cclxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXHJcbiAgY29uc3QgbWFrZVNlYXJjaCA9IGFzeW5jIChxdWVyeT86IHN0cmluZykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vbG9jYWxob3N0OjQ0MzAyL2FwaS9EYXRhP3F1ZXJ5PScgKyBxdWVyeVxyXG4gICAgYXdhaXQgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0UmVzdWx0cyhKU09OLnBhcnNlKHJlcykpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Uy5XcmFwcGVyPlxyXG4gICAgICA8U2VhcmNoQXJlYVxyXG4gICAgICAgIHF1ZXJ5PXtxdWVyeX1cclxuICAgICAgICBzZXRRdWVyeT17b25RdWVyeUNoYW5nZX1cclxuICAgICAgICBvbkRyb3Bkb3duQnV0dG9uQ2xpY2s9e29uRHJvcGRvd25CdXR0b25DbGlja31cclxuICAgICAgICBvblNlYXJjaEJ1dHRvbkNsaWNrPXttYWtlU2VhcmNofVxyXG4gICAgICAvPlxyXG4gICAgICB7ZmlsdGVyc09wZW4gJiYgKFxyXG4gICAgICAgIDxGaWx0ZXJzQXJlYSBmaWx0ZXJzPXtmaWx0ZXJzfSBvbkZpbHRlckNoYW5nZT17b25GaWx0ZXJDaGFuZ2V9IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtyZXN1bHRzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxTZWFyY2hSZXN1bHRzQXJlYSByZXN1bHRzPXtyZXN1bHRzfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9TLldyYXBwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5tYWluYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjA5MmI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcbiIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbiAgb25DbGljazogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBEcm9wZG93bkJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgb25DbGljayB9ID0gcHJvcHNcclxuICByZXR1cm4gKFxyXG4gICAgPFMuQnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxTLkFycm93SW1nIHNyYz1cImltZy9jaGV2cm9uLnN2Z1wiIC8+XHJcbiAgICA8L1MuQnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25CdXR0b25cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMztcclxuXHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U0ZThmMTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuICBtYXJnaW46IDAgMTZweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG5cclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQXJyb3dJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDE0cHg7XHJcbmBcclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxuICBvbkNsaWNrOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IFNlYXJjaEJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgb25DbGljayB9ID0gcHJvcHNcclxuICByZXR1cm4gPFMuQnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PntjaGlsZHJlbn08L1MuQnV0dG9uPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCdXR0b25cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuICBwYWRkaW5nOiAyNHB4O1xyXG5cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcbiIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB2YWx1ZTogc3RyaW5nXHJcbiAgb25DaGFuZ2U6ICh2YWw6IHN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBTZWFyY2hJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB2YWx1ZSwgb25DaGFuZ2UgfSA9IHByb3BzXHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXHJcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHJlZi5jdXJyZW50Py5mb2N1cygpXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBjbGVhcklucHV0ID0gKCkgPT4gb25DaGFuZ2UoJycpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Uy5XcmFwcGVyIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICA8Uy5NYWduaWZpZXJJY29uIHNyYz1cImltZy9tYWduaWZpZXIuc3ZnXCIgLz5cclxuICAgICAgPFMuSW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHJlZj17cmVmfSAvPlxyXG4gICAgICA8Uy5DbGVhckljb24gc3JjPVwiaW1nL2RlbGV0ZS5zdmdcIiBvbkNsaWNrPXtjbGVhcklucHV0fSAvPlxyXG4gICAgPC9TLldyYXBwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJbnB1dFxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAxMDtcclxuXHJcbiAgYmFja2dyb3VuZDogI2U0ZThmMTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuICBwYWRkaW5nOiAyNHB4O1xyXG5cclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiB0ZXh0O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTWFnbmlmaWVySWNvbiA9IHN0eWxlZC5pbWdgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMTZweDtcclxuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2xlYXJJY29uID0gc3R5bGVkLmltZ2BcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDAgOHB4IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuIiwiaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nXHJcbmltcG9ydCBTZWFyY2hCdXR0b24gZnJvbSAnLi9TZWFyY2hCdXR0b24nXHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuL1NlYXJjaElucHV0J1xyXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBxdWVyeTogc3RyaW5nXHJcbiAgc2V0UXVlcnk6ICh2YWw6IHN0cmluZykgPT4gdm9pZFxyXG4gIG9uRHJvcGRvd25CdXR0b25DbGljazogKCkgPT4gdm9pZFxyXG4gIG9uU2VhcmNoQnV0dG9uQ2xpY2s6ICgpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgU2VhcmNoQXJlYTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSwgc2V0UXVlcnksIG9uRHJvcGRvd25CdXR0b25DbGljaywgb25TZWFyY2hCdXR0b25DbGljayB9ID0gcHJvcHNcclxuICByZXR1cm4gKFxyXG4gICAgPFMuV3JhcHBlcj5cclxuICAgICAgPFNlYXJjaElucHV0IHZhbHVlPXtxdWVyeX0gb25DaGFuZ2U9e3NldFF1ZXJ5fSAvPlxyXG4gICAgICA8RHJvcGRvd25CdXR0b24gb25DbGljaz17b25Ecm9wZG93bkJ1dHRvbkNsaWNrfT5GaWx0ZXJzPC9Ecm9wZG93bkJ1dHRvbj5cclxuICAgICAgPFNlYXJjaEJ1dHRvbiBvbkNsaWNrPXtvblNlYXJjaEJ1dHRvbkNsaWNrfT5TZWFyY2g8L1NlYXJjaEJ1dHRvbj5cclxuICAgIDwvUy5XcmFwcGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQXJlYVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICB3aWR0aDogNzAlO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbmBcclxuIiwiaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcydcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgcmVzdWx0OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgU2VhcmNoUmVzdWx0OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHJlc3VsdCB9ID0gcHJvcHNcclxuICByZXR1cm4gKFxyXG4gICAgLy8gPExpbmtcclxuICAgIC8vICAgYXM9eycvYWJvdXQvJyArIHJlc3VsdH1cclxuICAgIC8vICAgaHJlZj17e1xyXG4gICAgLy8gICAgIHBhdGhuYW1lOiAnL2Fib3V0JyxcclxuICAgIC8vICAgICBxdWVyeToge1xyXG4gICAgLy8gICAgICAgbmFtZTogcmVzdWx0Lm5hbWUsXHJcbiAgICAvLyAgICAgICBsb2dvOiByZXN1bHQubG9nbyxcclxuICAgIC8vICAgICAgIHBob3RvOiByZXN1bHQucGhvdG8sXHJcbiAgICAvLyAgICAgICBkZXNjcmlwdGlvbnM6IHJlc3VsdC5kZXNjcmlwdGlvbnNcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH19XHJcbiAgICAvLyA+XHJcbiAgICA8Uy5TZWFyY2hSZXN1bHQ+e3Jlc3VsdH08L1MuU2VhcmNoUmVzdWx0PlxyXG4gICAgLy8gPC9MaW5rPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoUmVzdWx0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJhY2tncm91bmQ6ICNlNGU4ZjE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgcGFkZGluZzogMThweCAyNHB4O1xyXG5cclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcbiIsImltcG9ydCBTcGlubmVyIGZyb20gJy4uL1NwaW5uZXInXHJcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi4vU2VhcmNoUmVzdWx0J1xyXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICByZXN1bHRzOiBzdHJpbmdbXVxyXG4gIGxvYWRpbmc6IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgU2VhcmNoUmVzdWx0c0FyZWE6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcmVzdWx0cywgbG9hZGluZyA9IHRydWUgfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxTLlNlYXJjaFJlc3VsdHNBcmVhPlxyXG4gICAgICB7LyogPFMuU3Bpbm5lcldyYXBwZXI+XHJcbiAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgPC9TLlNwaW5uZXJXcmFwcGVyPiAqL31cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPFMuU3Bpbm5lcldyYXBwZXI+XHJcbiAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgIDwvUy5TcGlubmVyV3JhcHBlcj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Uy5TY3JvbGxhYmxlQXJlYT5cclxuICAgICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0KSA9PiAoXHJcbiAgICAgICAgICAgIDxTZWFyY2hSZXN1bHQga2V5PXtyZXN1bHR9IHJlc3VsdD17cmVzdWx0fSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TLlNjcm9sbGFibGVBcmVhPlxyXG4gICAgICApfVxyXG4gICAgPC9TLlNlYXJjaFJlc3VsdHNBcmVhPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0c0FyZWFcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hSZXN1bHRzQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXgtaGVpZ2h0OiA2MCU7XHJcblxyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNwaW5uZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDE1NXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNjcm9sbGFibGVBcmVhID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDkyYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG5gXHJcbiIsImltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5jb25zdCBTcGlubmVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFMuU3Bpbm5lcldyYXBwZXI+XHJcbiAgICAgIDxTLkJsb2NrPjwvUy5CbG9jaz5cclxuICAgICAgPFMuQmxvY2s+PC9TLkJsb2NrPlxyXG4gICAgICA8Uy5CbG9jaz48L1MuQmxvY2s+XHJcbiAgICAgIDxTLkJsb2NrPjwvUy5CbG9jaz5cclxuICAgICAgPFMuQmxvY2s+PC9TLkJsb2NrPlxyXG4gICAgICA8Uy5CbG9jaz48L1MuQmxvY2s+XHJcbiAgICAgIDxTLkJsb2NrPjwvUy5CbG9jaz5cclxuICAgICAgPFMuQmxvY2s+PC9TLkJsb2NrPlxyXG4gICAgICA8Uy5CbG9jaz48L1MuQmxvY2s+XHJcbiAgICAgIDxTLkJsb2NrPjwvUy5CbG9jaz5cclxuICAgICAgPFMuQmxvY2s+PC9TLkJsb2NrPlxyXG4gICAgICA8Uy5CbG9jaz48L1MuQmxvY2s+XHJcbiAgICA8L1MuU3Bpbm5lcldyYXBwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyXHJcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgU3Bpbm5lcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiBvZmZpY2lhbDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuYFxyXG5cclxuY29uc3QgbGRzU3Bpbm5lciA9IGtleWZyYW1lc2BcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcclxuICBhbmltYXRpb246ICR7bGRzU3Bpbm5lcn0gMS4ycyBsaW5lYXIgaW5maW5pdGU7XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIGxlZnQ6IDM3cHg7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgYmFja2dyb3VuZDogIzA2MDkyYjtcclxuICB9XHJcblxyXG4gICY6bnRoLWNoaWxkKDEpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICB9XHJcbiAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbiAgfVxyXG4gICY6bnRoLWNoaWxkKDMpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgfVxyXG4gICY6bnRoLWNoaWxkKDQpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgfVxyXG4gICY6bnRoLWNoaWxkKDUpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xyXG4gIH1cclxuICAmOm50aC1jaGlsZCg2KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcclxuICB9XHJcbiAgJjpudGgtY2hpbGQoNykge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XHJcbiAgfVxyXG4gICY6bnRoLWNoaWxkKDgpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gIH1cclxuICAmOm50aC1jaGlsZCg5KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxuICB9XHJcbiAgJjpudGgtY2hpbGQoMTApIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjJzO1xyXG4gIH1cclxuICAmOm50aC1jaGlsZCgxMSkge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7XHJcbiAgfVxyXG4gICY6bnRoLWNoaWxkKDEyKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICB9XHJcbmBcclxuIiwiaW1wb3J0IE1haW4gZnJvbSAnY29tcG9uZW50cy9NYWluJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gPE1haW4gLz5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9