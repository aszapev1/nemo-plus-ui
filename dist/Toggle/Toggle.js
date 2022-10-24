"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Toggle.css");
var _jsxRuntime = require("react/jsx-runtime");
var Toggle = function Toggle(_ref) {
  var className = _ref.className,
    size = _ref.size,
    disabled = _ref.disabled,
    checked = _ref.checked,
    onChange = _ref.onChange;
  var css = ['nemo-toggle'];
  if (className) {
    css.push(className);
  }
  if (size) {
    css.push("nemo-toggle--".concat(size));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    className: css.join(' '),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "checkbox",
      disabled: disabled,
      checked: checked,
      onChange: onChange
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "nemo-toggle_body",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "nemo-toggle_round"
      })
    })]
  });
};
Toggle.propTypes = {
  className: _propTypes.default.string,
  checked: _propTypes.default.bool.isRequired,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func.isRequired,
  size: _propTypes.default.oneOf([16, 24, 32])
};
Toggle.defaultProps = {
  size: 24
};
var _default = Toggle;
exports.default = _default;