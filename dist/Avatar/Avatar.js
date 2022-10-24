"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Avatar = _interopRequireDefault(require("./Avatar.jpg"));
require("./Avatar.css");
var _jsxRuntime = require("react/jsx-runtime");
var Avatar = function Avatar(_ref) {
  var className = _ref.className,
    size = _ref.size,
    photo = _ref.photo;
  var css = ['nemo-avatar'];
  if (className) {
    css.push(className);
  }
  if (size) {
    css.push("nemo-avatar--".concat(size));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
    className: css.join(' '),
    src: photo ? photo : _Avatar.default,
    alt: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
  });
};
Avatar.propTypes = {
  className: _propTypes.default.string,
  photo: _propTypes.default.string,
  size: _propTypes.default.oneOf([24, 32, 44, 64, 96]).isRequired
};
var _default = Avatar;
exports.default = _default;