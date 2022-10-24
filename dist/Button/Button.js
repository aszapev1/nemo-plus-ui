"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Loader = _interopRequireDefault(require("../Loader/Loader"));
require("./Button.css");
var _jsxRuntime = require("react/jsx-runtime");
var Button = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var autoFocus = _ref.autoFocus,
    type = _ref.type,
    className = _ref.className,
    children = _ref.children,
    disabled = _ref.disabled,
    name = _ref.name,
    onClick = _ref.onClick,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    loading = _ref.loading,
    size = _ref.size,
    variant = _ref.variant;
  var css = ['nemo-button'];
  if (className) {
    css.push(className);
  }
  if (loading) {
    css.push('nemo-button--loading');
  }
  if (size) {
    css.push("nemo-button--".concat(size));
  }
  if (variant) {
    css.push("nemo-button--".concat(variant));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: css.join(' '),
    type: type,
    ref: ref,
    autoFocus: autoFocus,
    disabled: disabled || loading,
    name: name,
    onClick: onClick || null,
    onFocus: onFocus || null,
    onBlur: onBlur || null,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "nemo-button_container",
      children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loader.default, {
        className: "nemo-button_loader",
        size: size === 32 ? 16 : 24,
        variant: variant === 'primary' ? 'white' : 'black'
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "nemo-button-container",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "font font-medium text2 nemo-button-children",
          children: children
        })
      })]
    })
  });
});
Button.propTypes = {
  type: _propTypes.default.oneOf(['button', 'submit', 'reset']).isRequired,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  autoFocus: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  name: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  size: _propTypes.default.oneOf([32, 44, 52, 72]).isRequired,
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'outline', 'ghost']).isRequired
};
Button.defaultProps = {
  size: 44,
  variant: 'primary',
  type: 'button',
  disabled: false,
  autoFocus: false,
  loading: false
};
var _default = Button;
exports.default = _default;