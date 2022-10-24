"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Tab.css");
var _jsxRuntime = require("react/jsx-runtime");
var Tab = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    size = _ref.size,
    children = _ref.children,
    disabled = _ref.disabled,
    name = _ref.name,
    activeTab = _ref.activeTab,
    _onClick = _ref.onClick;
  var css = ['nemo-tab'];
  if (className) {
    css.push(className);
  }
  if (size) {
    css.push("nemo-tab--".concat(size));
  }
  if (name === activeTab) {
    css.push('active');
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ref: ref,
    type: "button",
    name: name,
    className: css.join(' '),
    disabled: disabled,
    onClick: function onClick(event) {
      return _onClick(name, event);
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "nemo-tab-container",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "font font-medium nemo-tab-children",
        children: children
      })
    })
  });
});
Tab.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf([44, 52, 72]),
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  disabled: _propTypes.default.bool,
  name: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  activeTab: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  onClick: _propTypes.default.func.isRequired
};
var _default = Tab;
exports.default = _default;