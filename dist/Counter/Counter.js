"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Counter.css");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Counter = function Counter(_ref) {
  var className = _ref.className,
    number = _ref.number,
    type = _ref.type,
    size = _ref.size,
    variant = _ref.variant;
  var _useState = (0, _react.useState)(1),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    counter = _useState2[0],
    setCounter = _useState2[1];
  var css = ['nemo-counter font font-medium'];
  if (className) {
    css.push(className);
  }
  if (type) {
    css.push("nemo-counter--".concat(type));
  }
  if (size) {
    css.push("nemo-counter--".concat(size));
  }
  if (variant) {
    css.push("nemo-counter--".concat(variant));
  }
  (0, _react.useEffect)(function () {
    if (type === 'round') {
      setCounter(1);
    } else {
      if (number > 99) {
        setCounter("99+");
      }
    }
  }, [type, number]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: css.join(' '),
    children: counter
  });
};
Counter.propTypes = {
  className: _propTypes.default.string,
  number: _propTypes.default.number.isRequired,
  type: _propTypes.default.oneOf(['round', 'oval']).isRequired,
  variant: _propTypes.default.oneOf(['primary', 'secondary']).isRequired,
  size: _propTypes.default.oneOf([16, 20, 24]).isRequired
};
var _default = Counter;
exports.default = _default;