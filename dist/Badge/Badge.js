"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Badge.css");
var _jsxRuntime = require("react/jsx-runtime");
var Badge = function Badge(_ref) {
  var className = _ref.className,
    children = _ref.children,
    size = _ref.size,
    variant = _ref.variant;
  var css = ['nemo-badge'];
  if (className) {
    css.push(className);
  }
  if (size) {
    css.push("nemo-badge--".concat(size));
  }
  if (variant) {
    css.push("nemo-badge--".concat(variant));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: css.join(' '),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "font font-medium nemo-badge-children",
      children: children
    })
  });
};
Badge.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf([24, 32, 44]).isRequired,
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'negative', 'warning', 'info', 'light', 'dark']).isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
};
var _default = Badge;
exports.default = _default;