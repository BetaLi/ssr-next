webpackHotUpdate(6,{

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(400);

var _link2 = _interopRequireDefault(_link);

var _MyLayout = __webpack_require__(398);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "A:\\Users\\Lcoder\\Desktop\\WebProject\\hello-next\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "A:\\Users\\Lcoder\\Desktop\\WebProject\\hello-next\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5lZmFjYjFkNzcyYzBmOTEwMDY2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YzdhYTRlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBzL015TGF5b3V0XCI7XHJcblxyXG5jb25zdCBQb3N0TGluayA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGluayBhcz17YC9wLyR7cHJvcHMuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+PGE+e3Byb3BzLnRpdGxlfTwvYT48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5jb25zdCBJbmRleCA9ICgpPT4oXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMj5NeSBCbG9nPC9oMj5cclxuICAgICAgICA8UG9zdExpbmsgaWQ9eydoZWxsby1uZXh0J30gdGl0bGU9eydIZWxsbyBOZXh0J30vPlxyXG4gICAgICAgIDxQb3N0TGluayBpZD17J2xlYXJuLW5leHQnfSB0aXRsZT17J0xlYXJuIE5leHQnfS8+XHJcbiAgICAgICAgPFBvc3RMaW5rIGlkPXsnZGVwbG95LW5leHQnfSB0aXRsZT17J0RlcGxveSBhcHAgd2l0aCBaZWl0J30vPlxyXG4gICAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9