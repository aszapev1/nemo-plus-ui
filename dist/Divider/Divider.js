"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Divider.css");
var _jsxRuntime = require("react/jsx-runtime");
var Divider = function Divider(props) {
  var styles = ['nemo-divider'];
  if (typeof props.className !== 'undefined') {
    styles.push(props.className);
  }
  if (props.margin) {
    styles.push('nemo-divider--margine-stroke');
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: styles.join(' '),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {})
  });
};
Divider.propTypes = {
  className: _propTypes.default.string,
  margin: _propTypes.default.bool
};
Divider.defaultProps = {
  margin: false
};
var _default = Divider;
exports.default = _default;