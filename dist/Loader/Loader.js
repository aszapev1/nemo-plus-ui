"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Loader.css");
var _jsxRuntime = require("react/jsx-runtime");
var Loader = function Loader(_ref) {
  var className = _ref.className,
    size = _ref.size,
    variant = _ref.variant;
  var css = ['nemo-loader'];
  if (className) {
    css.push(className);
  }
  if (size) {
    css.push("nemo-loader--".concat(size));
  }
  if (variant) {
    css.push("nemo-loader--".concat(variant));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: css.join(' '),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "nemo-loader_trait"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "nemo-loader_trait"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "nemo-loader_trait"
    })]
  });
};
Loader.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf([16, 24, 40]).isRequired,
  variant: _propTypes.default.oneOf(['default', 'white', 'black']).isRequired
};
Loader.defaultProps = {
  size: 24,
  variant: 'default'
};
var _default = Loader;
exports.default = _default;