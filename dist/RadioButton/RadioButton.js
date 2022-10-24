"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./RadioButton.css");
var _jsxRuntime = require("react/jsx-runtime");
var RadioButton = function RadioButton(_ref) {
  var className = _ref.className,
    size = _ref.size,
    value = _ref.value,
    checked = _ref.checked,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    id = _ref.id;
  var css = ['nemo-radio-button'];
  if (className) {
    css.push(className);
  }
  if (size) {
    css.push("nemo-radio-button--".concat(size));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: css.join(' '),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      className: "nemo-radio-button_control",
      type: "radio",
      value: value,
      checked: checked,
      onChange: onChange,
      disabled: disabled,
      id: id
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "nemo-radio-button_indicator"
    })]
  });
};
RadioButton.propTypes = {
  value: _propTypes.default.string.isRequired,
  checked: _propTypes.default.bool.isRequired,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf([16, 24, 32]).isRequired,
  id: _propTypes.default.string
};
var _default = RadioButton;
exports.default = _default;