"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _MyLayout = require("../comps/MyLayout");

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "A:\\Users\\Lcoder\\Desktop\\WebProject\\hello-next\\pages\\index.js?entry";


var PostLink = function PostLink(props) {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_link2.default, { as: "/p/" + props.id, href: "/post?title=" + props.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement("a", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, props.title)));
};

var Index = function Index() {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement("h2", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, "My Blog"), _react2.default.createElement(PostLink, { id: 'hello-next', title: 'Hello Next', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement(PostLink, { id: 'learn-next', title: 'Learn Next', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement(PostLink, { id: 'deploy-next', title: 'Deploy app with Zeit', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }));
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiTGF5b3V0IiwiUG9zdExpbmsiLCJwcm9wcyIsImlkIiwidGl0bGUiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFVLEFBQ3hCOzJCQUNJLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQyxnQ0FBSyxZQUFVLE1BQWhCLEFBQXNCLElBQU0sdUJBQXFCLE1BQWpELEFBQXVEO3NCQUF2RDt3QkFBQSxBQUFnRTtBQUFoRTt1QkFBZ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsYUFGeEUsQUFDSSxBQUNJLEFBQWdFLEFBQVUsQUFHckY7QUFORDs7QUFRQSxJQUFNLFFBQVEsU0FBUixBQUFRLFFBQUE7MkJBQ1YsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsMENBQUEsQUFBQyxZQUFTLElBQVYsQUFBYyxjQUFjLE9BQTVCLEFBQW1DO3NCQUFuQzt3QkFGSixBQUVJLEFBQ0E7QUFEQTtzQ0FDQSxBQUFDLFlBQVMsSUFBVixBQUFjLGNBQWMsT0FBNUIsQUFBbUM7c0JBQW5DO3dCQUhKLEFBR0ksQUFDQTtBQURBO3NDQUNBLEFBQUMsWUFBUyxJQUFWLEFBQWMsZUFBZSxPQUE3QixBQUFvQztzQkFBcEM7d0JBTE0sQUFDVixBQUlJO0FBQUE7O0FBTFIsQUFTQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJBOi9Vc2Vycy9MY29kZXIvRGVza3RvcC9XZWJQcm9qZWN0L2hlbGxvLW5leHQifQ==