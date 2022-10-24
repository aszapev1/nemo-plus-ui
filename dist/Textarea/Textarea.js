"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Textarea.css");
var _jsxRuntime = require("react/jsx-runtime");
var Textarea = function Textarea(_ref) {
  var required = _ref.required,
    name = _ref.name,
    value = _ref.value,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    className = _ref.className,
    disabled = _ref.disabled,
    size = _ref.size,
    resize = _ref.resize,
    autoFocus = _ref.autoFocus,
    id = _ref.id;
  var css = ['nemo-textarea'];
  if (className) {
    css.push(className);
  }
  if (size) {
    css.push("nemo-textarea--".concat(size));
  }
  if (resize) {
    css.push("nemo-textarea--resize");
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
    id: id,
    className: css.join(' '),
    type: "text",
    autoFocus: autoFocus,
    required: required,
    name: name,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled
  });
};
Textarea.propTypes = {
  autoFocus: _propTypes.default.bool,
  required: _propTypes.default.bool,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.oneOf([88, 100, 120]),
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = Textarea;
exports.default = _default;