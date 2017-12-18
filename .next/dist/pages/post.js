"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require("../comps/MyLayout");

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "A:\\Users\\Lcoder\\Desktop\\WebProject\\hello-next\\pages\\post.js?entry";


var Content = function Content(props) {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement("h2", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, props.url.query.title), _react2.default.createElement("p", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, "This is the blog post content page."));
};

exports.default = function (props) {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(Content, { url: props.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkNvbnRlbnQiLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBQyxPQUFRLEFBQ3JCOzJCQUNJLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsYUFBSyxBQUFNLElBQU4sQUFBVSxNQURuQixBQUNJLEFBQXFCLEFBQ3JCLHdCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUhSLEFBQ0ksQUFFSSxBQUdYO0FBUEQsQUFTQTs7a0JBQWUsVUFBQSxBQUFDLE9BQUQ7MkJBQ1gsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxnQ0FDSSxBQUFDLFdBQVEsS0FBSyxNQUFkLEFBQW9CO3NCQUFwQjt3QkFGTyxBQUNYLEFBQ0k7QUFBQTs7QUFGUiIsImZpbGUiOiJwb3N0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkE6L1VzZXJzL0xjb2Rlci9EZXNrdG9wL1dlYlByb2plY3QvaGVsbG8tbmV4dCJ9