"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Link.css");
var _jsxRuntime = require("react/jsx-runtime");
var Link = function Link(_ref) {
  var children = _ref.children,
    href = _ref.href,
    size = _ref.size,
    className = _ref.className,
    variant = _ref.variant,
    onClick = _ref.onClick;
  var css = ['nemo-link'];
  if (className) {
    css.push(className);
  }
  if (size) {
    css.push("nemo-link--".concat(size));
  }
  if (variant) {
    css.push("nemo-link--".concat(variant));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: css.join(' '),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: "nemo-link--component",
      href: href,
      onClick: onClick || null,
      children: children
    })
  });
};
Link.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf([16, 20, 24]).isRequired,
  variant: _propTypes.default.oneOf(['primary', 'secondary']).isRequired,
  href: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Link;
exports.default = _default;