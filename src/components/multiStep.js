'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getNavStates = function getNavStates(indx, length) {
  var styles = [];
  for (var i = 0; i < length; i++) {
    if (i < indx) {
      styles.push('done');
    } else if (i === indx) {
      styles.push('doing');
    } else {
      styles.push('todo');
    }
  }
  return { current: indx, styles: styles };
};

var checkNavState = function checkNavState(currentStep, stepsLength) {
  if (currentStep === 0) {
    return {
      showPayBtn: false,
      showNextBtn: true,
      showSaveBtn: false,
      showShipBtn: false
    };
  } else if (currentStep === 1) {
    return { showPayBtn: false,
      showNextBtn: true,
      showShipBtn: false,
      showShowBtn: false
    };
  } else if (currentStep === 2) {
    return {
      showSaveBtn: true,
      showShipBtn: true,
      showNextBtn: false,
      showPayBtn: false
    };
  } else {
    return {
      showPayBtn: true,
      showNextBtn: false,
      showSaveBtn: false,
      showShipBtn: false
    };
  }
};

var MultiStep = function (_React$Component) {
  _inherits(MultiStep, _React$Component);

  function MultiStep() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MultiStep);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiStep.__proto__ || Object.getPrototypeOf(MultiStep)).call.apply(_ref, [this].concat(args))), _this), _this.state = {

      showNextBtn: true,
      showSaveBtn: false,

      showShipBtn: false,
      showPayBtn: false,
      compState: 0,
      navState: getNavStates(0, _this.props.steps.length)
    }, _this.setNavState = function (next) {
      _this.setState({
        navState: getNavStates(next, _this.props.steps.length)
      });
      if (next < _this.props.steps.length) {
        _this.setState({ compState: next });
      }
      _this.setState(checkNavState(next, _this.props.steps.length));
    }, _this.handleKeyDown = function (evt) {
      if (evt.which === 13) {
        _this.next();
      }
    }, _this.handleOnClick = function (evt) {
      if (evt.currentTarget.value === _this.props.steps.length - 1 && _this.state.compState === _this.props.steps.length - 1) {
        _this.setNavState(_this.props.steps.length);
      } else {
        _this.setNavState(evt.currentTarget.value);
      }
    }, _this.next = function () {
      _this.setNavState(_this.state.compState + 1);
    }, _this.previous = function () {
      if (_this.state.compState > 0) {
        _this.setNavState(_this.state.compState - 1);
      }
    }, _this.cancel = function () {
      document.getElementsByClassName("mod").style.display = "none";
    }, _this.getClassName = function (className, i) {
      return className + '-' + _this.state.navState.styles[i];
    }, _this.renderSteps = function () {
      return _this.props.steps.map(function (s, i) {
        return _react2.default.createElement(
          'li',
          {
            className: _this.getClassName('progtrckr', i),
            onClick: _this.handleOnClick,
            key: i,
            value: i
          },
          _react2.default.createElement(
            'em',
            null,
            i + 1
          ),
          _react2.default.createElement(
            'span',
            null,
            _this.props.steps[i].name
          )
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MultiStep, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container', onKeyDown: this.handleKeyDown },
        _react2.default.createElement(
          'ol',
          { className: 'progtrckr' },
          this.renderSteps()
        ),
        this.props.steps[this.state.compState].component,
        _react2.default.createElement(
          'div',
          { style: this.props.showNavigation ? {} : { display: 'none' } },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-danger',
              style: this.state.showShipBtn ? {} : { display: 'none' }

            },
            'Ship'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn',
              style: this.state.showSaveBtn ? {} : { display: 'none' }

            },
            'Save'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-danger',
              style: this.state.showNextBtn ? {} : { display: 'none' },
              onClick: this.next
            },
            'Next'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-danger',
              style: this.state.showPayBtn ? {} : { display: 'none' }

            },
            'Pay'
          )
        )
      );
    }
  }]);

  return MultiStep;
}(_react2.default.Component);

exports.default = MultiStep;


MultiStep.defaultProps = {
  showNavigation: true
};