/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 129:
/***/ (function(module) {

/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
  // Inspired by the default width and height of a canvas element.

  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: MIN_CONTAINER_WIDTH,
    minContainerHeight: MIN_CONTAINER_HEIGHT,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var maxRatio = 0;
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;

        if (Math.abs(ratio) > Math.abs(maxRatio)) {
          maxRatio = ratio;
        }
      });
    });
    return maxRatio;
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      var minWidth = Number(options.minContainerWidth);
      var minHeight = Number(options.minContainerHeight);
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
        height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      canvasData.left = (containerData.width - canvasData.width) / 2;
      canvasData.top = (containerData.height - canvasData.height) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }

      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var ratioX = container.offsetWidth / containerData.width;
      var ratioY = container.offsetHeight / containerData.height;
      var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY; // Resize when width changed or height changed

      if (ratio !== 1) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "https://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        } // The third parameter is required for avoiding side-effect (#682)


        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.initialImageData = assign({}, _this2.imageData);
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

})));


/***/ }),

/***/ 707:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cropper[data-v-4bedf15c] .el-dialog__body{padding:0}.cropper_main[data-v-4bedf15c]{height:50vh;min-height:500px}.cropper_actions[data-v-4bedf15c]{padding:.5em}.cropper_actions[data-v-4bedf15c] .el-button-group{margin-right:10px}", "",{"version":3,"sources":["webpack://./uploader.vue"],"names":[],"mappings":"AAsgBA,2CACE,SACF,CAEA,+BACE,WAAY,CACZ,gBACF,CAEA,kCACE,YACF,CAEA,mDACE,iBACF","sourcesContent":["<template>\r\n  <el-upload\r\n    ref=\"myupload\"\r\n    v-bind=\"$attrs\"\r\n    action\r\n    :fileList=\"fileListFinnal\"\r\n    :accept=\"acceptFinnal\"\r\n    :before-upload=\"handleBeforeUpload\"\r\n    :on-exceed=\"handleonExceed\"\r\n    :on-change=\"handleChange\"\r\n    :on-remove=\"handleRemove\"\r\n    :http-request=\"customUpload\"\r\n  >\r\n    <div :id=\"triggerId\">\r\n      <slot name=\"default\">\r\n        <el-button>点击上传</el-button>\r\n      </slot>\r\n      <slot name=\"trigger\"></slot>\r\n      <slot name=\"tip\"></slot>\r\n    </div>\r\n    <!-- edit dialog -->\r\n    <el-dialog\r\n      v-model=\"dialogVisible\"\r\n      append-to-body\r\n      title=\"图像剪裁\"\r\n      top=\"10vh\"\r\n      custom-class=\"cropper\"\r\n      :close-on-click-modal=\"false\"\r\n      :close-on-press-escape=\"false\"\r\n      @close=\"cropperMethod('close')\"\r\n    >\r\n      <div class=\"cropper_main\">\r\n        <img src ref=\"CropperImg\" />\r\n      </div>\r\n      <div class=\"cropper_actions flex-row align-center\">\r\n        <div class=\"flex-1\">\r\n          <el-button-group>\r\n            <el-button\r\n              size=\"small\"\r\n              title=\"左旋\"\r\n              @click=\"cropperMethod('rotateLeft')\"\r\n            >\r\n              <i class=\"el-icon-refresh-left\"></i>\r\n              左旋\r\n            </el-button>\r\n            <el-button\r\n              size=\"small\"\r\n              title=\"右旋\"\r\n              @click=\"cropperMethod('rotateRight')\"\r\n            >\r\n              <i class=\"el-icon-refresh-right\"></i>\r\n              右旋\r\n            </el-button>\r\n          </el-button-group>\r\n          <el-button-group>\r\n            <el-button\r\n              size=\"small\"\r\n              title=\"水平镜像\"\r\n              @click=\"cropperMethod('scaleX')\"\r\n            >\r\n              <i class=\"el-icon-sort\" style=\"transform: rotateZ(90deg)\"></i>\r\n              水平镜像\r\n            </el-button>\r\n            <el-button\r\n              size=\"small\"\r\n              title=\"垂直镜像\"\r\n              @click=\"cropperMethod('scaleY')\"\r\n            >\r\n              <i class=\"el-icon-sort\"></i>\r\n              垂直镜像\r\n            </el-button>\r\n          </el-button-group>\r\n          <el-button-group>\r\n            <el-button\r\n              size=\"small\"\r\n              title=\"重置\"\r\n              @click=\"cropperMethod('reset')\"\r\n            >\r\n              <i class=\"el-icon-refresh\"></i>\r\n              重置\r\n            </el-button>\r\n          </el-button-group>\r\n        </div>\r\n\r\n        <el-button\r\n          size=\"small\"\r\n          type=\"primary\"\r\n          plain\r\n          @click=\"cropperMethod('save')\"\r\n        >\r\n          <i class=\"el-icon-crop\"></i>\r\n          确定\r\n        </el-button>\r\n      </div>\r\n    </el-dialog>\r\n  </el-upload>\r\n</template>\r\n<script>\r\nimport { ElMessage } from \"element-plus\";\r\nimport { fixImgFile } from \"ios-photo-repair\";\r\nimport Cropper from \"cropperjs\";\r\nimport \"cropperjs/dist/cropper.css\";\r\n\r\nlet cropperInstance;\r\n\r\n// 调试开关\r\nconst DEBUG = process.env.NODE_ENV === \"development\";\r\n\r\n// 图片压缩成jpg格式\r\nconst fixJpgFileName = function (fileName) {\r\n  if (fileName.match(/\\.jpg|\\.jpeg$/)) {\r\n    return fileName;\r\n  }\r\n  return fileName + \".jpg\";\r\n};\r\n\r\n// 文件类型集合\r\nconst FileTypeMap = {\r\n  \"t-image\": [\".jpg\", \".jpeg\", \".png\", \".gif\", \".bmp\", \".webp\"],\r\n  \"t-video\": [\".mp4\", \".rmvb\", \".avi\", \".mov\", \".3gp\", \".webm\"],\r\n  \"t-audio\": [\".wav\", \".mp3\", \".ogg\", \".acc\"],\r\n  \"t-word\": [\".docx\", \".doc\"],\r\n  \"t-excel\": [\".xlsx\", \".xls\"],\r\n  \"t-ppt\": [\".ppt\", \".pptx\"],\r\n  \"t-document\": [\".pdf\", \"t-word\", \"t-excel\", \"t-ppt\"],\r\n  \"t-zip\": [\".zip\", \".rar\"],\r\n};\r\n\r\nexport default {\r\n  props: {\r\n    modelValue: {\r\n      type: Array,\r\n      required: false,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    triggerId: {\r\n      // 配合实现富文本插件上传功能\r\n      type: String,\r\n      required: false,\r\n      default: \"upload_image_trigger\" + parseInt(Math.random() * 1e8),\r\n    },\r\n    limitSize: {\r\n      // 文件尺寸限制\r\n      type: Number,\r\n      required: false,\r\n      default() {\r\n        return 100 * 1024 * 1024;\r\n      },\r\n    },\r\n    imgCompress: {\r\n      // 开启图片压缩\r\n      type: Boolean,\r\n      required: false,\r\n      default() {\r\n        return true;\r\n      },\r\n    },\r\n    imgCompressOption: {\r\n      // 图片压缩配置\r\n      type: Object,\r\n      required: false,\r\n      default() {\r\n        return {\r\n          maxWidth: 1000,\r\n          maxHeight: 1000,\r\n        };\r\n      },\r\n    },\r\n    imgCrop: {\r\n      // 开启图片剪裁\r\n      type: Boolean,\r\n      required: false,\r\n      default() {\r\n        return false;\r\n      },\r\n    },\r\n    imgCropOption: {\r\n      // 图片剪裁配置\r\n      type: Object,\r\n      required: false,\r\n      default() {\r\n        return {\r\n          ratio: 1,\r\n          minWidth: 0,\r\n          minHeight: 0,\r\n          maxWidth: 1000,\r\n          maxHeight: 1000,\r\n        };\r\n      },\r\n    },\r\n    uploadMethod: {\r\n      // 自定义上传方法，参数（file/blob, fileName）\r\n      type: Function,\r\n      required: false,\r\n    },\r\n    responseTransfer: {\r\n      // 接口返回数据 与 fileList 数据格式转换函数\r\n      type: Function,\r\n      required: false,\r\n      default(response) {\r\n        return response;\r\n      },\r\n    },\r\n  },\r\n  data() {\r\n    return {\r\n      dialogVisible: false,\r\n      cropResult: null,\r\n      fileListFinnal: [],\r\n      controller: null,\r\n      globalOption: {},\r\n    };\r\n  },\r\n  computed: {\r\n    acceptFinnal() {\r\n      if (this.$attrs.accept && this.$attrs.accept.indexOf(\"t-\") !== -1) {\r\n        const typeArray = this.$attrs.accept.split(\",\");\r\n        let result = [];\r\n        typeArray.forEach((type) => {\r\n          result = result.concat(this.getExtByType(type));\r\n        });\r\n        return result.join(\",\");\r\n      } else {\r\n        return this.$attrs.accept || \"*\";\r\n      }\r\n    },\r\n    propsFinnal() {\r\n      const getDefaultValue = (key) => {\r\n        if (Object.keys(this.globalOption).indexOf(key) !== -1) {\r\n          return this.globalOption[key];\r\n        }\r\n        return this.$props[key];\r\n      };\r\n      let result = {};\r\n      Object.keys(this.$props).forEach((prop) => {\r\n        result[prop] = getDefaultValue(prop);\r\n      });\r\n      return result;\r\n    },\r\n  },\r\n  watch: {\r\n    modelValue: {\r\n      handler(newValue) {\r\n        this.fileListFinnal = this.$attrs.fileList || newValue || [];\r\n        if (this.$refs.myupload) {\r\n          this.$refs.myupload.uploadFiles = newValue.filter((ef) => {\r\n            return newValue.findIndex((f) => f.uid === ef.uid) !== -1;\r\n          });\r\n        }\r\n      },\r\n      deep: true,\r\n      immediate: true,\r\n    },\r\n  },\r\n  methods: {\r\n    getExtByType(type) {\r\n      const quickType = Object.assign(\r\n        {},\r\n        FileTypeMap,\r\n        this.globalOption.quickType || {}\r\n      );\r\n      if (type && Array.isArray(quickType[type])) {\r\n        let classList = [];\r\n        let extList = [];\r\n        quickType[type].forEach((e) => {\r\n          if (e.indexOf(\"t-\") === 0) {\r\n            classList.push(e);\r\n          } else {\r\n            extList.push(e);\r\n          }\r\n        });\r\n        if (classList.length) {\r\n          classList.forEach((classType) => {\r\n            extList = extList.concat(this.getExtByType(classType));\r\n          });\r\n        }\r\n        return extList;\r\n      } else if (type && type.split) {\r\n        return [type.toLowerCase()];\r\n      }\r\n    },\r\n    handleBeforeUpload: function (file) {\r\n      // 尺寸校验\r\n      if (file.size > this.propsFinnal.limitSize) {\r\n        ElMessage({ message: \"文件大小超出限制\", type: \"warning\" });\r\n        return false;\r\n      }\r\n      // 格式校验\r\n      if (\r\n        this.acceptFinnal !== \"*\" &&\r\n        this.acceptFinnal.indexOf(\r\n          file.name.substring(file.name.lastIndexOf(\".\")).toLowerCase()\r\n        ) === -1\r\n      ) {\r\n        ElMessage({ message: \"文件格式不正确\", type: \"warning\" });\r\n        return false;\r\n      }\r\n\r\n      if (typeof this.$attrs[\"before-upload\"] === \"function\") {\r\n        return this.$attrs[\"before-upload\"](file);\r\n      } else if (\r\n        this.globalOption &&\r\n        typeof this.globalOption.beforeUpload === \"function\"\r\n      ) {\r\n        return this.globalOption.beforeUpload(file);\r\n      } else {\r\n        return true;\r\n      }\r\n    },\r\n    handleonExceed: function (file, fileList) {\r\n      if (typeof this.$attrs[\"on-exceed\"] === \"function\") {\r\n        this.$attrs[\"on-exceed\"](file, fileList);\r\n      } else if (\r\n        this.globalOption &&\r\n        typeof this.globalOption.onExceed === \"function\"\r\n      ) {\r\n        this.globalOption.onExceed(file, fileList);\r\n      }\r\n    },\r\n    handleChange: function (file, fileList) {\r\n      const doneFiles = fileList.filter((e) => e.status === \"success\");\r\n      if (doneFiles.length === fileList.length) {\r\n        this.$emit(\r\n          \"update:modelValue\",\r\n          doneFiles.map((e) => {\r\n            let data = e.response\r\n              ? this.propsFinnal.responseTransfer(e.response)\r\n              : e;\r\n            // 扩展字段\r\n            data.uid = e.uid;\r\n            data.status = e.status;\r\n            return data;\r\n          })\r\n        );\r\n      }\r\n\r\n      if (typeof this.$attrs[\"on-change\"] === \"function\") {\r\n        this.$attrs[\"on-change\"](file, fileList);\r\n      }\r\n    },\r\n    handleProgress(e) {\r\n      if (typeof this.$attrs[\"on-progress\"] === \"function\") {\r\n        if (e.total > 0) {\r\n          e.percent = (e.loaded / e.total) * 100;\r\n        }\r\n        this.$attrs[\"on-progress\"](e);\r\n      }\r\n    },\r\n    handleRemove: function (file, fileList) {\r\n      this.$emit(\r\n        \"update:modelValue\",\r\n        fileList.map((e) => {\r\n          let data = e.response\r\n            ? this.propsFinnal.responseTransfer(e.response)\r\n            : e;\r\n          data.uid = e.uid;\r\n          return data;\r\n        })\r\n      );\r\n\r\n      if (typeof this.$attrs[\"on-remove\"] === \"function\") {\r\n        this.$attrs[\"on-remove\"](file, fileList);\r\n      }\r\n    },\r\n    customUpload: async function (params) {\r\n      if (\r\n        !this.globalOption &&\r\n        !this.globalOption.uploadMethod &&\r\n        !this.propsFinnal.uploadMethod\r\n      ) {\r\n        return console.warn(\r\n          \"Uploader: The required configuration [uploadMethod] is missing!\"\r\n        );\r\n      }\r\n\r\n      const theUploadRequest =\r\n        this.propsFinnal.uploadMethod || this.globalOption.uploadMethod;\r\n      if (typeof theUploadRequest !== \"function\") {\r\n        return console.warn(\"Uploader: [uploadMethod] must be a Function!\");\r\n      }\r\n\r\n      const uploadedFileType = params.file.type;\r\n      DEBUG && console.log(\"uploadedFileType\", uploadedFileType);\r\n\r\n      let formDataFileObj = params.file;\r\n      let formDataFileName = params.file.name;\r\n\r\n      if (uploadedFileType.indexOf(\"image/\") === 0) {\r\n        if (this.propsFinnal.imgCrop) {\r\n          // 图片剪裁\r\n          this.cropResult = null;\r\n          this.dialogVisible = true;\r\n\r\n          const imgBlob = await new Promise((resolve) => {\r\n            let oReader = new FileReader();\r\n            oReader.onload = (e) => {\r\n              let base64 = e.target.result;\r\n              let img = this.$refs.CropperImg;\r\n              img.src = base64;\r\n              //\r\n              if (cropperInstance) {\r\n                cropperInstance.destroy();\r\n              }\r\n\r\n              cropperInstance = new Cropper(img, {\r\n                viewMode: 1,\r\n                dragMode: \"none\",\r\n                movable: false,\r\n                zoomOnTouch: false,\r\n                zoomOnWheel: false,\r\n                toggleDragModeOnDblclick: false,\r\n                aspectRatio: this.propsFinnal.imgCropOption.ratio,\r\n              });\r\n            };\r\n            oReader.readAsDataURL(params.file);\r\n\r\n            this.$watch(\"cropResult\", resolve);\r\n          });\r\n\r\n          if (imgBlob) {\r\n            DEBUG && console.log(\"imgCrop\", imgBlob);\r\n            formDataFileObj = imgBlob;\r\n            formDataFileName = fixJpgFileName(formDataFileName);\r\n            this.cropperMethod(\"close\");\r\n          }\r\n        } else if (this.propsFinnal.imgCompress) {\r\n          // 图片压缩\r\n          const imgBlob = await fixImgFile(\r\n            params.file,\r\n            Object.assign({}, this.propsFinnal.imgCompressOption, {\r\n              outType: \"blob\",\r\n            })\r\n          );\r\n\r\n          DEBUG && console.log(\"imgCompress\", imgBlob);\r\n          formDataFileObj = imgBlob;\r\n          formDataFileName = fixJpgFileName(formDataFileName);\r\n        }\r\n      }\r\n\r\n      // 上传\r\n      DEBUG && console.log(\"upload params\", formDataFileName, formDataFileObj);\r\n      this.controller = new AbortController();\r\n      return theUploadRequest(formDataFileObj, formDataFileName, {\r\n        onUploadProgress: this.handleProgress,\r\n        signal: this.controller.signal,\r\n      }).then((res) => {\r\n        return res.data;\r\n      });\r\n    },\r\n    cropperMethod(action) {\r\n      // 剪裁相关处理方法\r\n      switch (action) {\r\n        case \"save\":\r\n          cropperInstance\r\n            .getCroppedCanvas({\r\n              minWidth: this.propsFinnal.imgCropOption.minWidth,\r\n              minHeight: this.propsFinnal.imgCropOption.minHeight,\r\n              maxWidth: this.propsFinnal.imgCropOption.maxWidth || 1000,\r\n              maxHeight: this.propsFinnal.imgCropOption.maxHeight || 1000,\r\n              imageSmoothingQuality: \"medium\",\r\n            })\r\n            .toBlob((blob) => {\r\n              this.cropResult = blob;\r\n            }, \"image/jpeg\");\r\n          break;\r\n        case \"close\":\r\n          this.dialogVisible = false;\r\n          if (cropperInstance) {\r\n            cropperInstance.destroy();\r\n          }\r\n          if (!this.cropResult) {\r\n            const newValue = [].concat(this.modelValue);\r\n            newValue.pop();\r\n            this.$emit(\"update:modelValue\", newValue);\r\n          }\r\n          break;\r\n        case \"rotateLeft\":\r\n          cropperInstance.rotate(-90);\r\n          break;\r\n        case \"rotateRight\":\r\n          cropperInstance.rotate(90);\r\n          break;\r\n        case \"scaleX\":\r\n          cropperInstance.scaleX(-1);\r\n          break;\r\n        case \"scaleY\":\r\n          cropperInstance.scaleY(-1);\r\n          break;\r\n        case \"reset\":\r\n          cropperInstance.reset();\r\n          break;\r\n        default:\r\n          console.warn(\"cropperMethod 参数错误: \", action);\r\n      }\r\n    },\r\n    clearFiles() {\r\n      // el-upload 方法\r\n      this.$refs.myupload.clearFiles();\r\n    },\r\n    abort() {\r\n      this.controller.abort();\r\n    },\r\n    submit() {\r\n      // el-upload 方法\r\n      this.$refs.myupload.submit();\r\n    },\r\n  },\r\n  created() {\r\n    this.globalOption = this.$UploaderOption || {};\r\n  },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\n/* 图片剪裁弹窗 */\r\n.cropper :deep(.el-dialog__body) {\r\n  padding: 0;\r\n}\r\n\r\n.cropper_main {\r\n  height: 50vh;\r\n  min-height: 500px;\r\n}\r\n\r\n.cropper_actions {\r\n  padding: 0.5em;\r\n}\r\n\r\n.cropper_actions :deep(.el-button-group) {\r\n  margin-right: 10px;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 167:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(738), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Cropper.js v1.5.12\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2021-06-12T08:00:11.623Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:\" \";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:\" \";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}", "",{"version":3,"sources":["webpack://./node_modules/cropperjs/dist/cropper.css"],"names":[],"mappings":"AAAA;;;;;;;;EAQE,CAEF,mBACE,aAAc,CACd,WAAY,CACZ,aAAc,CACd,iBAAkB,CAClB,qBAAsB,CACtB,iBAAkB,CAClB,wBAAyB,CACzB,qBAAsB,CACtB,oBAAqB,CACrB,gBACF,CAEA,uBACE,aAAc,CACd,WAAY,CACZ,sBAAuB,CACvB,yBAA2B,CAC3B,wBAA0B,CAC1B,sBAAwB,CACxB,qBAAuB,CACvB,UACF,CAEA,qFAKE,QAAS,CACT,MAAO,CACP,iBAAkB,CAClB,OAAQ,CACR,KACF,CAEA,kCAEE,eACF,CAEA,kBACE,qBAAsB,CACtB,SACF,CAEA,eACE,qBAAsB,CACtB,UACF,CAEA,kBACE,aAAc,CACd,WAAY,CACZ,sBAAuB,CACvB,kCAAuC,CACvC,eAAgB,CAChB,UACF,CAEA,gBACE,oBAAqB,CACrB,aAAc,CACd,UAAY,CACZ,iBACF,CAEA,yBACE,uBAAwB,CACxB,oBAAqB,CACrB,gBAAsB,CACtB,MAAO,CACP,aAAmB,CACnB,UACF,CAEA,yBACE,qBAAsB,CACtB,sBAAuB,CACvB,WAAY,CACZ,cAAoB,CACpB,KAAM,CACN,eACF,CAEA,gBACE,aAAc,CACd,QAAS,CACT,QAAS,CACT,WAAa,CACb,iBAAkB,CAClB,OAAQ,CACR,OACF,CAEA,6CAEE,qBAAsB,CACtB,WAAY,CACZ,aAAc,CACd,iBACF,CAEA,uBACE,UAAW,CACX,SAAU,CACV,KAAM,CACN,SACF,CAEA,sBACE,UAAW,CACX,MAAO,CACP,QAAS,CACT,SACF,CAEA,2CAGE,aAAc,CACd,WAAY,CACZ,UAAY,CACZ,iBAAkB,CAClB,UACF,CAEA,cACE,qBAAsB,CACtB,MAAO,CACP,KACF,CAEA,cACE,qBACF,CAEA,qBACE,gBAAiB,CACjB,UAAW,CACX,KAAM,CACN,SACF,CAEA,qBACE,gBAAiB,CACjB,UAAW,CACX,MAAO,CACP,QACF,CAEA,qBACE,gBAAiB,CACjB,SAAU,CACV,KAAM,CACN,SACF,CAEA,qBACE,WAAY,CACZ,gBAAiB,CACjB,UAAW,CACX,MACF,CAEA,eACE,qBAAsB,CACtB,UAAW,CACX,WAAa,CACb,SACF,CAEA,uBACE,gBAAiB,CACjB,eAAgB,CAChB,UAAW,CACX,OACF,CAEA,uBACE,gBAAiB,CACjB,QAAS,CACT,gBAAiB,CACjB,QACF,CAEA,uBACE,gBAAiB,CACjB,SAAU,CACV,eAAgB,CAChB,OACF,CAEA,uBACE,WAAY,CACZ,eAAgB,CAChB,QAAS,CACT,gBACF,CAEA,wBACE,kBAAmB,CACnB,UAAW,CACX,QACF,CAEA,wBACE,kBAAmB,CACnB,SAAU,CACV,QACF,CAEA,wBACE,WAAY,CACZ,kBAAmB,CACnB,SACF,CAEA,wBACE,WAAY,CACZ,kBAAmB,CACnB,WAAY,CACZ,SAAU,CACV,UAAW,CACX,UACF,CAEA,yBACE,wBACE,WAAY,CACZ,UACF,CACF,CAEA,yBACE,wBACE,WAAY,CACZ,UACF,CACF,CAEA,0BACE,wBACE,UAAW,CACX,WAAa,CACb,SACF,CACF,CAEA,+BACE,qBAAsB,CACtB,WAAY,CACZ,WAAY,CACZ,aAAc,CACd,WAAY,CACZ,SAAU,CACV,iBAAkB,CAClB,UAAW,CACX,UACF,CAEA,mBACE,SACF,CAEA,YACE,wDACF,CAEA,cACE,aAAc,CACd,QAAS,CACT,iBAAkB,CAClB,OACF,CAEA,gBACE,sBACF,CAEA,cACE,WACF,CAEA,cACE,gBACF,CAEA,qIAIE,kBACF","sourcesContent":["/*!\n * Cropper.js v1.5.12\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2021-06-12T08:00:11.623Z\n */\n\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.cropper-container img {\n  display: block;\n  height: 100%;\n  image-orientation: 0deg;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  width: 100%;\n}\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: calc(100% / 3);\n  left: 0;\n  top: calc(100% / 3);\n  width: 100%;\n}\n\n.cropper-dashed.dashed-v {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: calc(100% / 3);\n  top: 0;\n  width: calc(100% / 3);\n}\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center::before,\n.cropper-center::after {\n  background-color: #eee;\n  content: ' ';\n  display: block;\n  position: absolute;\n}\n\n.cropper-center::before {\n  height: 1px;\n  left: -3px;\n  top: 0;\n  width: 7px;\n}\n\n.cropper-center::after {\n  height: 7px;\n  left: 0;\n  top: -3px;\n  width: 1px;\n}\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n  cursor: ew-resize;\n  right: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-n {\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n  top: -3px;\n}\n\n.cropper-line.line-w {\n  cursor: ew-resize;\n  left: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-s {\n  bottom: -3px;\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n}\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n  cursor: ew-resize;\n  margin-top: -3px;\n  right: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-n {\n  cursor: ns-resize;\n  left: 50%;\n  margin-left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-w {\n  cursor: ew-resize;\n  left: -3px;\n  margin-top: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-s {\n  bottom: -3px;\n  cursor: s-resize;\n  left: 50%;\n  margin-left: -3px;\n}\n\n.cropper-point.point-ne {\n  cursor: nesw-resize;\n  right: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-nw {\n  cursor: nwse-resize;\n  left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  cursor: nesw-resize;\n  left: -3px;\n}\n\n.cropper-point.point-se {\n  bottom: -3px;\n  cursor: nwse-resize;\n  height: 20px;\n  opacity: 1;\n  right: -3px;\n  width: 20px;\n}\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    height: 15px;\n    width: 15px;\n  }\n}\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    height: 10px;\n    width: 10px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    height: 5px;\n    opacity: 0.75;\n    width: 5px;\n  }\n}\n\n.cropper-point.point-se::before {\n  background-color: #39f;\n  bottom: -50%;\n  content: ' ';\n  display: block;\n  height: 200%;\n  opacity: 0;\n  position: absolute;\n  right: -50%;\n  width: 200%;\n}\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 667:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 537:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {

    var debug = false;

    var root = this;

    var EXIF = function(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (true) {
        if ( true && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {}

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000 : "ExifVersion",             // EXIF version
        0xA000 : "FlashpixVersion",         // Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",              // Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",         // Valid width of meaningful image
        0xA003 : "PixelYDimension",         // Valid height of meaningful image
        0x9101 : "ComponentsConfiguration", // Information about channels
        0x9102 : "CompressedBitsPerPixel",  // Compressed bits per pixel

        // user information
        0x927C : "MakerNote",               // Any desired information written by the manufacturer
        0x9286 : "UserComment",             // Comments by user

        // related file
        0xA004 : "RelatedSoundFile",        // Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",        // Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",       // Date and time when the image was stored digitally
        0x9290 : "SubsecTime",              // Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",            // Exposure time (in seconds)
        0x829D : "FNumber",                 // F number
        0x8822 : "ExposureProgram",         // Exposure program
        0x8824 : "SpectralSensitivity",     // Spectral sensitivity
        0x8827 : "ISOSpeedRatings",         // ISO speed rating
        0x8828 : "OECF",                    // Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",       // Shutter speed
        0x9202 : "ApertureValue",           // Lens aperture
        0x9203 : "BrightnessValue",         // Value of brightness
        0x9204 : "ExposureBias",            // Exposure bias
        0x9205 : "MaxApertureValue",        // Smallest F number of lens
        0x9206 : "SubjectDistance",         // Distance to subject in meters
        0x9207 : "MeteringMode",            // Metering mode
        0x9208 : "LightSource",             // Kind of light source
        0x9209 : "Flash",                   // Flash status
        0x9214 : "SubjectArea",             // Location and area of main subject
        0x920A : "FocalLength",             // Focal length of the lens in mm
        0xA20B : "FlashEnergy",             // Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",    //
        0xA20E : "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",         // Location of subject in image
        0xA215 : "ExposureIndex",           // Exposure index selected on camera
        0xA217 : "SensingMethod",           // Image sensor type
        0xA300 : "FileSource",              // Image source (3 == DSC)
        0xA301 : "SceneType",               // Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",              // Color filter array geometric pattern
        0xA401 : "CustomRendered",          // Special processing
        0xA402 : "ExposureMode",            // Exposure mode
        0xA403 : "WhiteBalance",            // 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",       // Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",        // Type of scene
        0xA407 : "GainControl",             // Degree of overall image gain adjustment
        0xA408 : "Contrast",                // Direction of contrast processing applied by camera
        0xA409 : "Saturation",              // Direction of saturation processing applied by camera
        0xA40A : "Sharpness",               // Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",    //
        0xA40C : "SubjectDistanceRange",    // Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"            // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

     // EXIF 2.3 Spec
    var IFD1Tags = EXIF.IFD1Tags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0111: "StripOffsets",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x011C: "PlanarConfiguration",
        0x0128: "ResolutionUnit",
        0x0201: "JpegIFOffset",    // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
        0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
        0x0211: "YCbCrCoefficients",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x0214: "ReferenceBlackWhite"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }


    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function(e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            var iptcdata = findIPTCinJPEG(binFile);
            img.iptcdata = iptcdata || {};
            if (EXIF.isXmpEnabled) {
               var xmpdata= findXMPinJPEG(binFile);
               img.xmpdata = xmpdata || {};               
            }
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) { // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);

            } else if (/^blob\:/i.test(img.src)) { // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else {
                offset += 2 + dataView.getUint16(offset+2);
            }

        }

    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;


        var isFieldSegmentStart = function(dataView, offset){
            return (
                dataView.getUint8(offset) === 0x38 &&
                dataView.getUint8(offset+1) === 0x42 &&
                dataView.getUint8(offset+2) === 0x49 &&
                dataView.getUint8(offset+3) === 0x4D &&
                dataView.getUint8(offset+4) === 0x04 &&
                dataView.getUint8(offset+5) === 0x04
            );
        };

        while (offset < length) {

            if ( isFieldSegmentStart(dataView, offset )){

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset+7);
                if(nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if(nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;

            }


            // Not the marker, continue searching
            offset++;

        }

    }
    var IptcFieldMap = {
        0x78 : 'caption',
        0x6E : 'credit',
        0x19 : 'keywords',
        0x37 : 'dateCreated',
        0x50 : 'byline',
        0x55 : 'bylineTitle',
        0x7A : 'captionWriter',
        0x69 : 'headline',
        0x74 : 'copyright',
        0x0F : 'category'
    };
    function readIPTCData(file, startOffset, sectionLength){
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while(segmentStartPos < startOffset+sectionLength) {
            if(dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos+1) === 0x02){
                segmentType = dataView.getUint8(segmentStartPos+2);
                if(segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos+3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos+5, dataSize);
                    // Check if we already stored a value with this name
                    if(data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if(data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }

            }
            segmentStartPos++;
        }
        return data;
    }



    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset+2, !bigEnd),
            numValues = file.getUint32(entryOffset+4, !bigEnd),
            valueOffset = file.getUint32(entryOffset+8, !bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return getStringFromDB(file, offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint16(offset + 2*n, !bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 5:    // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset+4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getUint32(valueOffset + 8*n, !bigEnd);
                        denominator = file.getUint32(valueOffset+4 + 8*n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset+4, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 8*n, !bigEnd) / file.getInt32(valueOffset+4 + 8*n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    /**
    * Given an IFD (Image File Directory) start offset
    * returns an offset to next IFD or 0 if it's the last IFD.
    */
    function getNextIFDOffset(dataView, dirStart, bigEnd){
        //the first 2bytes means the number of directory entries contains in this IFD
        var entries = dataView.getUint16(dirStart, !bigEnd);

        // After last directory entry, there is a 4bytes of data,
        // it means an offset to next IFD.
        // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

        return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
    }

    function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd){
        // get the IFD1 offset
        var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart+firstIFDOffset, bigEnd);

        if (!IFD1OffsetPointer) {
            // console.log('******** IFD1Offset is empty, image thumb not found ********');
            return {};
        }
        else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
            // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
            return {};
        }
        // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

        var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

        // EXIF 2.3 specification for JPEG format thumbnail

        // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
        // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
        // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
        // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
        // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

        if (thumbTags['Compression']) {
            // console.log('Thumbnail image found!');

            switch (thumbTags['Compression']) {
                case 6:
                    // console.log('Thumbnail image format is JPEG');
                    if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                        var tOffset = tiffStart + thumbTags.JpegIFOffset;
                        var tLength = thumbTags.JpegIFByteCount;
                        thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                            type: 'image/jpeg'
                        });
                    }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
            }
        }
        else if (thumbTags['PhotometricInterpretation'] == 2) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
        }
        return thumbTags;
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (n = start; n < start+length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset+2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset+4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset+4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]] +
                            StringValues.Components[exifData[tag][1]] +
                            StringValues.Components[exifData[tag][2]] +
                            StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0] +
                            "." + gpsData[tag][1] +
                            "." + gpsData[tag][2] +
                            "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        // extract thumbnail
        tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

        return tags;
    }

   function findXMPinJPEG(file) {

        if (!('DOMParser' in self)) {
            // console.warn('XML parsing not supported without DOMParser');
            return;
        }
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
           if (debug) console.log("Not a valid JPEG");
           return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            dom = new DOMParser();

        while (offset < (length-4)) {
            if (getStringFromDB(dataView, offset, 4) == "http") {
                var startOffset = offset - 1;
                var sectionLength = dataView.getUint16(offset - 2) - 1;
                var xmpString = getStringFromDB(dataView, startOffset, sectionLength)
                var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
                xmpString = xmpString.substring( xmpString.indexOf( '<x:xmpmeta' ), xmpEndIndex );

                var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
                //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
                //Without these namespaces, XML is thought to be invalid by parsers
                xmpString = xmpString.slice(0, indexOfXmp)
                            + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" '
                            + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
                            + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" '
                            + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" '
                            + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" '
                            + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" '
                            + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" '
                            + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" '
                            + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
                            + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" '
                            + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '
                            + xmpString.slice(indexOfXmp)

                var domDocument = dom.parseFromString( xmpString, 'text/xml' );
                return xml2Object(domDocument);
            } else{
             offset++;
            }
        }
    }

    function xml2json(xml) {
        var json = {};
      
        if (xml.nodeType == 1) { // element node
          if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              json['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text node
          return xml.nodeValue;
        }
      
        // deal with children
        if (xml.hasChildNodes()) {
          for(var i = 0; i < xml.childNodes.length; i++) {
            var child = xml.childNodes.item(i);
            var nodeName = child.nodeName;
            if (json[nodeName] == null) {
              json[nodeName] = xml2json(child);
            } else {
              if (json[nodeName].push == null) {
                var old = json[nodeName];
                json[nodeName] = [];
                json[nodeName].push(old);
              }
              json[nodeName].push(xml2json(child));
            }
          }
        }
        
        return json;
    }

    function xml2Object(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
              for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var attributes = item.attributes;
                for(var idx in attributes) {
                    var itemAtt = attributes[idx];
                    var dataKey = itemAtt.nodeName;
                    var dataValue = itemAtt.nodeValue;

                    if(dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                var nodeName = item.nodeName;

                if (typeof (obj[nodeName]) == "undefined") {
                  obj[nodeName] = xml2json(item);
                } else {
                  if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                  }
                  obj[nodeName].push(xml2json(item));
                }
              }
            } else {
              obj = xml.textContent;
            }
            return obj;
          } catch (e) {
              console.log(e.message);
          }
    }

    EXIF.enableXmp = function() {
        EXIF.isXmpEnabled = true;
    }

    EXIF.disableXmp = function() {
        EXIF.isXmpEnabled = false;
    }

    EXIF.getData = function(img, callback) {
        if (((self.Image && img instanceof self.Image)
            || (self.HTMLImageElement && img instanceof self.HTMLImageElement))
            && !img.complete)
            return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    EXIF.getTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }
    
    EXIF.getIptcTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.iptcdata[tag];
    }

    EXIF.getAllTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }
    
    EXIF.getAllIptcTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.iptcdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.pretty = function(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    EXIF.readFromBinaryFile = function(file) {
        return findEXIFinJPEG(file);
    }

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return EXIF;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}.call(this));



/***/ }),

/***/ 744:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 895:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(707);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("d6160662", content, true, {"sourceMap":true,"shadowMode":false});

/***/ }),

/***/ 604:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("b5bf4182", content, true, {"sourceMap":true,"shadowMode":false});

/***/ }),

/***/ 402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ addStylesClient)
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 738:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			374: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
const external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uploader.vue?vue&type=template&id=4bedf15c&scoped=true


const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.pushScopeId)("data-v-4bedf15c"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.popScopeId)(), n);

const _hoisted_1 = ["id"];

const _hoisted_2 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("点击上传");

const _hoisted_3 = {
  class: "cropper_main"
};
const _hoisted_4 = {
  src: "",
  ref: "CropperImg"
};
const _hoisted_5 = {
  class: "cropper_actions flex-row align-center"
};
const _hoisted_6 = {
  class: "flex-1"
};

const _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("i", {
  class: "el-icon-refresh-left"
}, null, -1));

const _hoisted_8 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)(" 左旋 ");

const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("i", {
  class: "el-icon-refresh-right"
}, null, -1));

const _hoisted_10 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)(" 右旋 ");

const _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("i", {
  class: "el-icon-sort",
  style: {
    "transform": "rotateZ(90deg)"
  }
}, null, -1));

const _hoisted_12 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)(" 水平镜像 ");

const _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("i", {
  class: "el-icon-sort"
}, null, -1));

const _hoisted_14 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)(" 垂直镜像 ");

const _hoisted_15 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("i", {
  class: "el-icon-refresh"
}, null, -1));

const _hoisted_16 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)(" 重置 ");

const _hoisted_17 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("i", {
  class: "el-icon-crop"
}, null, -1));

const _hoisted_18 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)(" 确定 ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-button");

  const _component_el_button_group = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-button-group");

  const _component_el_dialog = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-dialog");

  const _component_el_upload = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-upload");

  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_el_upload, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
    ref: "myupload"
  }, _ctx.$attrs, {
    action: "",
    fileList: $data.fileListFinnal,
    accept: $options.acceptFinnal,
    "before-upload": $options.handleBeforeUpload,
    "on-exceed": $options.handleonExceed,
    "on-change": $options.handleChange,
    "on-remove": $options.handleRemove,
    "http-request": $options.customUpload
  }), {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
      id: $props.triggerId
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default", {}, () => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, null, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [_hoisted_2]),
      _: 1
    })], true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "trigger", {}, undefined, true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "tip", {}, undefined, true)], 8, _hoisted_1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_dialog, {
      modelValue: $data.dialogVisible,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $data.dialogVisible = $event),
      "append-to-body": "",
      title: "图像剪裁",
      top: "10vh",
      "custom-class": "cropper",
      "close-on-click-modal": false,
      "close-on-press-escape": false,
      onClose: _cache[7] || (_cache[7] = $event => $options.cropperMethod('close'))
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("img", _hoisted_4, null, 512)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_5, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button_group, null, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, {
          size: "small",
          title: "左旋",
          onClick: _cache[0] || (_cache[0] = $event => $options.cropperMethod('rotateLeft'))
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [_hoisted_7, _hoisted_8]),
          _: 1
        }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, {
          size: "small",
          title: "右旋",
          onClick: _cache[1] || (_cache[1] = $event => $options.cropperMethod('rotateRight'))
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [_hoisted_9, _hoisted_10]),
          _: 1
        })]),
        _: 1
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button_group, null, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, {
          size: "small",
          title: "水平镜像",
          onClick: _cache[2] || (_cache[2] = $event => $options.cropperMethod('scaleX'))
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [_hoisted_11, _hoisted_12]),
          _: 1
        }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, {
          size: "small",
          title: "垂直镜像",
          onClick: _cache[3] || (_cache[3] = $event => $options.cropperMethod('scaleY'))
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [_hoisted_13, _hoisted_14]),
          _: 1
        })]),
        _: 1
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button_group, null, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, {
          size: "small",
          title: "重置",
          onClick: _cache[4] || (_cache[4] = $event => $options.cropperMethod('reset'))
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [_hoisted_15, _hoisted_16]),
          _: 1
        })]),
        _: 1
      })]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, {
        size: "small",
        type: "primary",
        plain: "",
        onClick: _cache[5] || (_cache[5] = $event => $options.cropperMethod('save'))
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [_hoisted_17, _hoisted_18]),
        _: 1
      })])]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 3
  }, 16, ["fileList", "accept", "before-upload", "on-exceed", "on-change", "on-remove", "http-request"]);
}
;// CONCATENATED MODULE: ./src/components/uploader.vue?vue&type=template&id=4bedf15c&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vueuse/core/node_modules/vue-demi/lib/index.mjs


var lib_isVue2 = false
var lib_isVue3 = true
var Vue2 = (/* unused pure expression or super */ null && (undefined))

function install() {}

function lib_set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}

function lib_del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}




;// CONCATENATED MODULE: ./node_modules/@vueuse/core/node_modules/@vueuse/shared/index.mjs


var __defProp$8 = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
function computedEager(fn, options) {
  var _a;
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, __spreadProps$5(__spreadValues$8({}, options), {
    flush: (_a = options == null ? void 0 : options.flush) != null ? _a : "sync"
  }));
  return readonly(result);
}

function computedWithControl(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = ref(true);
  watch(source, () => {
    dirty.value = true;
    trigger();
  }, { flush: "sync" });
  return customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = fn();
          dirty.value = false;
        }
        track();
        return v;
      },
      set() {
      }
    };
  });
}

function shared_createEventHook() {
  const fns = [];
  const off = (fn) => {
    const index = fns.indexOf(fn);
    if (index !== -1)
      fns.splice(index, 1);
  };
  const on = (fn) => {
    fns.push(fn);
    return {
      off: () => off(fn)
    };
  };
  const trigger = (param) => {
    fns.forEach((fn) => fn(param));
  };
  return {
    on,
    off,
    trigger
  };
}

function createGlobalState(stateFactory) {
  let initialized = false;
  let state;
  const scope = effectScope(true);
  return () => {
    if (!initialized) {
      state = scope.run(stateFactory);
      initialized = true;
    }
    return state;
  };
}

function createInjectionState(composable) {
  const key = Symbol("InjectionState");
  const useProvidingState = (...args) => {
    provide(key, composable(...args));
  };
  const useInjectedState = () => inject(key);
  return [useProvidingState, useInjectedState];
}

function shared_tryOnScopeDispose(fn) {
  if ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.getCurrentScope)()) {
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onScopeDispose)(fn);
    return true;
  }
  return false;
}

function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!state) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    shared_tryOnScopeDispose(dispose);
    return state;
  };
}

function __onlyVue3(name = "this function") {
  if (isVue3)
    return;
  throw new Error(`[VueUse] ${name} is only works on Vue 3.`);
}
const directiveHooks = {
  mounted: lib_isVue3 ? "mounted" : "inserted",
  updated: lib_isVue3 ? "updated" : "componentUpdated",
  unmounted: lib_isVue3 ? "unmounted" : "unbind"
};

function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
  __onlyVue3();
  for (const [key, value] of Object.entries(extend)) {
    if (key === "value")
      continue;
    if (isRef(value) && unwrap) {
      Object.defineProperty(ref, key, {
        get() {
          return value.value;
        },
        set(v) {
          value.value = v;
        },
        enumerable
      });
    } else {
      Object.defineProperty(ref, key, { value, enumerable });
    }
  }
  return ref;
}

function shared_get(obj, key) {
  if (key == null)
    return unref(obj);
  return unref(obj)[key];
}

function isDefined(v) {
  return unref(v) != null;
}

function logicAnd(...args) {
  return computed(() => args.every((i) => unref(i)));
}

function logicNot(v) {
  return computed(() => !unref(v));
}

function logicOr(...args) {
  return computed(() => args.some((i) => unref(i)));
}

var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
function makeDestructurable(obj, arr) {
  if (typeof Symbol !== "undefined") {
    const clone = __spreadValues$7({}, obj);
    Object.defineProperty(clone, Symbol.iterator, {
      enumerable: false,
      value() {
        let index = 0;
        return {
          next: () => ({
            value: arr[index++],
            done: index > arr.length
          })
        };
      }
    });
    return clone;
  } else {
    return Object.assign([...arr], obj);
  }
}

function reactify(fn) {
  return function(...args) {
    return computed(() => fn.apply(this, args.map((i) => unref(i))));
  };
}

function reactifyObject(obj, optionsOrKeys = {}) {
  let keys = [];
  if (Array.isArray(optionsOrKeys)) {
    keys = optionsOrKeys;
  } else {
    const { includeOwnProperties = true } = optionsOrKeys;
    keys.push(...Object.keys(obj));
    if (includeOwnProperties)
      keys.push(...Object.getOwnPropertyNames(obj));
  }
  return Object.fromEntries(keys.map((key) => {
    const value = obj[key];
    return [
      key,
      typeof value === "function" ? reactify(value.bind(obj)) : value
    ];
  }));
}

function toReactive(objectRef) {
  if (!isRef(objectRef))
    return reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (isRef(objectRef.value[p]) && !isRef(value))
        objectRef.value[p].value = value;
      else
        objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}

function reactiveComputed(fn) {
  return toReactive(computed(fn));
}

function reactiveOmit(obj, ...keys) {
  return reactiveComputed(() => Object.fromEntries(Object.entries(toRefs$1(obj)).filter((e) => !keys.includes(e[0]))));
}

function reactivePick(obj, ...keys) {
  return reactive(Object.fromEntries(keys.map((k) => [k, toRef(obj, k)])));
}

function refAutoReset(defaultValue, afterMs = 1e4) {
  return customRef((track, trigger) => {
    let value = defaultValue;
    let timer;
    const resetAfter = () => setTimeout(() => {
      value = defaultValue;
      trigger();
    }, unref(afterMs));
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timer);
        timer = resetAfter();
      }
    };
  });
}

const shared_isClient = typeof window !== "undefined";
const isDef = (val) => typeof val !== "undefined";
const assert = (condition, ...infos) => {
  if (!condition)
    console.warn(...infos);
};
const shared_toString = Object.prototype.toString;
const isBoolean = (val) => typeof val === "boolean";
const shared_isFunction = (val) => typeof val === "function";
const shared_isNumber = (val) => typeof val === "number";
const shared_isString = (val) => typeof val === "string";
const shared_isObject = (val) => shared_toString.call(val) === "[object Object]";
const isWindow = (val) => typeof window !== "undefined" && shared_toString.call(val) === "[object Window]";
const now = () => Date.now();
const shared_timestamp = () => +Date.now();
const shared_clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const shared_noop = () => {
};
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function shared_createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const shared_bypassFilter = (invoke) => {
  return invoke();
};
function shared_debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = unref(ms);
    const maxDuration = unref(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function shared_throttleFilter(ms, trailing = true, leading = true) {
  let lastExec = 0;
  let timer;
  let preventLeading = !leading;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = unref(ms);
    const elapsed = Date.now() - lastExec;
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration) {
      lastExec = Date.now();
      if (preventLeading)
        preventLeading = false;
      else
        invoke();
    }
    if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        if (!leading)
          preventLeading = true;
        clear();
        invoke();
      }, duration);
    }
    if (!leading && !timer)
      timer = setTimeout(() => preventLeading = true, duration);
  };
  return filter;
}
function shared_pausableFilter(extendFilter = shared_bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}

function shared_promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function shared_identity(arg) {
  return arg;
}
function shared_createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function invoke(fn) {
  return fn();
}
function shared_containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
function shared_increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function shared_objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || !obj[k] === void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}

function shared_useDebounceFn(fn, ms = 200, options = {}) {
  return shared_createFilterWrapper(shared_debounceFilter(ms, options), fn);
}

function refDebounced(value, ms = 200, options = {}) {
  if (ms <= 0)
    return value;
  const debounced = ref(value.value);
  const updater = shared_useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return debounced;
}

function refDefault(source, defaultValue) {
  return computed({
    get() {
      var _a;
      return (_a = source.value) != null ? _a : defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}

function shared_useThrottleFn(fn, ms = 200, trailing = true, leading = true) {
  return shared_createFilterWrapper(shared_throttleFilter(ms, trailing, leading), fn);
}

function refThrottled(value, delay = 200, trailing = true, leading = true) {
  if (delay <= 0)
    return value;
  const throttled = ref(value.value);
  const updater = shared_useThrottleFn(() => {
    throttled.value = value.value;
  }, delay, trailing, leading);
  watch(value, () => updater());
  return throttled;
}

function refWithControl(initial, options = {}) {
  let source = initial;
  let track;
  let trigger;
  const ref = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        return get();
      },
      set(v) {
        set(v);
      }
    };
  });
  function get(tracking = true) {
    if (tracking)
      track();
    return source;
  }
  function set(value, triggering = true) {
    var _a, _b;
    if (value === source)
      return;
    const old = source;
    if (((_a = options.onBeforeChange) == null ? void 0 : _a.call(options, value, old)) === false)
      return;
    source = value;
    (_b = options.onChanged) == null ? void 0 : _b.call(options, value, old);
    if (triggering)
      trigger();
  }
  const untrackedGet = () => get(false);
  const silentSet = (v) => set(v, false);
  const peek = () => get(false);
  const lay = (v) => set(v, false);
  return extendRef(ref, {
    get,
    set,
    untrackedGet,
    silentSet,
    peek,
    lay
  }, { enumerable: true });
}
const controlledRef = (/* unused pure expression or super */ null && (refWithControl));

function shared_set(...args) {
  if (args.length === 2) {
    const [ref, value] = args;
    ref.value = value;
  }
  if (args.length === 3) {
    if (isVue2) {
      set$1(...args);
    } else {
      const [target, key, value] = args;
      target[key] = value;
    }
  }
}

function shared_syncRef(left, right, options = {}) {
  const {
    flush = "sync",
    deep = false,
    immediate = true,
    direction = "both"
  } = options;
  let stop1, stop2;
  if (direction === "both" || direction === "ltr") {
    stop1 = watch(left, (newValue) => right.value = newValue, { flush, deep, immediate });
  }
  if (direction === "both" || direction === "rtl") {
    stop2 = watch(right, (newValue) => left.value = newValue, { flush, deep, immediate });
  }
  return () => {
    stop1 == null ? void 0 : stop1();
    stop2 == null ? void 0 : stop2();
  };
}

function syncRefs(source, targets, options = {}) {
  const {
    flush = "sync",
    deep = false,
    immediate = true
  } = options;
  if (!Array.isArray(targets))
    targets = [targets];
  return watch(source, (newValue) => targets.forEach((target) => target.value = newValue), { flush, deep, immediate });
}

var __defProp$6 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
function shared_toRefs(objectRef) {
  if (!isRef(objectRef))
    return toRefs$1(objectRef);
  const result = Array.isArray(objectRef.value) ? new Array(objectRef.value.length) : {};
  for (const key in objectRef.value) {
    result[key] = customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        if (Array.isArray(objectRef.value)) {
          const copy = [...objectRef.value];
          copy[key] = v;
          objectRef.value = copy;
        } else {
          objectRef.value = __spreadProps$4(__spreadValues$6({}, objectRef.value), { [key]: v });
        }
      }
    }));
  }
  return result;
}

function shared_tryOnBeforeMount(fn, sync = true) {
  if (getCurrentInstance())
    onBeforeMount(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function tryOnBeforeUnmount(fn) {
  if (getCurrentInstance())
    onBeforeUnmount(fn);
}

function shared_tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function shared_tryOnUnmounted(fn) {
  if (getCurrentInstance())
    onUnmounted(fn);
}

function shared_until(r) {
  let isNot = false;
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(r, (v) => {
        if (condition(v) === !isNot) {
          stop == null ? void 0 : stop();
          resolve();
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    });
    const promises = [watcher];
    if (timeout) {
      promises.push(shared_promiseTimeout(timeout, throwOnTimeout).finally(() => {
        stop == null ? void 0 : stop();
      }));
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    return toMatch((v) => v === unref(value), options);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes(unref(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(unref(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  }
}

function useCounter(initialValue = 0, options = {}) {
  const count = ref(initialValue);
  const {
    max = Infinity,
    min = -Infinity
  } = options;
  const inc = (delta = 1) => count.value = Math.min(max, count.value + delta);
  const dec = (delta = 1) => count.value = Math.max(min, count.value - delta);
  const get = () => count.value;
  const set = (val) => count.value = val;
  const reset = (val = initialValue) => {
    initialValue = val;
    return set(val);
  };
  return { count, inc, dec, get, set, reset };
}

const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const formatDate = (date, formatStr) => {
  const years = date.getFullYear();
  const month = date.getMonth();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const day = date.getDay();
  const matches = {
    YY: String(years).slice(-2),
    YYYY: years,
    M: month + 1,
    MM: `${month + 1}`.padStart(2, "0"),
    D: String(days),
    DD: `${days}`.padStart(2, "0"),
    H: String(hours),
    HH: `${hours}`.padStart(2, "0"),
    h: `${hours % 12 || 12}`.padStart(1, "0"),
    hh: `${hours % 12 || 12}`.padStart(2, "0"),
    m: String(minutes),
    mm: `${minutes}`.padStart(2, "0"),
    s: String(seconds),
    ss: `${seconds}`.padStart(2, "0"),
    SSS: `${milliseconds}`.padStart(3, "0"),
    d: day
  };
  return formatStr.replace(REGEX_FORMAT, (match, $1) => $1 || matches[match]);
};
const normalizeDate = (date) => {
  if (date === null)
    return new Date(NaN);
  if (date === void 0)
    return new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE);
    if (d) {
      const m = d[2] - 1 || 0;
      const ms = (d[7] || "0").substring(0, 3);
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
function useDateFormat(date, formatStr = "HH:mm:ss") {
  return computed(() => formatDate(normalizeDate(unref(date)), unref(formatStr)));
}

function shared_useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    if (interval <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, unref(interval));
  }
  if (immediate && shared_isClient)
    resume();
  if (isRef(interval)) {
    const stopWatch = watch(interval, () => {
      if (immediate && shared_isClient)
        resume();
    });
    shared_tryOnScopeDispose(stopWatch);
  }
  shared_tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function useInterval(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    immediate = true
  } = options;
  const counter = ref(0);
  const controls = shared_useIntervalFn(() => counter.value += 1, interval, { immediate });
  if (exposeControls) {
    return __spreadValues$5({
      counter
    }, controls);
  } else {
    return counter;
  }
}

function useLastChanged(source, options = {}) {
  var _a;
  const ms = ref((_a = options.initialValue) != null ? _a : null);
  watch(source, () => ms.value = shared_timestamp(), options);
  return ms;
}

function shared_useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (shared_isClient)
      start();
  }
  shared_tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}

var __defProp$4 = Object.defineProperty;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
function useTimeout(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false
  } = options;
  const controls = shared_useTimeoutFn(shared_noop, interval, options);
  const ready = computed(() => !controls.isPending.value);
  if (exposeControls) {
    return __spreadValues$4({
      ready
    }, controls);
  } else {
    return ready;
  }
}

function useToggle(initialValue = false) {
  if (isRef(initialValue)) {
    return (value) => {
      initialValue.value = typeof value === "boolean" ? value : !initialValue.value;
      return initialValue.value;
    };
  } else {
    const boolean = ref(initialValue);
    const toggle = (value) => {
      boolean.value = typeof value === "boolean" ? value : !boolean.value;
      return boolean.value;
    };
    return [boolean, toggle];
  }
}

var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function shared_watchWithFilter(source, cb, options = {}) {
  const _a = options, {
    eventFilter = shared_bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return watch(source, shared_createFilterWrapper(eventFilter, cb), watchOptions);
}

var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __objRest$4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchAtMost(source, cb, options) {
  const _a = options, {
    count
  } = _a, watchOptions = __objRest$4(_a, [
    "count"
  ]);
  const current = ref(0);
  const stop = shared_watchWithFilter(source, (...args) => {
    current.value += 1;
    if (current.value >= unref(count))
      nextTick(() => stop());
    cb(...args);
  }, watchOptions);
  return { count: current, stop };
}

var __defProp$3 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchDebounced(source, cb, options = {}) {
  const _a = options, {
    debounce = 0
  } = _a, watchOptions = __objRest$3(_a, [
    "debounce"
  ]);
  return shared_watchWithFilter(source, cb, __spreadProps$3(__spreadValues$3({}, watchOptions), {
    eventFilter: shared_debounceFilter(debounce)
  }));
}

var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function shared_watchIgnorable(source, cb, options = {}) {
  const _a = options, {
    eventFilter = shared_bypassFilter
  } = _a, watchOptions = __objRest$2(_a, [
    "eventFilter"
  ]);
  const filteredCb = shared_createFilterWrapper(eventFilter, cb);
  let ignoreUpdates;
  let ignorePrevAsyncUpdates;
  let stop;
  if (watchOptions.flush === "sync") {
    const ignore = ref(false);
    ignorePrevAsyncUpdates = () => {
    };
    ignoreUpdates = (updater) => {
      ignore.value = true;
      updater();
      ignore.value = false;
    };
    stop = watch(source, (...args) => {
      if (!ignore.value)
        filteredCb(...args);
    }, watchOptions);
  } else {
    const disposables = [];
    const ignoreCounter = ref(0);
    const syncCounter = ref(0);
    ignorePrevAsyncUpdates = () => {
      ignoreCounter.value = syncCounter.value;
    };
    disposables.push(watch(source, () => {
      syncCounter.value++;
    }, __spreadProps$2(__spreadValues$2({}, watchOptions), { flush: "sync" })));
    ignoreUpdates = (updater) => {
      const syncCounterPrev = syncCounter.value;
      updater();
      ignoreCounter.value += syncCounter.value - syncCounterPrev;
    };
    disposables.push(watch(source, (...args) => {
      const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
      ignoreCounter.value = 0;
      syncCounter.value = 0;
      if (ignore)
        return;
      filteredCb(...args);
    }, watchOptions));
    stop = () => {
      disposables.forEach((fn) => fn());
    };
  }
  return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

function watchOnce(source, cb, options) {
  const stop = watch(source, (...args) => {
    nextTick(() => stop());
    return cb(...args);
  }, options);
}

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a = options, {
    eventFilter: filter
  } = _a, watchOptions = __objRest$1(_a, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = shared_pausableFilter(filter);
  const stop = shared_watchWithFilter(source, cb, __spreadProps$1(__spreadValues$1({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchThrottled(source, cb, options = {}) {
  const _a = options, {
    throttle = 0,
    trailing = true,
    leading = true
  } = _a, watchOptions = __objRest(_a, [
    "throttle",
    "trailing",
    "leading"
  ]);
  return shared_watchWithFilter(source, cb, __spreadProps(__spreadValues({}, watchOptions), {
    eventFilter: shared_throttleFilter(throttle, trailing, leading)
  }));
}

function whenever(source, cb, options) {
  return watch(source, (v, ov, onInvalidate) => {
    if (v)
      cb(v, ov, onInvalidate);
  }, options);
}



;// CONCATENATED MODULE: ./node_modules/lodash-es/fromPairs.js
/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

/* harmony default export */ const lodash_es_fromPairs = (fromPairs);

;// CONCATENATED MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = (/* unused pure expression or super */ null && ('Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt'));
const isGloballyWhitelisted = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(GLOBALS_WHITE_LISTED)));

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
    lines = lines.filter((_, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count +=
            lines[i].length +
                ((newlineSequences[i] && newlineSequences[i].length) || 0);
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = (newlineSequences[j] && newlineSequences[j].length) || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(specialBooleanAttrs)));
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */
function includeBooleanAttr(value) {
    return !!value || value === '';
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`)));
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownHtmlAttr = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`)));
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */
const isKnownSvgAttr = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` +
    `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` +
    `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` +
    `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` +
    `color-interpolation-filters,color-profile,color-rendering,` +
    `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` +
    `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` +
    `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` +
    `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` +
    `font-family,font-size,font-size-adjust,font-stretch,font-style,` +
    `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` +
    `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` +
    `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` +
    `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` +
    `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` +
    `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` +
    `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` +
    `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` +
    `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` +
    `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` +
    `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` +
    `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` +
    `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` +
    `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` +
    `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` +
    `specularConstant,specularExponent,speed,spreadMethod,startOffset,` +
    `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` +
    `strikethrough-position,strikethrough-thickness,string,stroke,` +
    `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` +
    `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` +
    `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` +
    `text-decoration,text-rendering,textLength,to,transform,transform-origin,` +
    `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` +
    `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` +
    `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` +
    `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` +
    `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` +
    `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` +
    `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`)));

function normalizeStyle(value) {
    if (shared_esm_bundler_isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = shared_esm_bundler_isString(item)
                ? parseStringStyle(item)
                : normalizeStyle(item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (shared_esm_bundler_isString(value)) {
        return value;
    }
    else if (shared_esm_bundler_isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles || shared_esm_bundler_isString(styles)) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (shared_esm_bundler_isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (shared_esm_bundler_isString(value)) {
        res = value;
    }
    else if (shared_esm_bundler_isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + ' ';
            }
        }
    }
    else if (shared_esm_bundler_isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props)
        return null;
    let { class: klass, style } = props;
    if (klass && !shared_esm_bundler_isString(klass)) {
        props.class = normalizeClass(klass);
    }
    if (style) {
        props.style = normalizeStyle(style);
    }
    return props;
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = (/* unused pure expression or super */ null && ('html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot'));
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = (/* unused pure expression or super */ null && ('svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view'));
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isHTMLTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(HTML_TAGS)));
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isSVGTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(SVG_TAGS)));
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isVoidTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(VOID_TAGS)));

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = shared_esm_bundler_isArray(a);
    bValidType = shared_esm_bundler_isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = shared_esm_bundler_isObject(a);
    bValidType = shared_esm_bundler_isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return shared_esm_bundler_isString(val)
        ? val
        : val == null
            ? ''
            : shared_esm_bundler_isArray(val) ||
                (shared_esm_bundler_isObject(val) &&
                    (val.toString === objectToString || !shared_esm_bundler_isFunction(val.toString)))
                ? JSON.stringify(val, replacer, 2)
                : String(val);
};
const replacer = (_key, val) => {
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) {
        return replacer(_key, val.value);
    }
    else if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (shared_esm_bundler_isObject(val) && !shared_esm_bundler_isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

const EMPTY_OBJ = ( false)
    ? 0
    : {};
const EMPTY_ARR = ( false) ? 0 : [];
const shared_esm_bundler_NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const shared_esm_bundler_hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => shared_esm_bundler_hasOwnProperty.call(val, key);
const shared_esm_bundler_isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => val instanceof Date;
const shared_esm_bundler_isFunction = (val) => typeof val === 'function';
const shared_esm_bundler_isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const shared_esm_bundler_isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return shared_esm_bundler_isObject(val) && shared_esm_bundler_isFunction(val.then) && shared_esm_bundler_isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => shared_esm_bundler_isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted')));
const isBuiltInDirective = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo')));
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof __webpack_require__.g !== 'undefined'
                            ? __webpack_require__.g
                            : {}));
};



;// CONCATENATED MODULE: ./node_modules/element-plus/es/utils/vue/props.mjs






const wrapperKey = Symbol();
const propKey = "__elPropsReservedKey";
function buildProp(option, key) {
  if (!shared_esm_bundler_isObject(option) || !!option[propKey])
    return option;
  const { values, required, default: defaultValue, type, validator } = option;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(option, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.warn)(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const prop = {
    type: shared_esm_bundler_isObject(type) && Object.getOwnPropertySymbols(type).includes(wrapperKey) ? type[wrapperKey] : type,
    required: !!required,
    validator: _validator,
    [propKey]: true
  };
  if (hasOwn(option, "default"))
    prop.default = defaultValue;
  return prop;
}
const buildProps = (props) => lodash_es_fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const definePropType = (val) => ({ [wrapperKey]: val });


//# sourceMappingURL=props.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/constants/size.mjs
const componentSizes = ["", "default", "small", "large"];
const componentSizeMap = {
  large: 40,
  default: 32,
  small: 24
};
const getComponentSize = (size = "default") => {
  return componentSizeMap[size || "default"];
};


//# sourceMappingURL=size.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/tokens/config-provider.mjs
const configProviderContextKey = Symbol();


//# sourceMappingURL=config-provider.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/utils/error.mjs



class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
  if (false) {}
}


//# sourceMappingURL=error.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/utils/objects.mjs



const keysOf = (arr) => Object.keys(arr);
const entriesOf = (arr) => Object.entries(arr);
const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },
    set value(val) {
      set(obj, path, val);
    }
  };
};


//# sourceMappingURL=objects.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/hooks/use-global-config/index.mjs







const globalConfig = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.getCurrentInstance)() ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.inject)(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
      var _a, _b;
      return (_b = (_a = config.value) == null ? void 0 : _a[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
const provideGlobalConfig = (config, app, global = false) => {
  var _a;
  const inSetup = !!(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.getCurrentInstance)();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a = app == null ? void 0 : app.provide) != null ? _a : inSetup ? external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.provide : void 0;
  if (!provideFn) {
    debugWarn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const context = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
    const cfg = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(config);
    if (!(oldConfig == null ? void 0 : oldConfig.value))
      return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  if (global || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};
const mergeConfig = (a, b) => {
  var _a;
  const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = (_a = b[key]) != null ? _a : a[key];
  }
  return obj;
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/components/config-provider/src/config-provider.mjs








const messageConfig = {};
const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  button: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: {
    type: Number
  },
  namespace: {
    type: String,
    default: "el"
  }
});
var ConfigProvider = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(slots, "default", { config: config == null ? void 0 : config.value });
  }
});


//# sourceMappingURL=config-provider.mjs.map

;// CONCATENATED MODULE: ./node_modules/@vueuse/core/index.mjs





function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if (isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = optionsOrRef || {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    onError = noop
  } = options;
  const started = ref(!lazy);
  const current = ref(initialState);
  let counter = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return computed(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}

function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
  let source = inject(key);
  if (defaultSource)
    source = inject(key, defaultSource);
  if (treatDefaultAsFactory)
    source = inject(key, defaultSource, treatDefaultAsFactory);
  if (typeof options === "function") {
    return computed((ctx) => options(source, ctx));
  } else {
    return computed({
      get: (ctx) => options.get(source, ctx),
      set: options.set
    });
  }
}

const createUnrefFn = (fn) => {
  return function(...args) {
    return fn.apply(this, args.map((i) => unref(i)));
  };
};

function unrefElement(elRef) {
  var _a;
  const plain = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = shared_isClient ? window : void 0;
const defaultDocument = shared_isClient ? window.document : void 0;
const defaultNavigator = shared_isClient ? window.navigator : void 0;
const defaultLocation = shared_isClient ? window.location : void 0;

function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (shared_isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return shared_noop;
  let cleanup = shared_noop;
  const stopWatch = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = shared_noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  shared_tryOnScopeDispose(stop);
  return stop;
}

function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore, capture = true } = options;
  if (!window)
    return;
  const shouldListen = ref(true);
  const listener = (event) => {
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true })
  ];
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

var __defProp$h = Object.defineProperty;
var __defProps$8 = Object.defineProperties;
var __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$j = Object.getOwnPropertySymbols;
var __hasOwnProp$j = Object.prototype.hasOwnProperty;
var __propIsEnum$j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$j.call(b, prop))
      __defNormalProp$h(a, prop, b[prop]);
  if (__getOwnPropSymbols$j)
    for (var prop of __getOwnPropSymbols$j(b)) {
      if (__propIsEnum$j.call(b, prop))
        __defNormalProp$h(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$8 = (a, b) => __defProps$8(a, __getOwnPropDescs$8(b));
const createKeyPredicate = (keyFilter) => {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  else if (keyFilter)
    return () => true;
  else
    return () => false;
};
function onKeyStroke(key, handler, options = {}) {
  const { target = defaultWindow, eventName = "keydown", passive = false } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$h({}, options), { eventName: "keydown" }));
}
function onKeyPressed(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$h({}, options), { eventName: "keypress" }));
}
function onKeyUp(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$h({}, options), { eventName: "keyup" }));
}

const DEFAULT_DELAY = 500;
function onLongPress(target, handler, options) {
  const elementRef = computed(() => unrefElement$1(target));
  let timeout = null;
  function clear() {
    if (timeout != null) {
      clearTimeout(timeout);
      timeout = null;
    }
  }
  function onDown(ev) {
    var _a;
    clear();
    timeout = setTimeout(() => handler(ev), (_a = options == null ? void 0 : options.delay) != null ? _a : DEFAULT_DELAY);
  }
  useEventListener$1(elementRef, "pointerdown", onDown);
  useEventListener$1(elementRef, "pointerup", clear);
  useEventListener$1(elementRef, "pointerleave", clear);
}

const isFocusedElementEditable = () => {
  const { activeElement, body } = document;
  if (!activeElement)
    return false;
  if (activeElement === body)
    return false;
  switch (activeElement.tagName) {
    case "INPUT":
    case "TEXTAREA":
      return true;
  }
  return activeElement.hasAttribute("contenteditable");
};
const isTypedCharValid = ({
  keyCode,
  metaKey,
  ctrlKey,
  altKey
}) => {
  if (metaKey || ctrlKey || altKey)
    return false;
  if (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105)
    return true;
  if (keyCode >= 65 && keyCode <= 90)
    return true;
  return false;
};
function onStartTyping(callback, options = {}) {
  const { document: document2 = defaultDocument } = options;
  const keydown = (event) => {
    !isFocusedElementEditable() && isTypedCharValid(event) && callback(event);
  };
  if (document2)
    useEventListener(document2, "keydown", keydown, { passive: true });
}

function templateRef(key, initialValue = null) {
  const instance = getCurrentInstance();
  let _trigger = () => {
  };
  const element = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a, _b;
        track();
        return (_b = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$refs[key]) != null ? _b : initialValue;
      },
      set() {
      }
    };
  });
  tryOnMounted(_trigger);
  onUpdated(_trigger);
  return element;
}

function useActiveElement(options = {}) {
  const { window = defaultWindow } = options;
  const counter = ref(0);
  if (window) {
    useEventListener(window, "blur", () => counter.value += 1, true);
    useEventListener(window, "focus", () => counter.value += 1, true);
  }
  return computed(() => {
    counter.value;
    return window == null ? void 0 : window.document.activeElement;
  });
}

function useAsyncQueue(tasks, options = {}) {
  const {
    interrupt = true,
    onError = noop,
    onFinished = noop
  } = options;
  const promiseState = {
    pending: "pending",
    rejected: "rejected",
    fulfilled: "fulfilled"
  };
  const initialResult = Array.from(new Array(tasks.length), () => ({ state: promiseState.pending, data: null }));
  const result = reactive(initialResult);
  const activeIndex = ref(-1);
  if (!tasks || tasks.length === 0) {
    onFinished();
    return {
      activeIndex,
      result
    };
  }
  function updateResult(state, res) {
    activeIndex.value++;
    result[activeIndex.value].data = res;
    result[activeIndex.value].state = state;
  }
  tasks.reduce((prev, curr) => {
    return prev.then((prevRes) => {
      var _a;
      if (((_a = result[activeIndex.value]) == null ? void 0 : _a.state) === promiseState.rejected && interrupt) {
        onFinished();
        return;
      }
      return curr(prevRes).then((currentRes) => {
        updateResult(promiseState.fulfilled, currentRes);
        activeIndex.value === tasks.length - 1 && onFinished();
        return currentRes;
      });
    }).catch((e) => {
      updateResult(promiseState.rejected, e);
      onError();
      return e;
    });
  }, Promise.resolve());
  return {
    activeIndex,
    result
  };
}

function useAsyncState(promise, initialState, options) {
  const {
    immediate = true,
    delay = 0,
    onError = noop,
    resetOnExecute = true,
    shallow = true
  } = options != null ? options : {};
  const state = shallow ? shallowRef(initialState) : ref(initialState);
  const isReady = ref(false);
  const isLoading = ref(false);
  const error = ref(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = initialState;
    error.value = void 0;
    isReady.value = false;
    isLoading.value = true;
    if (delay2 > 0)
      await promiseTimeout(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
    } catch (e) {
      error.value = e;
      onError(e);
    }
    isLoading.value = false;
    return state.value;
  }
  if (immediate)
    execute(delay);
  return {
    state,
    isReady,
    isLoading,
    error,
    execute
  };
}

function useBase64(target, options) {
  const base64 = ref("");
  const promise = ref();
  function execute() {
    if (!isClient)
      return;
    promise.value = new Promise((resolve, reject) => {
      try {
        const _target = unref(target);
        if (_target === void 0 || _target === null) {
          resolve("");
        } else if (typeof _target === "string") {
          resolve(blobToBase64(new Blob([_target], { type: "text/plain" })));
        } else if (_target instanceof Blob) {
          resolve(blobToBase64(_target));
        } else if (_target instanceof ArrayBuffer) {
          resolve(window.btoa(String.fromCharCode(...new Uint8Array(_target))));
        } else if (_target instanceof HTMLCanvasElement) {
          resolve(_target.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
        } else if (_target instanceof HTMLImageElement) {
          const img = _target.cloneNode(false);
          img.crossOrigin = "Anonymous";
          imgLoaded(img).then(() => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
          }).catch(reject);
        } else {
          reject(new Error("target is unsupported types"));
        }
      } catch (error) {
        reject(error);
      }
    });
    promise.value.then((res) => base64.value = res);
    return promise.value;
  }
  watch(target, execute, { immediate: true });
  return {
    base64,
    promise,
    execute
  };
}
function imgLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => {
        resolve();
      };
      img.onerror = reject;
    } else {
      resolve();
    }
  });
}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = (e) => {
      resolve(e.target.result);
    };
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

function useBattery({ navigator = defaultNavigator } = {}) {
  const events = ["chargingchange", "chargingtimechange", "dischargingtimechange", "levelchange"];
  const isSupported = navigator && "getBattery" in navigator;
  const charging = ref(false);
  const chargingTime = ref(0);
  const dischargingTime = ref(0);
  const level = ref(1);
  let battery;
  function updateBatteryInfo() {
    charging.value = this.charging;
    chargingTime.value = this.chargingTime || 0;
    dischargingTime.value = this.dischargingTime || 0;
    level.value = this.level;
  }
  if (isSupported) {
    navigator.getBattery().then((_battery) => {
      battery = _battery;
      updateBatteryInfo.call(battery);
      for (const event of events)
        useEventListener(battery, event, updateBatteryInfo, { passive: true });
    });
  }
  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level
  };
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  let mediaQuery;
  const matches = ref(false);
  const update = () => {
    if (!window)
      return;
    if (!mediaQuery)
      mediaQuery = window.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnBeforeMount(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}

const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
const breakpointsBootstrapV5 = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
const breakpointsVuetify = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904
};
const breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const breakpointsQuasar = {
  xs: 600,
  sm: 1024,
  md: 1440,
  lg: 1920
};
const breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560
};

var __defProp$g = Object.defineProperty;
var __getOwnPropSymbols$i = Object.getOwnPropertySymbols;
var __hasOwnProp$i = Object.prototype.hasOwnProperty;
var __propIsEnum$i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$i.call(b, prop))
      __defNormalProp$g(a, prop, b[prop]);
  if (__getOwnPropSymbols$i)
    for (var prop of __getOwnPropSymbols$i(b)) {
      if (__propIsEnum$i.call(b, prop))
        __defNormalProp$g(a, prop, b[prop]);
    }
  return a;
};
function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window = defaultWindow } = options;
  function match(query) {
    if (!window)
      return false;
    return window.matchMedia(query).matches;
  }
  const greater = (k) => {
    return useMediaQuery(`(min-width: ${getValue(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greater(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return __spreadValues$g({
    greater,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    }
  }, shortcutMethods);
}

const useBroadcastChannel = (options) => {
  const {
    name,
    window = defaultWindow
  } = options;
  const isSupported = window && "BroadcastChannel" in window;
  const isClosed = ref(false);
  const channel = ref();
  const data = ref();
  const error = ref(null);
  const post = (data2) => {
    if (channel.value)
      channel.value.postMessage(data2);
  };
  const close = () => {
    if (channel.value)
      channel.value.close();
    isClosed.value = true;
  };
  if (isSupported) {
    tryOnMounted(() => {
      error.value = null;
      channel.value = new BroadcastChannel(name);
      channel.value.addEventListener("message", (e) => {
        data.value = e.data;
      }, { passive: true });
      channel.value.addEventListener("messageerror", (e) => {
        error.value = e;
      }, { passive: true });
      channel.value.addEventListener("close", () => {
        isClosed.value = true;
      });
    });
  }
  tryOnScopeDispose(() => {
    close();
  });
  return {
    isSupported,
    channel,
    data,
    post,
    close,
    error,
    isClosed
  };
};

function useBrowserLocation({ window = defaultWindow } = {}) {
  const buildState = (trigger) => {
    const { state: state2, length } = (window == null ? void 0 : window.history) || {};
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window == null ? void 0 : window.location) || {};
    return {
      trigger,
      state: state2,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };
  const state = ref(buildState("load"));
  if (window) {
    useEventListener(window, "popstate", () => state.value = buildState("popstate"), { passive: true });
    useEventListener(window, "hashchange", () => state.value = buildState("hashchange"), { passive: true });
  }
  return state;
}

function useCached(refValue, comparator = (a, b) => a === b, watchOptions) {
  const cachedValue = ref(refValue.value);
  watch(() => refValue.value, (value) => {
    if (!comparator(value, cachedValue.value))
      cachedValue.value = value;
  }, watchOptions);
  return cachedValue;
}

function useClamp(value, min, max) {
  const _value = ref(value);
  return computed({
    get() {
      return _value.value = clamp(_value.value, unref(min), unref(max));
    },
    set(value2) {
      _value.value = clamp(value2, unref(min), unref(max));
    }
  });
}

function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500
  } = options;
  const events = ["copy", "cut"];
  const isSupported = Boolean(navigator && "clipboard" in navigator);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    navigator.clipboard.readText().then((value) => {
      text.value = value;
    });
  }
  if (isSupported && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = unref(source)) {
    if (isSupported && value != null) {
      await navigator.clipboard.writeText(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}

const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function setSSRHandler(key, fn) {
  handlers[key] = fn;
}

function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}

const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
function useStorage(key, initialValue, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(initialValue);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = unref(initialValue);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = pausableWatch(data, () => write(data.value), { flush, deep, eventFilter });
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", update);
  update();
  return data;
  function write(v) {
    try {
      if (v == null)
        storage.removeItem(key);
      else
        storage.setItem(key, serializer.write(v));
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    } finally {
      resumeWatch();
    }
  }
  function update(event) {
    if (event && event.key !== key)
      return;
    data.value = read(event);
  }
}

function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}

var __defProp$f = Object.defineProperty;
var __getOwnPropSymbols$h = Object.getOwnPropertySymbols;
var __hasOwnProp$h = Object.prototype.hasOwnProperty;
var __propIsEnum$h = Object.prototype.propertyIsEnumerable;
var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$h.call(b, prop))
      __defNormalProp$f(a, prop, b[prop]);
  if (__getOwnPropSymbols$h)
    for (var prop of __getOwnPropSymbols$h(b)) {
      if (__propIsEnum$h.call(b, prop))
        __defNormalProp$f(a, prop, b[prop]);
    }
  return a;
};
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    window = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef
  } = options;
  const modes = __spreadValues$f({
    auto: "",
    light: "light",
    dark: "dark"
  }, options.modes || {});
  const preferredDark = usePreferredDark({ window });
  const preferredMode = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? ref("auto") : useStorage(storageKey, "auto", storage, { window, listenToStorageChanges }));
  const state = computed({
    get() {
      return store.value === "auto" ? preferredMode.value : store.value;
    },
    set(v) {
      store.value = v;
    }
  });
  const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector2, attribute2, value) => {
    const el = window == null ? void 0 : window.document.querySelector(selector2);
    if (!el)
      return;
    if (attribute2 === "class") {
      const current = value.split(/\s/g);
      Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
        if (current.includes(v))
          el.classList.add(v);
        else
          el.classList.remove(v);
      });
    } else {
      el.setAttribute(attribute2, value);
    }
  });
  function defaultOnChanged(mode) {
    var _a;
    updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  watch(state, onChanged, { flush: "post", immediate: true });
  tryOnMounted(() => onChanged(state.value));
  return state;
}

function useConfirmDialog(revealed = ref(false)) {
  const confirmHook = createEventHook();
  const cancelHook = createEventHook();
  const revealHook = createEventHook();
  let _resolve = noop;
  const reveal = (data) => {
    revealHook.trigger(data);
    revealed.value = true;
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  };
  const confirm = (data) => {
    revealed.value = false;
    confirmHook.trigger(data);
    _resolve({ data, isCanceled: false });
  };
  const cancel = (data) => {
    revealed.value = false;
    cancelHook.trigger(data);
    _resolve({ data, isCanceled: true });
  };
  return {
    isRevealed: computed(() => revealed.value),
    reveal,
    confirm,
    cancel,
    onReveal: revealHook.on,
    onConfirm: confirmHook.on,
    onCancel: cancelHook.on
  };
}

function useCssVar(prop, target, { window = defaultWindow } = {}) {
  const variable = ref("");
  const elRef = computed(() => {
    var _a;
    return unrefElement(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  watch([elRef, () => unref(prop)], ([el, prop2]) => {
    if (el && window)
      variable.value = window.getComputedStyle(el).getPropertyValue(prop2);
  }, { immediate: true });
  watch(variable, (val) => {
    var _a;
    if ((_a = elRef.value) == null ? void 0 : _a.style)
      elRef.value.style.setProperty(unref(prop), val);
  });
  return variable;
}

function useCycleList(list, options) {
  var _a;
  const state = shallowRef((_a = options == null ? void 0 : options.initialValue) != null ? _a : list[0]);
  const index = computed({
    get() {
      var _a2;
      let index2 = (options == null ? void 0 : options.getIndexOf) ? options.getIndexOf(state.value, list) : list.indexOf(state.value);
      if (index2 < 0)
        index2 = (_a2 = options == null ? void 0 : options.fallbackIndex) != null ? _a2 : 0;
      return index2;
    },
    set(v) {
      set(v);
    }
  });
  function set(i) {
    const length = list.length;
    const index2 = (i % length + length) % length;
    const value = list[index2];
    state.value = value;
    return value;
  }
  function shift(delta = 1) {
    return set(index.value + delta);
  }
  function next(n = 1) {
    return shift(n);
  }
  function prev(n = 1) {
    return shift(-n);
  }
  return {
    state,
    index,
    next,
    prev
  };
}

var __defProp$e = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$g.call(b, prop))
      __defNormalProp$e(a, prop, b[prop]);
  if (__getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(b)) {
      if (__propIsEnum$g.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window = defaultWindow
  } = options;
  const mode = useColorMode(__spreadProps$7(__spreadValues$e({}, options), {
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark");
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  }));
  const preferredDark = usePreferredDark({ window });
  const isDark = computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      if (v === preferredDark.value)
        mode.value = "auto";
      else
        mode.value = v ? "dark" : "light";
    }
  });
  return isDark;
}

const fnClone = (v) => JSON.parse(JSON.stringify(v));
const fnBypass = (v) => v;
const fnSetSource = (source, value) => source.value = value;
function defaultDump(clone) {
  return clone ? isFunction(clone) ? clone : fnClone : fnBypass;
}
function defaultParse(clone) {
  return clone ? isFunction(clone) ? clone : fnClone : fnBypass;
}
function useManualRefHistory(source, options = {}) {
  const {
    clone = false,
    dump = defaultDump(clone),
    parse = defaultParse(clone),
    setSource = fnSetSource
  } = options;
  function _createHistoryRecord() {
    return markRaw({
      snapshot: dump(source.value),
      timestamp: timestamp()
    });
  }
  const last = ref(_createHistoryRecord());
  const undoStack = ref([]);
  const redoStack = ref([]);
  const _setSource = (record) => {
    setSource(source, parse(record.snapshot));
    last.value = record;
  };
  const commit = () => {
    undoStack.value.unshift(last.value);
    last.value = _createHistoryRecord();
    if (options.capacity && undoStack.value.length > options.capacity)
      undoStack.value.splice(options.capacity, Infinity);
    if (redoStack.value.length)
      redoStack.value.splice(0, redoStack.value.length);
  };
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length);
    redoStack.value.splice(0, redoStack.value.length);
  };
  const undo = () => {
    const state = undoStack.value.shift();
    if (state) {
      redoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const redo = () => {
    const state = redoStack.value.shift();
    if (state) {
      undoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const reset = () => {
    _setSource(last.value);
  };
  const history = computed(() => [last.value, ...undoStack.value]);
  const canUndo = computed(() => undoStack.value.length > 0);
  const canRedo = computed(() => redoStack.value.length > 0);
  return {
    source,
    undoStack,
    redoStack,
    last,
    history,
    canUndo,
    canRedo,
    clear,
    commit,
    reset,
    undo,
    redo
  };
}

var __defProp$d = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
var __hasOwnProp$f = Object.prototype.hasOwnProperty;
var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$f.call(b, prop))
      __defNormalProp$d(a, prop, b[prop]);
  if (__getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(b)) {
      if (__propIsEnum$f.call(b, prop))
        __defNormalProp$d(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function useRefHistory(source, options = {}) {
  const {
    deep = false,
    flush = "pre",
    eventFilter
  } = options;
  const {
    eventFilter: composedFilter,
    pause,
    resume: resumeTracking,
    isActive: isTracking
  } = pausableFilter(eventFilter);
  const {
    ignoreUpdates,
    ignorePrevAsyncUpdates,
    stop
  } = watchIgnorable(source, commit, { deep, flush, eventFilter: composedFilter });
  function setSource(source2, value) {
    ignorePrevAsyncUpdates();
    ignoreUpdates(() => {
      source2.value = value;
    });
  }
  const manualHistory = useManualRefHistory(source, __spreadProps$6(__spreadValues$d({}, options), { clone: options.clone || deep, setSource }));
  const { clear, commit: manualCommit } = manualHistory;
  function commit() {
    ignorePrevAsyncUpdates();
    manualCommit();
  }
  function resume(commitNow) {
    resumeTracking();
    if (commitNow)
      commit();
  }
  function batch(fn) {
    let canceled = false;
    const cancel = () => canceled = true;
    ignoreUpdates(() => {
      fn(cancel);
    });
    if (!canceled)
      commit();
  }
  function dispose() {
    stop();
    clear();
  }
  return __spreadProps$6(__spreadValues$d({}, manualHistory), {
    isTracking,
    pause,
    resume,
    commit,
    batch,
    dispose
  });
}

var __defProp$c = Object.defineProperty;
var core_defProps$5 = Object.defineProperties;
var core_getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$e.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(b)) {
      if (__propIsEnum$e.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$5 = (a, b) => core_defProps$5(a, core_getOwnPropDescs$5(b));
function useDebouncedRefHistory(source, options = {}) {
  const filter = options.debounce ? debounceFilter(options.debounce) : void 0;
  const history = useRefHistory(source, core_spreadProps$5(__spreadValues$c({}, options), { eventFilter: filter }));
  return __spreadValues$c({}, history);
}

function useDeviceMotion(options = {}) {
  const {
    window = defaultWindow,
    eventFilter = bypassFilter
  } = options;
  const acceleration = ref({ x: null, y: null, z: null });
  const rotationRate = ref({ alpha: null, beta: null, gamma: null });
  const interval = ref(0);
  const accelerationIncludingGravity = ref({
    x: null,
    y: null,
    z: null
  });
  if (window) {
    const onDeviceMotion = createFilterWrapper(eventFilter, (event) => {
      acceleration.value = event.acceleration;
      accelerationIncludingGravity.value = event.accelerationIncludingGravity;
      rotationRate.value = event.rotationRate;
      interval.value = event.interval;
    });
    useEventListener(window, "devicemotion", onDeviceMotion);
  }
  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval
  };
}

function useDeviceOrientation(options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = Boolean(window && "DeviceOrientationEvent" in window);
  const isAbsolute = ref(false);
  const alpha = ref(null);
  const beta = ref(null);
  const gamma = ref(null);
  if (window && isSupported) {
    useEventListener(window, "deviceorientation", (event) => {
      isAbsolute.value = event.absolute;
      alpha.value = event.alpha;
      beta.value = event.beta;
      gamma.value = event.gamma;
    });
  }
  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma
  };
}

const DEVICE_PIXEL_RATIO_SCALES = (/* unused pure expression or super */ null && ([
  1,
  1.325,
  1.4,
  1.5,
  1.8,
  2,
  2.4,
  2.5,
  2.75,
  3,
  3.5,
  4
]));
function useDevicePixelRatio({
  window = defaultWindow
} = {}) {
  if (!window) {
    return {
      pixelRatio: ref(1)
    };
  }
  const pixelRatio = ref(window.devicePixelRatio);
  const handleDevicePixelRatio = () => {
    pixelRatio.value = window.devicePixelRatio;
  };
  useEventListener(window, "resize", handleDevicePixelRatio, { passive: true });
  DEVICE_PIXEL_RATIO_SCALES.forEach((dppx) => {
    const mqlMin = useMediaQuery(`screen and (min-resolution: ${dppx}dppx)`);
    const mqlMax = useMediaQuery(`screen and (max-resolution: ${dppx}dppx)`);
    watch([mqlMin, mqlMax], handleDevicePixelRatio);
  });
  return { pixelRatio };
}

function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = Boolean(navigator && "permissions" in navigator);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = ref();
  const onChange = () => {
    if (permissionStatus)
      state.value = permissionStatus.state;
  };
  const query = createSingletonPromise(async () => {
    if (!isSupported)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e) {
        state.value = "prompt";
      }
    }
    return permissionStatus;
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}

function useDevicesList(options = {}) {
  const {
    navigator = defaultNavigator,
    requestPermissions = false,
    constraints = { audio: true, video: true },
    onUpdated
  } = options;
  const devices = ref([]);
  const videoInputs = computed(() => devices.value.filter((i) => i.kind === "videoinput"));
  const audioInputs = computed(() => devices.value.filter((i) => i.kind === "audioinput"));
  const audioOutputs = computed(() => devices.value.filter((i) => i.kind === "audiooutput"));
  let isSupported = false;
  const permissionGranted = ref(false);
  async function update() {
    if (!isSupported)
      return;
    devices.value = await navigator.mediaDevices.enumerateDevices();
    onUpdated == null ? void 0 : onUpdated(devices.value);
  }
  async function ensurePermissions() {
    if (!isSupported)
      return false;
    if (permissionGranted.value)
      return true;
    const { state, query } = usePermission("camera", { controls: true });
    await query();
    if (state.value !== "granted") {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      stream.getTracks().forEach((t) => t.stop());
      update();
      permissionGranted.value = true;
    } else {
      permissionGranted.value = true;
    }
    return permissionGranted.value;
  }
  if (navigator) {
    isSupported = Boolean(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
    if (isSupported) {
      if (requestPermissions)
        ensurePermissions();
      useEventListener(navigator.mediaDevices, "devicechange", update);
      update();
    }
  }
  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported
  };
}

function useDisplayMedia(options = {}) {
  var _a, _b;
  const enabled = ref((_a = options.enabled) != null ? _a : false);
  const video = options.video;
  const audio = options.audio;
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_b = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _b.getDisplayMedia);
  const constraint = { audio, video };
  const stream = shallowRef();
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getDisplayMedia(constraint);
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  watch(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    enabled
  };
}

function useDocumentVisibility({ document = defaultDocument } = {}) {
  if (!document)
    return ref("visible");
  const visibility = ref(document.visibilityState);
  useEventListener(document, "visibilitychange", () => {
    visibility.value = document.visibilityState;
  });
  return visibility;
}

var __defProp$b = Object.defineProperty;
var core_defProps$4 = Object.defineProperties;
var core_getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$4 = (a, b) => core_defProps$4(a, core_getOwnPropDescs$4(b));
function useDraggable(target, options = {}) {
  var _a, _b;
  const draggingElement = (_a = options.draggingElement) != null ? _a : defaultWindow;
  const position = ref((_b = options.initialValue) != null ? _b : { x: 0, y: 0 });
  const pressedDelta = ref();
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const handleEvent = (e) => {
    if (unref(options.preventDefault))
      e.preventDefault();
    if (unref(options.stopPropagation))
      e.stopPropagation();
  };
  const start = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (unref(options.exact) && e.target !== unref(target))
      return;
    const rect = unref(target).getBoundingClientRect();
    const pos = {
      x: e.pageX - rect.left,
      y: e.pageY - rect.top
    };
    if (((_a2 = options.onStart) == null ? void 0 : _a2.call(options, pos, e)) === false)
      return;
    pressedDelta.value = pos;
    handleEvent(e);
  };
  const move = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    position.value = {
      x: e.pageX - pressedDelta.value.x,
      y: e.pageY - pressedDelta.value.y
    };
    (_a2 = options.onMove) == null ? void 0 : _a2.call(options, position.value, e);
    handleEvent(e);
  };
  const end = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    pressedDelta.value = void 0;
    (_a2 = options.onEnd) == null ? void 0 : _a2.call(options, position.value, e);
    handleEvent(e);
  };
  if (isClient) {
    useEventListener(target, "pointerdown", start, true);
    useEventListener(draggingElement, "pointermove", move, true);
    useEventListener(draggingElement, "pointerup", end, true);
  }
  return core_spreadProps$4(__spreadValues$b({}, toRefs(position)), {
    position,
    isDragging: computed(() => !!pressedDelta.value),
    style: computed(() => `left:${position.value.x}px;top:${position.value.y}px;`)
  });
}

var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var core_objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$c.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$c.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, observerOptions = core_objRest$2(_a, ["window"]);
  let observer;
  const isSupported = window && "ResizeObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

function useElementBounding(target, options = {}) {
  const {
    reset = true,
    windowResize = true,
    windowScroll = true
  } = options;
  const height = ref(0);
  const bottom = ref(0);
  const left = ref(0);
  const right = ref(0);
  const top = ref(0);
  const width = ref(0);
  const x = ref(0);
  const y = ref(0);
  function update() {
    const el = unrefElement(target);
    if (!el) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  useResizeObserver(target, update);
  watch(() => unrefElement(target), (ele) => !ele && update());
  if (windowScroll)
    useEventListener("scroll", update, { passive: true });
  if (windowResize)
    useEventListener("resize", update, { passive: true });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}

function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window = defaultWindow
  } = options;
  const isActive = ref(false);
  function loop() {
    if (!isActive.value || !window)
      return;
    fn();
    window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$a = Object.defineProperty;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
function useElementByPoint(options) {
  const element = ref(null);
  const { x, y } = options;
  const controls = useRafFn(() => {
    element.value = document.elementFromPoint(unref(x), unref(y));
  });
  return __spreadValues$a({
    element
  }, controls);
}

function useElementHover(el) {
  const isHovered = ref(false);
  useEventListener(el, "mouseenter", () => isHovered.value = true);
  useEventListener(el, "mouseleave", () => isHovered.value = false);
  return isHovered;
}

function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const width = ref(initialSize.width);
  const height = ref(initialSize.height);
  useResizeObserver(target, ([entry]) => {
    width.value = entry.contentRect.width;
    height.value = entry.contentRect.height;
  }, options);
  watch(() => unrefElement(target), (ele) => {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  return {
    width,
    height
  };
}

function useElementVisibility(element, { window = defaultWindow, scrollTarget } = {}) {
  const elementIsVisible = ref(false);
  const testBounding = () => {
    if (!window)
      return;
    const document = window.document;
    if (!unref(element)) {
      elementIsVisible.value = false;
    } else {
      const rect = unref(element).getBoundingClientRect();
      elementIsVisible.value = rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth) && rect.bottom >= 0 && rect.right >= 0;
    }
  };
  tryOnMounted(testBounding);
  if (window)
    tryOnMounted(() => useEventListener(unref(scrollTarget) || window, "scroll", testBounding, { capture: false, passive: true }));
  return elementIsVisible;
}

const events = /* @__PURE__ */ new Map();

function useEventBus(key) {
  const scope = getCurrentScope();
  function on(listener) {
    const listeners = events.get(key) || [];
    listeners.push(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    scope == null ? void 0 : scope.cleanups.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners)
      return;
    const index = listeners.indexOf(listener);
    if (index > -1)
      listeners.splice(index, 1);
    if (!listeners.length)
      events.delete(key);
  }
  function reset() {
    events.delete(key);
  }
  function emit(event, payload) {
    var _a;
    (_a = events.get(key)) == null ? void 0 : _a.forEach((v) => v(event, payload));
  }
  return { on, once, off, emit, reset };
}

function useEventSource(url, events = [], options = {}) {
  const event = ref(null);
  const data = ref(null);
  const status = ref("CONNECTING");
  const eventSource = ref(null);
  const error = ref(null);
  const {
    withCredentials = false
  } = options;
  const close = () => {
    if (eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
      status.value = "CLOSED";
    }
  };
  const es = new EventSource(url, { withCredentials });
  eventSource.value = es;
  es.onopen = () => {
    status.value = "OPEN";
    error.value = null;
  };
  es.onerror = (e) => {
    status.value = "CLOSED";
    error.value = e;
  };
  es.onmessage = (e) => {
    event.value = null;
    data.value = e.data;
  };
  for (const event_name of events) {
    useEventListener(es, event_name, (e) => {
      event.value = event_name;
      data.value = e.data || null;
    });
  }
  tryOnScopeDispose(() => {
    close();
  });
  return {
    eventSource,
    event,
    data,
    status,
    error,
    close
  };
}

function useEyeDropper(options = {}) {
  const { initialValue = "" } = options;
  const isSupported = Boolean(typeof window !== "undefined" && "EyeDropper" in window);
  const sRGBHex = ref(initialValue);
  async function open(openOptions) {
    if (!isSupported)
      return;
    const eyeDropper = new window.EyeDropper();
    const result = await eyeDropper.open(openOptions);
    sRGBHex.value = result.sRGBHex;
    return result;
  }
  return { isSupported, sRGBHex, open };
}

function useFavicon(newIcon = null, options = {}) {
  const {
    baseUrl = "",
    rel = "icon",
    document = defaultDocument
  } = options;
  const favicon = isRef(newIcon) ? newIcon : ref(newIcon);
  const applyIcon = (icon) => {
    document == null ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`).forEach((el) => el.href = `${baseUrl}${icon}`);
  };
  watch(favicon, (i, o) => {
    if (isString(i) && i !== o)
      applyIcon(i);
  }, { immediate: true });
  return favicon;
}

var __defProp$9 = Object.defineProperty;
var core_defProps$3 = Object.defineProperties;
var core_getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var core_getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var core_hasOwnProp$a = Object.prototype.hasOwnProperty;
var core_propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$a.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (core_getOwnPropSymbols$a)
    for (var prop of core_getOwnPropSymbols$a(b)) {
      if (core_propIsEnum$a.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$3 = (a, b) => core_defProps$3(a, core_getOwnPropDescs$3(b));
const payloadMapping = {
  json: "application/json",
  text: "text/plain",
  formData: "multipart/form-data"
};
function isFetchOptions(obj) {
  return containsProp(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError");
}
function headersToObject(headers) {
  if (headers instanceof Headers)
    return Object.fromEntries([...headers.entries()]);
  return headers;
}
function createFetch(config = {}) {
  const _options = config.options || {};
  const _fetchOptions = config.fetchOptions || {};
  function useFactoryFetch(url, ...args) {
    const computedUrl = computed(() => config.baseUrl ? joinPaths(unref(config.baseUrl), unref(url)) : unref(url));
    let options = _options;
    let fetchOptions = _fetchOptions;
    if (args.length > 0) {
      if (isFetchOptions(args[0])) {
        options = __spreadValues$9(__spreadValues$9({}, options), args[0]);
      } else {
        fetchOptions = core_spreadProps$3(__spreadValues$9(__spreadValues$9({}, fetchOptions), args[0]), {
          headers: __spreadValues$9(__spreadValues$9({}, headersToObject(fetchOptions.headers) || {}), headersToObject(args[0].headers) || {})
        });
      }
    }
    if (args.length > 1 && isFetchOptions(args[1]))
      options = __spreadValues$9(__spreadValues$9({}, options), args[1]);
    return useFetch(computedUrl, fetchOptions, options);
  }
  return useFactoryFetch;
}
function useFetch(url, ...args) {
  var _a;
  const supportsAbort = typeof AbortController === "function";
  let fetchOptions = {};
  let options = { immediate: true, refetch: false, timeout: 0 };
  const config = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  if (args.length > 0) {
    if (isFetchOptions(args[0]))
      options = __spreadValues$9(__spreadValues$9({}, options), args[0]);
    else
      fetchOptions = args[0];
  }
  if (args.length > 1) {
    if (isFetchOptions(args[1]))
      options = __spreadValues$9(__spreadValues$9({}, options), args[1]);
  }
  const {
    fetch = (_a = defaultWindow) == null ? void 0 : _a.fetch,
    initialData,
    timeout
  } = options;
  const responseEvent = createEventHook();
  const errorEvent = createEventHook();
  const finallyEvent = createEventHook();
  const isFinished = ref(false);
  const isFetching = ref(false);
  const aborted = ref(false);
  const statusCode = ref(null);
  const response = shallowRef(null);
  const error = shallowRef(null);
  const data = shallowRef(initialData);
  const canAbort = computed(() => supportsAbort && isFetching.value);
  let controller;
  let timer;
  const abort = () => {
    if (supportsAbort && controller)
      controller.abort();
  };
  const loading = (isLoading) => {
    isFetching.value = isLoading;
    isFinished.value = !isLoading;
  };
  if (timeout)
    timer = useTimeoutFn(abort, timeout, { immediate: false });
  const execute = async (throwOnFailed = false) => {
    var _a2;
    loading(true);
    error.value = null;
    statusCode.value = null;
    aborted.value = false;
    controller = void 0;
    if (supportsAbort) {
      controller = new AbortController();
      controller.signal.onabort = () => aborted.value = true;
      fetchOptions = core_spreadProps$3(__spreadValues$9({}, fetchOptions), {
        signal: controller.signal
      });
    }
    const defaultFetchOptions = {
      method: config.method,
      headers: {}
    };
    if (config.payload) {
      const headers = headersToObject(defaultFetchOptions.headers);
      if (config.payloadType)
        headers["Content-Type"] = (_a2 = payloadMapping[config.payloadType]) != null ? _a2 : config.payloadType;
      defaultFetchOptions.body = config.payloadType === "json" ? JSON.stringify(unref(config.payload)) : unref(config.payload);
    }
    let isCanceled = false;
    const context = { url: unref(url), options: fetchOptions, cancel: () => {
      isCanceled = true;
    } };
    if (options.beforeFetch)
      Object.assign(context, await options.beforeFetch(context));
    if (isCanceled || !fetch) {
      loading(false);
      return Promise.resolve(null);
    }
    let responseData = null;
    if (timer)
      timer.start();
    return new Promise((resolve, reject) => {
      var _a3;
      fetch(context.url, core_spreadProps$3(__spreadValues$9(__spreadValues$9({}, defaultFetchOptions), context.options), {
        headers: __spreadValues$9(__spreadValues$9({}, headersToObject(defaultFetchOptions.headers)), headersToObject((_a3 = context.options) == null ? void 0 : _a3.headers))
      })).then(async (fetchResponse) => {
        response.value = fetchResponse;
        statusCode.value = fetchResponse.status;
        responseData = await fetchResponse[config.type]();
        if (options.afterFetch && statusCode.value >= 200 && statusCode.value < 300)
          ({ data: responseData } = await options.afterFetch({ data: responseData, response: fetchResponse }));
        data.value = responseData;
        if (!fetchResponse.ok)
          throw new Error(fetchResponse.statusText);
        responseEvent.trigger(fetchResponse);
        return resolve(fetchResponse);
      }).catch(async (fetchError) => {
        let errorData = fetchError.message || fetchError.name;
        if (options.onFetchError)
          ({ data: responseData, error: errorData } = await options.onFetchError({ data: responseData, error: fetchError, response: response.value }));
        data.value = responseData;
        error.value = errorData;
        errorEvent.trigger(fetchError);
        if (throwOnFailed)
          return reject(fetchError);
        return resolve(null);
      }).finally(() => {
        loading(false);
        if (timer)
          timer.stop();
        finallyEvent.trigger(null);
      });
    });
  };
  watch(() => [
    unref(url),
    unref(options.refetch)
  ], () => unref(options.refetch) && execute(), { deep: true });
  const shell = {
    isFinished,
    statusCode,
    response,
    error,
    data,
    isFetching,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    get: setMethod("GET"),
    put: setMethod("PUT"),
    post: setMethod("POST"),
    delete: setMethod("DELETE"),
    patch: setMethod("PATCH"),
    head: setMethod("HEAD"),
    options: setMethod("OPTIONS"),
    json: setType("json"),
    text: setType("text"),
    blob: setType("blob"),
    arrayBuffer: setType("arrayBuffer"),
    formData: setType("formData")
  };
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config.method = method;
        config.payload = payload;
        config.payloadType = payloadType;
        if (isRef(config.payload)) {
          watch(() => [
            unref(config.payload),
            unref(options.refetch)
          ], () => unref(options.refetch) && execute(), { deep: true });
        }
        if (!payloadType && unref(payload) && Object.getPrototypeOf(unref(payload)) === Object.prototype)
          config.payloadType = "json";
        return shell;
      }
      return void 0;
    };
  }
  function waitUntilFinished() {
    return new Promise((resolve, reject) => {
      until(isFinished).toBe(true).then(() => resolve(shell)).catch((error2) => reject(error2));
    });
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config.type = type;
        return core_spreadProps$3(__spreadValues$9({}, shell), {
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        });
      }
      return void 0;
    };
  }
  if (options.immediate)
    setTimeout(execute, 0);
  return core_spreadProps$3(__spreadValues$9({}, shell), {
    then(onFulfilled, onRejected) {
      return waitUntilFinished().then(onFulfilled, onRejected);
    }
  });
}
function joinPaths(start, end) {
  if (!start.endsWith("/") && !end.startsWith("/"))
    return `${start}/${end}`;
  return `${start}${end}`;
}

var core_defProp$8 = Object.defineProperty;
var core_getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var core_hasOwnProp$9 = Object.prototype.hasOwnProperty;
var core_propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$8 = (obj, key, value) => key in obj ? core_defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$9.call(b, prop))
      core_defNormalProp$8(a, prop, b[prop]);
  if (core_getOwnPropSymbols$9)
    for (var prop of core_getOwnPropSymbols$9(b)) {
      if (core_propIsEnum$9.call(b, prop))
        core_defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
function useFileSystemAccess(options = {}) {
  const {
    window: _window = defaultWindow,
    dataType = "Text"
  } = unref(options);
  const window = _window;
  const isSupported = Boolean(window && "showSaveFilePicker" in window && "showOpenFilePicker" in window);
  const fileHandle = ref();
  const data = ref();
  const file = ref();
  const fileName = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.name) != null ? _b : "";
  });
  const fileMIME = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.type) != null ? _b : "";
  });
  const fileSize = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.size) != null ? _b : 0;
  });
  const fileLastModified = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.lastModified) != null ? _b : 0;
  });
  async function open(_options = {}) {
    if (!isSupported)
      return;
    const [handle] = await window.showOpenFilePicker(core_spreadValues$8(core_spreadValues$8({}, unref(options)), _options));
    fileHandle.value = handle;
    await updateFile();
    await updateData();
  }
  async function create(_options = {}) {
    if (!isSupported)
      return;
    fileHandle.value = await window.showSaveFilePicker(core_spreadValues$8(core_spreadValues$8({}, unref(options)), _options));
    data.value = void 0;
    await updateFile();
    await updateData();
  }
  async function save(_options = {}) {
    if (!isSupported)
      return;
    if (!fileHandle.value)
      return saveAs(_options);
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function saveAs(_options = {}) {
    if (!isSupported)
      return;
    fileHandle.value = await window.showSaveFilePicker(core_spreadValues$8(core_spreadValues$8({}, unref(options)), _options));
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function updateFile() {
    var _a;
    file.value = await ((_a = fileHandle.value) == null ? void 0 : _a.getFile());
  }
  async function updateData() {
    var _a, _b;
    if (unref(dataType) === "Text")
      data.value = await ((_a = file.value) == null ? void 0 : _a.text());
    if (unref(dataType) === "ArrayBuffer")
      data.value = await ((_b = file.value) == null ? void 0 : _b.arrayBuffer());
    if (unref(dataType) === "Blob")
      data.value = file.value;
  }
  watch(() => unref(dataType), updateData);
  return {
    isSupported,
    data,
    file,
    fileName,
    fileMIME,
    fileSize,
    fileLastModified,
    open,
    create,
    save,
    saveAs,
    updateData
  };
}

function useFocus(target, options = {}) {
  const { initialValue = false } = options;
  const activeElement = useActiveElement(options);
  const targetElement = computed(() => unrefElement(target));
  const focused = computed({
    get() {
      return activeElement.value === targetElement.value;
    },
    set(value) {
      var _a, _b;
      if (!value && focused.value)
        (_a = targetElement.value) == null ? void 0 : _a.blur();
      if (value && !focused.value)
        (_b = targetElement.value) == null ? void 0 : _b.focus();
    }
  });
  watch(targetElement, () => {
    focused.value = initialValue;
  }, { immediate: true, flush: "post" });
  return { focused };
}

function useFocusWithin(target, options = {}) {
  const activeElement = useActiveElement(options);
  const targetElement = computed(() => unrefElement(target));
  const focused = computed(() => targetElement.value && activeElement.value ? targetElement.value.contains(activeElement.value) : false);
  return { focused };
}

function useFps(options) {
  var _a;
  const fps = ref(0);
  if (typeof performance === "undefined")
    return fps;
  const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now = performance.now();
      const diff = now - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now;
      ticks = 0;
    }
  });
  return fps;
}

const functionsMap = (/* unused pure expression or super */ null && ([
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
]));
function useFullscreen(target, options = {}) {
  const { document = defaultDocument, autoExit = false } = options;
  const targetRef = target || (document == null ? void 0 : document.querySelector("html"));
  const isFullscreen = ref(false);
  let isSupported = false;
  let map = functionsMap[0];
  if (!document) {
    isSupported = false;
  } else {
    for (const m of functionsMap) {
      if (m[1] in document) {
        map = m;
        isSupported = true;
        break;
      }
    }
  }
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
  async function exit() {
    if (!isSupported)
      return;
    if (document == null ? void 0 : document[ELEMENT])
      await document[EXIT]();
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported)
      return;
    await exit();
    const target2 = unrefElement(targetRef);
    if (target2) {
      await target2[REQUEST]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    if (isFullscreen.value)
      await exit();
    else
      await enter();
  }
  if (document) {
    useEventListener(document, EVENT, () => {
      isFullscreen.value = !!(document == null ? void 0 : document[ELEMENT]);
    }, false);
  }
  if (autoExit)
    tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}

function mapGamepadToXbox360Controller(gamepad) {
  return computed(() => {
    if (gamepad.value) {
      return {
        buttons: {
          a: gamepad.value.buttons[0],
          b: gamepad.value.buttons[1],
          x: gamepad.value.buttons[2],
          y: gamepad.value.buttons[3]
        },
        bumper: {
          left: gamepad.value.buttons[4],
          right: gamepad.value.buttons[5]
        },
        triggers: {
          left: gamepad.value.buttons[6],
          right: gamepad.value.buttons[7]
        },
        stick: {
          left: {
            horizontal: gamepad.value.axes[0],
            vertical: gamepad.value.axes[1],
            button: gamepad.value.buttons[10]
          },
          right: {
            horizontal: gamepad.value.axes[2],
            vertical: gamepad.value.axes[3],
            button: gamepad.value.buttons[11]
          }
        },
        dpad: {
          up: gamepad.value.buttons[12],
          down: gamepad.value.buttons[13],
          left: gamepad.value.buttons[14],
          right: gamepad.value.buttons[15]
        },
        back: gamepad.value.buttons[8],
        start: gamepad.value.buttons[9]
      };
    }
    return null;
  });
}
function useGamepad(options = {}) {
  const {
    navigator = defaultNavigator
  } = options;
  const isSupported = navigator && "getGamepads" in navigator;
  const gamepads = ref([]);
  const onConnectedHook = createEventHook();
  const onDisconnectedHook = createEventHook();
  const stateFromGamepad = (gamepad) => {
    const hapticActuators = [];
    const vibrationActuator = "vibrationActuator" in gamepad ? gamepad.vibrationActuator : null;
    if (vibrationActuator)
      hapticActuators.push(vibrationActuator);
    if (gamepad.hapticActuators)
      hapticActuators.push(...gamepad.hapticActuators);
    return {
      id: gamepad.id,
      hapticActuators,
      index: gamepad.index,
      mapping: gamepad.mapping,
      connected: gamepad.connected,
      timestamp: gamepad.timestamp,
      axes: gamepad.axes.map((axes) => axes),
      buttons: gamepad.buttons.map((button) => ({ pressed: button.pressed, touched: button.touched, value: button.value }))
    };
  };
  const updateGamepadState = () => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    for (let i = 0; i < _gamepads.length; ++i) {
      const gamepad = _gamepads[i];
      if (gamepad) {
        const index = gamepads.value.findIndex(({ index: index2 }) => index2 === gamepad.index);
        if (index > -1)
          gamepads.value[index] = stateFromGamepad(gamepad);
      }
    }
  };
  const { isActive, pause, resume } = useRafFn$1(updateGamepadState);
  const onGamepadConnected = (gamepad) => {
    if (!gamepads.value.some(({ index }) => index === gamepad.index)) {
      gamepads.value.push(stateFromGamepad(gamepad));
      onConnectedHook.trigger(gamepad.index);
    }
    resume();
  };
  const onGamepadDisconnected = (gamepad) => {
    gamepads.value = gamepads.value.filter((x) => x.index !== gamepad.index);
    onDisconnectedHook.trigger(gamepad.index);
  };
  useEventListener$1("gamepadconnected", (e) => onGamepadConnected(e.gamepad));
  useEventListener$1("gamepaddisconnected", (e) => onGamepadDisconnected(e.gamepad));
  tryOnMounted(() => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    if (_gamepads) {
      for (let i = 0; i < _gamepads.length; ++i) {
        const gamepad = _gamepads[i];
        if (gamepad)
          onGamepadConnected(gamepad);
      }
    }
  });
  pause();
  return {
    isSupported,
    onConnected: onConnectedHook.on,
    onDisconnected: onDisconnectedHook.on,
    gamepads,
    pause,
    resume,
    isActive
  };
}

function useGeolocation(options = {}) {
  const {
    enableHighAccuracy = true,
    maximumAge = 3e4,
    timeout = 27e3,
    navigator = defaultNavigator
  } = options;
  const isSupported = navigator && "geolocation" in navigator;
  const locatedAt = ref(null);
  const error = ref(null);
  const coords = ref({
    accuracy: 0,
    latitude: Infinity,
    longitude: Infinity,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  });
  function updatePosition(position) {
    locatedAt.value = position.timestamp;
    coords.value = position.coords;
    error.value = null;
  }
  let watcher;
  if (isSupported) {
    watcher = navigator.geolocation.watchPosition(updatePosition, (err) => error.value = err, {
      enableHighAccuracy,
      maximumAge,
      timeout
    });
  }
  tryOnScopeDispose(() => {
    if (watcher && navigator)
      navigator.geolocation.clearWatch(watcher);
  });
  return {
    isSupported,
    coords,
    locatedAt,
    error
  };
}

const defaultEvents$1 = (/* unused pure expression or super */ null && (["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"]));
const oneMinute = 6e4;
function useIdle(timeout = oneMinute, options = {}) {
  const {
    initialState = false,
    listenForVisibilityChange = true,
    events = defaultEvents$1,
    window = defaultWindow,
    eventFilter = throttleFilter(50)
  } = options;
  const idle = ref(initialState);
  const lastActive = ref(timestamp());
  let timer;
  const onEvent = createFilterWrapper(eventFilter, () => {
    idle.value = false;
    lastActive.value = timestamp();
    clearTimeout(timer);
    timer = setTimeout(() => idle.value = true, timeout);
  });
  if (window) {
    const document = window.document;
    for (const event of events)
      useEventListener(window, event, onEvent, { passive: true });
    if (listenForVisibilityChange) {
      useEventListener(document, "visibilitychange", () => {
        if (!document.hidden)
          onEvent();
      });
    }
  }
  timer = setTimeout(() => idle.value = true, timeout);
  return { idle, lastActive };
}

function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = noop,
    onScroll = noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    }
  } = options;
  const x = ref(0);
  const y = ref(0);
  const isScrolling = ref(false);
  const arrivedState = reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  if (element) {
    const onScrollEnd = useDebounceFn((e) => {
      isScrolling.value = false;
      directions.left = false;
      directions.right = false;
      directions.top = false;
      directions.bottom = false;
      onStop(e);
    }, throttle + idle);
    const onScrollHandler = (e) => {
      const eventTarget = e.target === document ? e.target.documentElement : e.target;
      const scrollLeft = eventTarget.scrollLeft;
      directions.left = scrollLeft < x.value;
      directions.right = scrollLeft > x.value;
      arrivedState.left = scrollLeft <= 0 + (offset.left || 0);
      arrivedState.right = scrollLeft + eventTarget.clientWidth >= eventTarget.scrollWidth - (offset.right || 0);
      x.value = scrollLeft;
      const scrollTop = eventTarget.scrollTop;
      directions.top = scrollTop < y.value;
      directions.bottom = scrollTop > y.value;
      arrivedState.top = scrollTop <= 0 + (offset.top || 0);
      arrivedState.bottom = scrollTop + eventTarget.clientHeight >= eventTarget.scrollHeight - (offset.bottom || 0);
      y.value = scrollTop;
      isScrolling.value = true;
      onScrollEnd(e);
      onScroll(e);
    };
    useEventListener(element, "scroll", throttle ? useThrottleFn(onScrollHandler, throttle) : onScrollHandler, eventListenerOptions);
  }
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions
  };
}

var core_defProp$7 = Object.defineProperty;
var core_defProps$2 = Object.defineProperties;
var core_getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var core_getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var core_hasOwnProp$8 = Object.prototype.hasOwnProperty;
var core_propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$7 = (obj, key, value) => key in obj ? core_defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$8.call(b, prop))
      core_defNormalProp$7(a, prop, b[prop]);
  if (core_getOwnPropSymbols$8)
    for (var prop of core_getOwnPropSymbols$8(b)) {
      if (core_propIsEnum$8.call(b, prop))
        core_defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$2 = (a, b) => core_defProps$2(a, core_getOwnPropDescs$2(b));
function useInfiniteScroll(element, onLoadMore, options = {}) {
  var _a;
  const state = reactive(useScroll(element, core_spreadProps$2(core_spreadValues$7({}, options), {
    offset: core_spreadValues$7({
      bottom: (_a = options.distance) != null ? _a : 0
    }, options.offset)
  })));
  watch(() => state.arrivedState.bottom, (v) => {
    if (v)
      onLoadMore(state);
  });
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow
  } = options;
  const isSupported = window && "IntersectionObserver" in window;
  let cleanup = noop;
  const stopWatch = isSupported ? watch(() => ({
    el: unrefElement(target),
    root: unrefElement(root)
  }), ({ el, root: root2 }) => {
    cleanup();
    if (!el)
      return;
    const observer = new IntersectionObserver(callback, {
      root: root2,
      rootMargin,
      threshold
    });
    observer.observe(el);
    cleanup = () => {
      observer.disconnect();
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" }) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

const defaultEvents = (/* unused pure expression or super */ null && (["mousedown", "mouseup", "keydown", "keyup"]));
function useKeyModifier(modifier, options = {}) {
  const {
    events = defaultEvents,
    document = defaultDocument,
    initial = null
  } = options;
  const state = ref(initial);
  if (document) {
    events.forEach((listenerEvent) => {
      useEventListener(document, listenerEvent, (evt) => {
        if (typeof evt.getModifierState === "function")
          state.value = evt.getModifierState(modifier);
      });
    });
  }
  return state;
}

function useLocalStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};

function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = noop
  } = options;
  const current = reactive(/* @__PURE__ */ new Set());
  const obj = { toJSON() {
    return {};
  }, current };
  const refs = useReactive ? reactive(obj) : obj;
  const metaDeps = /* @__PURE__ */ new Set();
  function setRefs(key, value) {
    if (key in refs) {
      if (useReactive)
        refs[key] = value;
      else
        refs[key].value = value;
    }
  }
  function updateRefs(e, value) {
    var _a, _b;
    const key = (_a = e.key) == null ? void 0 : _a.toLowerCase();
    const code = (_b = e.code) == null ? void 0 : _b.toLowerCase();
    const values = [code, key].filter(Boolean);
    if (code) {
      if (value)
        current.add(e.code);
      else
        current.delete(e.code);
    }
    for (const key2 of values)
      setRefs(key2, value);
    if (key === "meta" && !value) {
      metaDeps.forEach((key2) => {
        current.delete(key2);
        setRefs(key2, false);
      });
      metaDeps.clear();
    } else if (e.getModifierState("Meta") && value) {
      [...current, ...values].forEach((key2) => metaDeps.add(key2));
    }
  }
  if (target) {
    useEventListener(target, "keydown", (e) => {
      updateRefs(e, true);
      return onEventFired(e);
    }, { passive });
    useEventListener(target, "keyup", (e) => {
      updateRefs(e, false);
      return onEventFired(e);
    }, { passive });
  }
  const proxy = new Proxy(refs, {
    get(target2, prop, rec) {
      if (typeof prop !== "string")
        return Reflect.get(target2, prop, rec);
      prop = prop.toLowerCase();
      if (prop in aliasMap)
        prop = aliasMap[prop];
      if (!(prop in refs)) {
        if (/[+_-]/.test(prop)) {
          const keys = prop.split(/[+_-]/g).map((i) => i.trim());
          refs[prop] = computed(() => keys.every((key) => unref(proxy[key])));
        } else {
          refs[prop] = ref(false);
        }
      }
      const r = Reflect.get(target2, prop, rec);
      return useReactive ? unref(r) : r;
    }
  });
  return proxy;
}

var core_defProp$6 = Object.defineProperty;
var core_getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var core_hasOwnProp$7 = Object.prototype.hasOwnProperty;
var core_propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$6 = (obj, key, value) => key in obj ? core_defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$7.call(b, prop))
      core_defNormalProp$6(a, prop, b[prop]);
  if (core_getOwnPropSymbols$7)
    for (var prop of core_getOwnPropSymbols$7(b)) {
      if (core_propIsEnum$7.call(b, prop))
        core_defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
function usingElRef(source, cb) {
  if (unref(source))
    cb(unref(source));
}
function timeRangeToArray(timeRanges) {
  let ranges = [];
  for (let i = 0; i < timeRanges.length; ++i)
    ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
  return ranges;
}
function tracksToArray(tracks) {
  return Array.from(tracks).map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({ id, label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }));
}
const defaultOptions = {
  src: "",
  tracks: []
};
function useMediaControls(target, options = {}) {
  options = core_spreadValues$6(core_spreadValues$6({}, defaultOptions), options);
  const {
    document = defaultDocument
  } = options;
  const currentTime = ref(0);
  const duration = ref(0);
  const seeking = ref(false);
  const volume = ref(1);
  const waiting = ref(false);
  const ended = ref(false);
  const playing = ref(false);
  const rate = ref(1);
  const stalled = ref(false);
  const buffered = ref([]);
  const tracks = ref([]);
  const selectedTrack = ref(-1);
  const isPictureInPicture = ref(false);
  const muted = ref(false);
  const supportsPictureInPicture = document && "pictureInPictureEnabled" in document;
  const sourceErrorEvent = createEventHook();
  const disableTrack = (track) => {
    usingElRef(target, (el) => {
      if (track) {
        const id = isNumber(track) ? track : track.id;
        el.textTracks[id].mode = "disabled";
      } else {
        for (let i = 0; i < el.textTracks.length; ++i)
          el.textTracks[i].mode = "disabled";
      }
      selectedTrack.value = -1;
    });
  };
  const enableTrack = (track, disableTracks = true) => {
    usingElRef(target, (el) => {
      const id = isNumber(track) ? track : track.id;
      if (disableTracks)
        disableTrack();
      el.textTracks[id].mode = "showing";
      selectedTrack.value = id;
    });
  };
  const togglePictureInPicture = () => {
    return new Promise((resolve, reject) => {
      usingElRef(target, async (el) => {
        if (supportsPictureInPicture) {
          if (!isPictureInPicture.value) {
            el.requestPictureInPicture().then(resolve).catch(reject);
          } else {
            document.exitPictureInPicture().then(resolve).catch(reject);
          }
        }
      });
    });
  };
  watchEffect(() => {
    if (!document)
      return;
    const el = unref(target);
    if (!el)
      return;
    const src = unref(options.src);
    let sources = [];
    if (!src)
      return;
    if (isString(src))
      sources = [{ src }];
    else if (Array.isArray(src))
      sources = src;
    else if (isObject(src))
      sources = [src];
    el.querySelectorAll("source").forEach((e) => {
      e.removeEventListener("error", sourceErrorEvent.trigger);
      e.remove();
    });
    sources.forEach(({ src: src2, type }) => {
      const source = document.createElement("source");
      source.setAttribute("src", src2);
      source.setAttribute("type", type || "");
      source.addEventListener("error", sourceErrorEvent.trigger);
      el.appendChild(source);
    });
    el.load();
  });
  tryOnScopeDispose(() => {
    const el = unref(target);
    if (!el)
      return;
    el.querySelectorAll("source").forEach((e) => e.removeEventListener("error", sourceErrorEvent.trigger));
  });
  watch(volume, (vol) => {
    const el = unref(target);
    if (!el)
      return;
    el.volume = vol;
  });
  watch(muted, (mute) => {
    const el = unref(target);
    if (!el)
      return;
    el.muted = mute;
  });
  watch(rate, (rate2) => {
    const el = unref(target);
    if (!el)
      return;
    el.playbackRate = rate2;
  });
  watchEffect(() => {
    if (!document)
      return;
    const textTracks = unref(options.tracks);
    const el = unref(target);
    if (!textTracks || !textTracks.length || !el)
      return;
    el.querySelectorAll("track").forEach((e) => e.remove());
    textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
      const track = document.createElement("track");
      track.default = isDefault || false;
      track.kind = kind;
      track.label = label;
      track.src = src;
      track.srclang = srcLang;
      if (track.default)
        selectedTrack.value = i;
      el.appendChild(track);
    });
  });
  const { ignoreUpdates: ignoreCurrentTimeUpdates } = watchIgnorable(currentTime, (time) => {
    const el = unref(target);
    if (!el)
      return;
    el.currentTime = time;
  });
  const { ignoreUpdates: ignorePlayingUpdates } = watchIgnorable(playing, (isPlaying) => {
    const el = unref(target);
    if (!el)
      return;
    isPlaying ? el.play() : el.pause();
  });
  useEventListener(target, "timeupdate", () => ignoreCurrentTimeUpdates(() => currentTime.value = unref(target).currentTime));
  useEventListener(target, "durationchange", () => duration.value = unref(target).duration);
  useEventListener(target, "progress", () => buffered.value = timeRangeToArray(unref(target).buffered));
  useEventListener(target, "seeking", () => seeking.value = true);
  useEventListener(target, "seeked", () => seeking.value = false);
  useEventListener(target, "waiting", () => waiting.value = true);
  useEventListener(target, "playing", () => waiting.value = false);
  useEventListener(target, "ratechange", () => rate.value = unref(target).playbackRate);
  useEventListener(target, "stalled", () => stalled.value = true);
  useEventListener(target, "ended", () => ended.value = true);
  useEventListener(target, "pause", () => ignorePlayingUpdates(() => playing.value = false));
  useEventListener(target, "play", () => ignorePlayingUpdates(() => playing.value = true));
  useEventListener(target, "enterpictureinpicture", () => isPictureInPicture.value = true);
  useEventListener(target, "leavepictureinpicture", () => isPictureInPicture.value = false);
  useEventListener(target, "volumechange", () => {
    const el = unref(target);
    if (!el)
      return;
    volume.value = el.volume;
    muted.value = el.muted;
  });
  const listeners = [];
  const stop = watch([target], () => {
    const el = unref(target);
    if (!el)
      return;
    stop();
    listeners[0] = useEventListener(el.textTracks, "addtrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[1] = useEventListener(el.textTracks, "removetrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[2] = useEventListener(el.textTracks, "change", () => tracks.value = tracksToArray(el.textTracks));
  });
  tryOnScopeDispose(() => listeners.forEach((listener) => listener()));
  return {
    currentTime,
    duration,
    waiting,
    seeking,
    ended,
    stalled,
    buffered,
    playing,
    rate,
    volume,
    muted,
    tracks,
    selectedTrack,
    enableTrack,
    disableTrack,
    supportsPictureInPicture,
    togglePictureInPicture,
    isPictureInPicture,
    onSourceError: sourceErrorEvent.on
  };
}

const getMapVue2Compat = () => {
  const data = reactive({});
  return {
    get: (key) => data[key],
    set: (key, value) => set(data, key, value),
    has: (key) => Object.prototype.hasOwnProperty.call(data, key),
    delete: (key) => del(data, key),
    clear: () => {
      Object.keys(data).forEach((key) => {
        del(data, key);
      });
    }
  };
};
function useMemoize(resolver, options) {
  const initCache = () => {
    if (options == null ? void 0 : options.cache)
      return reactive(options.cache);
    if (isVue2)
      return getMapVue2Compat();
    return reactive(/* @__PURE__ */ new Map());
  };
  const cache = initCache();
  const generateKey = (...args) => (options == null ? void 0 : options.getKey) ? options.getKey(...args) : JSON.stringify(args);
  const _loadData = (key, ...args) => {
    cache.set(key, resolver(...args));
    return cache.get(key);
  };
  const loadData = (...args) => _loadData(generateKey(...args), ...args);
  const deleteData = (...args) => {
    cache.delete(generateKey(...args));
  };
  const clearData = () => {
    cache.clear();
  };
  const memoized = (...args) => {
    const key = generateKey(...args);
    if (cache.has(key))
      return cache.get(key);
    return _loadData(key, ...args);
  };
  memoized.load = loadData;
  memoized.delete = deleteData;
  memoized.clear = clearData;
  memoized.generateKey = generateKey;
  memoized.cache = cache;
  return memoized;
}

function useMemory(options = {}) {
  const memory = ref();
  const isSupported = typeof performance !== "undefined" && "memory" in performance;
  if (isSupported) {
    const { interval = 1e3 } = options;
    useIntervalFn(() => {
      memory.value = performance.memory;
    }, interval, { immediate: options.immediate, immediateCallback: options.immediateCallback });
  }
  return { isSupported, memory };
}

function useMounted() {
  const isMounted = ref(false);
  onMounted(() => {
    isMounted.value = true;
  });
  return isMounted;
}

function useMouse(options = {}) {
  const {
    type = "page",
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window = defaultWindow,
    eventFilter
  } = options;
  const x = ref(initialValue.x);
  const y = ref(initialValue.y);
  const sourceType = ref(null);
  const mouseHandler = (event) => {
    if (type === "page") {
      x.value = event.pageX;
      y.value = event.pageY;
    } else if (type === "client") {
      x.value = event.clientX;
      y.value = event.clientY;
    }
    sourceType.value = "mouse";
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const touch2 = event.touches[0];
      if (type === "page") {
        x.value = touch2.pageX;
        y.value = touch2.pageY;
      } else if (type === "client") {
        x.value = touch2.clientX;
        y.value = touch2.clientY;
      }
      sourceType.value = "touch";
    }
  };
  const mouseHandlerWrapper = (event) => {
    return eventFilter === void 0 ? mouseHandler(event) : eventFilter(() => mouseHandler(event), {});
  };
  const touchHandlerWrapper = (event) => {
    return eventFilter === void 0 ? touchHandler(event) : eventFilter(() => touchHandler(event), {});
  };
  if (window) {
    useEventListener(window, "mousemove", mouseHandlerWrapper, { passive: true });
    useEventListener(window, "dragover", mouseHandlerWrapper, { passive: true });
    if (touch) {
      useEventListener(window, "touchstart", touchHandlerWrapper, { passive: true });
      useEventListener(window, "touchmove", touchHandlerWrapper, { passive: true });
      if (resetOnTouchEnds)
        useEventListener(window, "touchend", reset, { passive: true });
    }
  }
  return {
    x,
    y,
    sourceType
  };
}

function useMouseInElement(target, options = {}) {
  const {
    handleOutside = true,
    window = defaultWindow
  } = options;
  const { x, y, sourceType } = useMouse(options);
  const targetRef = ref(target != null ? target : window == null ? void 0 : window.document.body);
  const elementX = ref(0);
  const elementY = ref(0);
  const elementPositionX = ref(0);
  const elementPositionY = ref(0);
  const elementHeight = ref(0);
  const elementWidth = ref(0);
  const isOutside = ref(false);
  let stop = () => {
  };
  if (window) {
    stop = watch([targetRef, x, y], () => {
      const el = unrefElement(targetRef);
      if (!el)
        return;
      const {
        left,
        top,
        width,
        height
      } = el.getBoundingClientRect();
      elementPositionX.value = left + window.pageXOffset;
      elementPositionY.value = top + window.pageYOffset;
      elementHeight.value = height;
      elementWidth.value = width;
      const elX = x.value - elementPositionX.value;
      const elY = y.value - elementPositionY.value;
      isOutside.value = elX < 0 || elY < 0 || elX > elementWidth.value || elY > elementHeight.value;
      if (handleOutside || !isOutside.value) {
        elementX.value = elX;
        elementY.value = elY;
      }
    }, { immediate: true });
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop
  };
}

function useMousePressed(options = {}) {
  const {
    touch = true,
    drag = true,
    initialValue = false,
    window = defaultWindow
  } = options;
  const pressed = ref(initialValue);
  const sourceType = ref(null);
  if (!window) {
    return {
      pressed,
      sourceType
    };
  }
  const onPressed = (srcType) => () => {
    pressed.value = true;
    sourceType.value = srcType;
  };
  const onReleased = () => {
    pressed.value = false;
    sourceType.value = null;
  };
  const target = computed(() => unrefElement(options.target) || window);
  useEventListener(target, "mousedown", onPressed("mouse"), { passive: true });
  useEventListener(window, "mouseleave", onReleased, { passive: true });
  useEventListener(window, "mouseup", onReleased, { passive: true });
  if (drag) {
    useEventListener(target, "dragstart", onPressed("mouse"), { passive: true });
    useEventListener(window, "drop", onReleased, { passive: true });
    useEventListener(window, "dragend", onReleased, { passive: true });
  }
  if (touch) {
    useEventListener(target, "touchstart", onPressed("touch"), { passive: true });
    useEventListener(window, "touchend", onReleased, { passive: true });
    useEventListener(window, "touchcancel", onReleased, { passive: true });
  }
  return {
    pressed,
    sourceType
  };
}

var core_getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var core_hasOwnProp$6 = Object.prototype.hasOwnProperty;
var core_propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var core_objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (core_hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && core_getOwnPropSymbols$6)
    for (var prop of core_getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && core_propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, mutationOptions = core_objRest$1(_a, ["window"]);
  let observer;
  const isSupported = window && "IntersectionObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

const useNavigatorLanguage = (options = {}) => {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = Boolean(navigator && "language" in navigator);
  const language = ref(navigator == null ? void 0 : navigator.language);
  useEventListener(window, "languagechange", () => {
    if (navigator)
      language.value = navigator.language;
  });
  return {
    isSupported,
    language
  };
};

function useNetwork(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = Boolean(navigator && "connection" in navigator);
  const isOnline = ref(true);
  const saveData = ref(false);
  const offlineAt = ref(void 0);
  const downlink = ref(void 0);
  const downlinkMax = ref(void 0);
  const rtt = ref(void 0);
  const effectiveType = ref(void 0);
  const type = ref("unknown");
  const connection = isSupported && navigator.connection;
  function updateNetworkInformation() {
    if (!navigator)
      return;
    isOnline.value = navigator.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  if (window) {
    useEventListener(window, "offline", () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    });
    useEventListener(window, "online", () => {
      isOnline.value = true;
    });
  }
  if (connection)
    useEventListener(connection, "change", updateNetworkInformation, false);
  updateNetworkInformation();
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type
  };
}

var core_defProp$5 = Object.defineProperty;
var core_getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var core_hasOwnProp$5 = Object.prototype.hasOwnProperty;
var core_propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$5 = (obj, key, value) => key in obj ? core_defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$5.call(b, prop))
      core_defNormalProp$5(a, prop, b[prop]);
  if (core_getOwnPropSymbols$5)
    for (var prop of core_getOwnPropSymbols$5(b)) {
      if (core_propIsEnum$5.call(b, prop))
        core_defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = ref(new Date());
  const update = () => now.value = new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : useIntervalFn(update, interval, { immediate: true });
  if (exposeControls) {
    return core_spreadValues$5({
      now
    }, controls);
  } else {
    return now;
  }
}

function useOffsetPagination(options) {
  const {
    total = Infinity,
    pageSize = 10,
    page = 1,
    onPageChange = noop,
    onPageSizeChange = noop,
    onPageCountChange = noop
  } = options;
  const currentPageSize = useClamp(pageSize, 1, Infinity);
  const pageCount = computed(() => Math.ceil(unref(total) / unref(currentPageSize)));
  const currentPage = useClamp(page, 1, pageCount);
  const isFirstPage = computed(() => currentPage.value === 1);
  const isLastPage = computed(() => currentPage.value === pageCount.value);
  if (isRef(page))
    syncRef(page, currentPage);
  if (isRef(pageSize))
    syncRef(pageSize, currentPageSize);
  function prev() {
    currentPage.value--;
  }
  function next() {
    currentPage.value++;
  }
  const returnValue = {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next
  };
  watch(currentPage, () => {
    onPageChange(reactive(returnValue));
  });
  watch(currentPageSize, () => {
    onPageSizeChange(reactive(returnValue));
  });
  watch(pageCount, () => {
    onPageCountChange(reactive(returnValue));
  });
  return returnValue;
}

function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}

function usePageLeave(options = {}) {
  const { window = defaultWindow } = options;
  const isLeft = ref(false);
  const handler = (event) => {
    if (!window)
      return;
    event = event || window.event;
    const from = event.relatedTarget || event.toElement;
    isLeft.value = !from;
  };
  if (window) {
    useEventListener(window, "mouseout", handler, { passive: true });
    useEventListener(window.document, "mouseleave", handler, { passive: true });
    useEventListener(window.document, "mouseenter", handler, { passive: true });
  }
  return isLeft;
}

function useParallax(target, options = {}) {
  const {
    deviceOrientationTiltAdjust = (i) => i,
    deviceOrientationRollAdjust = (i) => i,
    mouseTiltAdjust = (i) => i,
    mouseRollAdjust = (i) => i,
    window = defaultWindow
  } = options;
  const orientation = reactive(useDeviceOrientation({ window }));
  const {
    elementX: x,
    elementY: y,
    elementWidth: width,
    elementHeight: height
  } = useMouseInElement(target, { handleOutside: false, window });
  const source = computed(() => {
    if (orientation.isSupported && (orientation.alpha != null && orientation.alpha !== 0 || orientation.gamma != null && orientation.gamma !== 0))
      return "deviceOrientation";
    return "mouse";
  });
  const roll = computed(() => {
    if (source.value === "deviceOrientation") {
      const value = -orientation.beta / 90;
      return deviceOrientationRollAdjust(value);
    } else {
      const value = -(y.value - height.value / 2) / height.value;
      return mouseRollAdjust(value);
    }
  });
  const tilt = computed(() => {
    if (source.value === "deviceOrientation") {
      const value = orientation.gamma / 90;
      return deviceOrientationTiltAdjust(value);
    } else {
      const value = (x.value - width.value / 2) / width.value;
      return mouseTiltAdjust(value);
    }
  });
  return { roll, tilt, source };
}

var core_defProp$4 = Object.defineProperty;
var core_defProps$1 = Object.defineProperties;
var core_getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var core_getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var core_hasOwnProp$4 = Object.prototype.hasOwnProperty;
var core_propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$4 = (obj, key, value) => key in obj ? core_defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$4.call(b, prop))
      core_defNormalProp$4(a, prop, b[prop]);
  if (core_getOwnPropSymbols$4)
    for (var prop of core_getOwnPropSymbols$4(b)) {
      if (core_propIsEnum$4.call(b, prop))
        core_defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$1 = (a, b) => core_defProps$1(a, core_getOwnPropDescs$1(b));
const defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
const keys = /* @__PURE__ */ (/* unused pure expression or super */ null && (Object.keys(defaultState)));
function usePointer(options = {}) {
  const {
    target = defaultWindow
  } = options;
  const isInside = ref(false);
  const state = ref(options.initialValue || {});
  Object.assign(state.value, defaultState, state.value);
  const handler = (event) => {
    isInside.value = true;
    if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType))
      return;
    state.value = objectPick(event, keys, false);
  };
  if (target) {
    useEventListener(target, "pointerdown", handler, { passive: true });
    useEventListener(target, "pointermove", handler, { passive: true });
    useEventListener(target, "pointerleave", () => isInside.value = false, { passive: true });
  }
  return core_spreadProps$1(core_spreadValues$4({}, toRefs(state)), {
    isInside
  });
}

var SwipeDirection = /* @__PURE__ */ ((SwipeDirection2) => {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
  return SwipeDirection2;
})(SwipeDirection || {});
function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window = defaultWindow
  } = options;
  const coordsStart = reactive({ x: 0, y: 0 });
  const coordsEnd = reactive({ x: 0, y: 0 });
  const diffX = computed(() => coordsStart.x - coordsEnd.x);
  const diffY = computed(() => coordsStart.y - coordsEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = computed(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = ref(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value)
      return "NONE" /* NONE */;
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? "LEFT" /* LEFT */ : "RIGHT" /* RIGHT */;
    } else {
      return diffY.value > 0 ? "UP" /* UP */ : "DOWN" /* DOWN */;
    }
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  let listenerOptions;
  const isPassiveEventSupported = checkPassiveEventSupport(window == null ? void 0 : window.document);
  if (!passive)
    listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
  else
    listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (listenerOptions.capture && !listenerOptions.passive)
        e.preventDefault();
      const [x, y] = getTouchEventCoords(e);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      const [x, y] = getTouchEventCoords(e);
      updateCoordsEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }, listenerOptions),
    useEventListener(target, "touchend", onTouchEnd, listenerOptions),
    useEventListener(target, "touchcancel", onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function checkPassiveEventSupport(document) {
  if (!document)
    return false;
  let supportsPassive = false;
  const optionsBlock = {
    get passive() {
      supportsPassive = true;
      return false;
    }
  };
  document.addEventListener("x", noop, optionsBlock);
  document.removeEventListener("x", noop);
  return supportsPassive;
}

function usePointerSwipe(target, options = {}) {
  const targetRef = ref(target);
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart
  } = options;
  const posStart = reactive({ x: 0, y: 0 });
  const updatePosStart = (x, y) => {
    posStart.x = x;
    posStart.y = y;
  };
  const posEnd = reactive({ x: 0, y: 0 });
  const updatePosEnd = (x, y) => {
    posEnd.x = x;
    posEnd.y = y;
  };
  const distanceX = computed(() => posStart.x - posEnd.x);
  const distanceY = computed(() => posStart.y - posEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = computed(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
  const isSwiping = ref(false);
  const isPointerDown = ref(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(distanceX.value) > abs(distanceY.value)) {
      return distanceX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return distanceY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const stops = [
    useEventListener(target, "pointerdown", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      isPointerDown.value = true;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "none");
      const eventTarget = e.target;
      eventTarget == null ? void 0 : eventTarget.setPointerCapture(e.pointerId);
      const { clientX: x, clientY: y } = e;
      updatePosStart(x, y);
      updatePosEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }),
    useEventListener(target, "pointermove", (e) => {
      if (!filterEvent(e))
        return;
      if (!isPointerDown.value)
        return;
      const { clientX: x, clientY: y } = e;
      updatePosEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }),
    useEventListener(target, "pointerup", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      if (isSwiping.value)
        onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
      isPointerDown.value = false;
      isSwiping.value = false;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "initial");
    })
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping: readonly(isSwiping),
    direction: readonly(direction),
    posStart: readonly(posStart),
    posEnd: readonly(posEnd),
    distanceX,
    distanceY,
    stop
  };
}

function usePreferredColorScheme(options) {
  const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
  return computed(() => {
    if (isDark.value)
      return "dark";
    if (isLight.value)
      return "light";
    return "no-preference";
  });
}

function usePreferredLanguages(options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return ref(["en"]);
  const navigator = window.navigator;
  const value = ref(navigator.languages);
  useEventListener(window, "languagechange", () => {
    value.value = navigator.languages;
  });
  return value;
}

const topVarName = "--vueuse-safe-area-top";
const rightVarName = "--vueuse-safe-area-right";
const bottomVarName = "--vueuse-safe-area-bottom";
const leftVarName = "--vueuse-safe-area-left";
function useScreenSafeArea() {
  const top = ref("");
  const right = ref("");
  const bottom = ref("");
  const left = ref("");
  if (isClient) {
    const topCssVar = useCssVar(topVarName);
    const rightCssVar = useCssVar(rightVarName);
    const bottomCssVar = useCssVar(bottomVarName);
    const leftCssVar = useCssVar(leftVarName);
    topCssVar.value = "env(safe-area-inset-top, 0px)";
    rightCssVar.value = "env(safe-area-inset-right, 0px)";
    bottomCssVar.value = "env(safe-area-inset-bottom, 0px)";
    leftCssVar.value = "env(safe-area-inset-left, 0px)";
    update();
    useEventListener("resize", useDebounceFn(update));
  }
  function update() {
    top.value = getValue(topVarName);
    right.value = getValue(rightVarName);
    bottom.value = getValue(bottomVarName);
    left.value = getValue(leftVarName);
  }
  return {
    top,
    right,
    bottom,
    left,
    update
  };
}
function getValue(position) {
  return getComputedStyle(document.documentElement).getPropertyValue(position);
}

function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document.querySelector(`script[src="${src}"]`);
    if (!el) {
      el = document.createElement("script");
      el.type = type;
      el.async = async;
      el.src = unref(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      for (const attr in attrs)
        el[attr] = attrs[attr];
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document.querySelector(`script[src="${src}"]`);
    if (el)
      document.head.removeChild(el);
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}

var _a, _b;
function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
const isIOS = shared_isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let touchMoveListener = null;
  let initialOverflow;
  watch(() => unref(element), (el) => {
    if (el) {
      const ele = el;
      initialOverflow = ele.style.overflow;
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const ele = unref(element);
    if (!ele || isLocked.value)
      return;
    if (isIOS) {
      touchMoveListener = useEventListener(document, "touchmove", preventDefault, { passive: false });
    }
    ele.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const ele = unref(element);
    if (!ele || !isLocked.value)
      return;
    isIOS && (touchMoveListener == null ? void 0 : touchMoveListener());
    ele.style.overflow = initialOverflow;
    isLocked.value = false;
  };
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}

function useSessionStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.sessionStorage, options);
}

var core_defProp$3 = Object.defineProperty;
var core_getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var core_hasOwnProp$3 = Object.prototype.hasOwnProperty;
var core_propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$3 = (obj, key, value) => key in obj ? core_defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$3.call(b, prop))
      core_defNormalProp$3(a, prop, b[prop]);
  if (core_getOwnPropSymbols$3)
    for (var prop of core_getOwnPropSymbols$3(b)) {
      if (core_propIsEnum$3.call(b, prop))
        core_defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options;
  const _navigator = navigator;
  const isSupported = _navigator && "canShare" in _navigator;
  const share = async (overrideOptions = {}) => {
    if (isSupported) {
      const data = core_spreadValues$3(core_spreadValues$3({}, unref(shareOptions)), unref(overrideOptions));
      let granted = true;
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files });
      if (granted)
        return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}

function useSpeechRecognition(options = {}) {
  const {
    interimResults = true,
    continuous = true,
    window = defaultWindow
  } = options;
  const lang = ref(options.lang || "en-US");
  const isListening = ref(false);
  const isFinal = ref(false);
  const result = ref("");
  const error = shallowRef(void 0);
  const toggle = (value = !isListening.value) => {
    isListening.value = value;
  };
  const start = () => {
    isListening.value = true;
  };
  const stop = () => {
    isListening.value = false;
  };
  const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const isSupported = Boolean(SpeechRecognition);
  let recognition;
  if (isSupported) {
    recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = unref(lang);
    recognition.onstart = () => {
      isFinal.value = false;
    };
    watch(lang, (lang2) => {
      if (recognition && !isListening.value)
        recognition.lang = lang2;
    });
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).map((result2) => {
        isFinal.value = result2.isFinal;
        return result2[0];
      }).map((result2) => result2.transcript).join("");
      result.value = transcript;
      error.value = void 0;
    };
    recognition.onerror = (event) => {
      error.value = event;
    };
    recognition.onend = () => {
      isListening.value = false;
      recognition.lang = unref(lang);
    };
    watch(isListening, () => {
      if (isListening.value)
        recognition.start();
      else
        recognition.stop();
    });
  }
  tryOnScopeDispose(() => {
    isListening.value = false;
  });
  return {
    isSupported,
    isListening,
    isFinal,
    recognition,
    result,
    error,
    toggle,
    start,
    stop
  };
}

function useSpeechSynthesis(text, options = {}) {
  var _a, _b;
  const {
    pitch = 1,
    rate = 1,
    volume = 1,
    window = defaultWindow
  } = options;
  const synth = window && window.speechSynthesis;
  const isSupported = Boolean(synth);
  const isPlaying = ref(false);
  const status = ref("init");
  const voiceInfo = {
    lang: ((_a = options.voice) == null ? void 0 : _a.lang) || "default",
    name: ((_b = options.voice) == null ? void 0 : _b.name) || ""
  };
  const spokenText = ref(text || "");
  const lang = ref(options.lang || "en-US");
  const error = shallowRef(void 0);
  const toggle = (value = !isPlaying.value) => {
    isPlaying.value = value;
  };
  const bindEventsForUtterance = (utterance2) => {
    utterance2.lang = unref(lang);
    options.voice && (utterance2.voice = options.voice);
    utterance2.pitch = pitch;
    utterance2.rate = rate;
    utterance2.volume = volume;
    utterance2.onstart = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onpause = () => {
      isPlaying.value = false;
      status.value = "pause";
    };
    utterance2.onresume = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      status.value = "end";
    };
    utterance2.onerror = (event) => {
      error.value = event;
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      utterance2.lang = unref(lang);
    };
  };
  const utterance = computed(() => {
    isPlaying.value = false;
    status.value = "init";
    const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
    bindEventsForUtterance(newUtterance);
    return newUtterance;
  });
  const speak = () => {
    synth.cancel();
    utterance && synth.speak(utterance.value);
  };
  if (isSupported) {
    bindEventsForUtterance(utterance.value);
    watch(lang, (lang2) => {
      if (utterance.value && !isPlaying.value)
        utterance.value.lang = lang2;
    });
    watch(isPlaying, () => {
      if (isPlaying.value)
        synth.resume();
      else
        synth.pause();
    });
  }
  tryOnScopeDispose(() => {
    isPlaying.value = false;
  });
  return {
    isSupported,
    isPlaying,
    status,
    voiceInfo,
    utterance,
    error,
    toggle,
    speak
  };
}

function useStorageAsync(key, initialValue, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const rawInit = unref(initialValue);
  const type = guessSerializerType(rawInit);
  const data = (shallow ? shallowRef : ref)(initialValue);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  async function read(event) {
    if (!storage || event && event.key !== key)
      return;
    try {
      const rawValue = event ? event.newValue : await storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null)
          await storage.setItem(key, await serializer.write(rawInit));
      } else {
        data.value = await serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
  }
  read();
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", (e) => setTimeout(() => read(e), 0));
  if (storage) {
    watchWithFilter(data, async () => {
      try {
        if (data.value == null)
          await storage.removeItem(key);
        else
          await storage.setItem(key, await serializer.write(data.value));
      } catch (e) {
        onError(e);
      }
    }, {
      flush,
      deep,
      eventFilter
    });
  }
  return data;
}

let _id = 0;
function useStyleTag(css, options = {}) {
  const isLoaded = ref(false);
  const {
    document = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = ref(css);
  let stop = () => {
  };
  const load = () => {
    if (!document)
      return;
    const el = document.getElementById(id) || document.createElement("style");
    el.type = "text/css";
    el.id = id;
    if (options.media)
      el.media = options.media;
    document.head.appendChild(el);
    if (isLoaded.value)
      return;
    stop = watch(cssRef, (value) => {
      el.innerText = value;
    }, { immediate: true });
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document || !isLoaded.value)
      return;
    stop();
    document.head.removeChild(document.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    load();
  if (!manual)
    tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}

function useTemplateRefsList() {
  const refs = ref([]);
  refs.value.set = (el) => {
    if (el)
      refs.value.push(el);
  };
  onBeforeUpdate(() => {
    refs.value.length = 0;
  });
  return refs;
}

function getRangesFromSelection(selection) {
  var _a;
  const rangeCount = (_a = selection.rangeCount) != null ? _a : 0;
  const ranges = new Array(rangeCount);
  for (let i = 0; i < rangeCount; i++) {
    const range = selection.getRangeAt(i);
    ranges[i] = range;
  }
  return ranges;
}
function useTextSelection(options = {}) {
  const {
    window = defaultWindow
  } = options;
  const selection = ref(null);
  const text = computed(() => {
    var _a, _b;
    return (_b = (_a = selection.value) == null ? void 0 : _a.toString()) != null ? _b : "";
  });
  const ranges = computed(() => selection.value ? getRangesFromSelection(selection.value) : []);
  const rects = computed(() => ranges.value.map((range) => range.getBoundingClientRect()));
  function onSelectionChange() {
    selection.value = null;
    if (window)
      selection.value = window.getSelection();
  }
  if (window)
    useEventListener(window.document, "selectionchange", onSelectionChange);
  return {
    text,
    rects,
    ranges,
    selection
  };
}

var core_defProp$2 = Object.defineProperty;
var core_defProps = Object.defineProperties;
var core_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var core_getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var core_hasOwnProp$2 = Object.prototype.hasOwnProperty;
var core_propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$2 = (obj, key, value) => key in obj ? core_defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$2.call(b, prop))
      core_defNormalProp$2(a, prop, b[prop]);
  if (core_getOwnPropSymbols$2)
    for (var prop of core_getOwnPropSymbols$2(b)) {
      if (core_propIsEnum$2.call(b, prop))
        core_defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps = (a, b) => core_defProps(a, core_getOwnPropDescs(b));
function useThrottledRefHistory(source, options = {}) {
  const { throttle = 200, trailing = true } = options;
  const filter = throttleFilter(throttle, trailing);
  const history = useRefHistory(source, core_spreadProps(core_spreadValues$2({}, options), { eventFilter: filter }));
  return core_spreadValues$2({}, history);
}

var core_defProp$1 = Object.defineProperty;
var core_getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var core_hasOwnProp$1 = Object.prototype.hasOwnProperty;
var core_propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$1 = (obj, key, value) => key in obj ? core_defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$1.call(b, prop))
      core_defNormalProp$1(a, prop, b[prop]);
  if (core_getOwnPropSymbols$1)
    for (var prop of core_getOwnPropSymbols$1(b)) {
      if (core_propIsEnum$1.call(b, prop))
        core_defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var core_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (core_hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && core_getOwnPropSymbols$1)
    for (var prop of core_getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && core_propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Infinity, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`
};
const DEFAULT_FORMATTER = (date) => date.toISOString().slice(0, 10);
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    max,
    updateInterval = 3e4,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER
  } = options;
  const { abs, round } = Math;
  const _a = useNow({ interval: updateInterval, controls: true }), { now } = _a, controls = core_objRest(_a, ["now"]);
  function getTimeago(from, now2) {
    var _a2;
    const diff = +now2 - +from;
    const absDiff = abs(diff);
    if (absDiff < 6e4)
      return messages.justNow;
    if (typeof max === "number" && absDiff > max)
      return fullDateFormatter(new Date(from));
    if (typeof max === "string") {
      const unitMax = (_a2 = UNITS.find((i) => i.name === max)) == null ? void 0 : _a2.max;
      if (unitMax && absDiff > unitMax)
        return fullDateFormatter(new Date(from));
    }
    for (const unit of UNITS) {
      if (absDiff < unit.max)
        return format(diff, unit);
    }
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  function format(diff, unit) {
    const val = round(abs(diff) / unit.value);
    const past = diff > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  const timeAgo = computed(() => getTimeago(new Date(unref(time)), unref(now.value)));
  if (exposeControls) {
    return core_spreadValues$1({
      timeAgo
    }, controls);
  } else {
    return timeAgo;
  }
}

function useTimeoutPoll(fn, interval, timeoutPollOptions) {
  const { start } = useTimeoutFn(loop, interval);
  const isActive = ref(false);
  async function loop() {
    if (!isActive.value)
      return;
    await fn();
    start();
  }
  function resume() {
    if (!isActive.value) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
  }
  if (timeoutPollOptions == null ? void 0 : timeoutPollOptions.immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var core_defProp = Object.defineProperty;
var core_getOwnPropSymbols = Object.getOwnPropertySymbols;
var core_hasOwnProp = Object.prototype.hasOwnProperty;
var core_propIsEnum = Object.prototype.propertyIsEnumerable;
var core_defNormalProp = (obj, key, value) => key in obj ? core_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp.call(b, prop))
      core_defNormalProp(a, prop, b[prop]);
  if (core_getOwnPropSymbols)
    for (var prop of core_getOwnPropSymbols(b)) {
      if (core_propIsEnum.call(b, prop))
        core_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function useTimestamp(options = {}) {
  const {
    controls: exposeControls = false,
    offset = 0,
    immediate = true,
    interval = "requestAnimationFrame"
  } = options;
  const ts = ref(timestamp() + offset);
  const update = () => ts.value = timestamp() + offset;
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate }) : useIntervalFn(update, interval, { immediate });
  if (exposeControls) {
    return core_spreadValues({
      timestamp: ts
    }, controls);
  } else {
    return ts;
  }
}

function useTitle(newTitle = null, options = {}) {
  var _a, _b;
  const {
    document = defaultDocument,
    observe = false,
    titleTemplate = "%s"
  } = options;
  const title = ref((_a = newTitle != null ? newTitle : document == null ? void 0 : document.title) != null ? _a : null);
  watch(title, (t, o) => {
    if (isString(t) && t !== o && document)
      document.title = titleTemplate.replace("%s", t);
  }, { immediate: true });
  if (observe && document) {
    useMutationObserver((_b = document.head) == null ? void 0 : _b.querySelector("title"), () => {
      if (document && document.title !== title.value)
        title.value = titleTemplate.replace("%s", document.title);
    }, { childList: true });
  }
  return title;
}

const TransitionPresets = {
  linear: shared_identity,
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function useTransition(source, options = {}) {
  const {
    delay = 0,
    disabled = false,
    duration = 1e3,
    onFinished = noop,
    onStarted = noop,
    transition = identity
  } = options;
  const currentTransition = computed(() => {
    const t = unref(transition);
    return isFunction(t) ? t : createEasingFunction(t);
  });
  const sourceValue = computed(() => {
    const s = unref(source);
    return isNumber(s) ? s : s.map(unref);
  });
  const sourceVector = computed(() => isNumber(sourceValue.value) ? [sourceValue.value] : sourceValue.value);
  const outputVector = ref(sourceVector.value.slice(0));
  let currentDuration;
  let diffVector;
  let endAt;
  let startAt;
  let startVector;
  const { resume, pause } = useRafFn(() => {
    const now = Date.now();
    const progress = clamp(1 - (endAt - now) / currentDuration, 0, 1);
    outputVector.value = startVector.map((val, i) => {
      var _a;
      return val + ((_a = diffVector[i]) != null ? _a : 0) * currentTransition.value(progress);
    });
    if (progress >= 1) {
      pause();
      onFinished();
    }
  }, { immediate: false });
  const start = () => {
    pause();
    currentDuration = unref(duration);
    diffVector = outputVector.value.map((n, i) => {
      var _a, _b;
      return ((_a = sourceVector.value[i]) != null ? _a : 0) - ((_b = outputVector.value[i]) != null ? _b : 0);
    });
    startVector = outputVector.value.slice(0);
    startAt = Date.now();
    endAt = startAt + currentDuration;
    resume();
    onStarted();
  };
  const timeout = useTimeoutFn(start, delay, { immediate: false });
  watch(sourceVector, () => {
    if (unref(disabled)) {
      outputVector.value = sourceVector.value.slice(0);
    } else {
      if (unref(delay) <= 0)
        start();
      else
        timeout.start();
    }
  }, { deep: true });
  return computed(() => {
    const targetVector = unref(disabled) ? sourceVector : outputVector;
    return isNumber(sourceValue.value) ? targetVector.value[0] : targetVector.value;
  });
}

function useUrlSearchParams(mode = "history", options = {}) {
  const {
    initialValue = {},
    removeNullishValues = true,
    removeFalsyValues = false,
    window = defaultWindow
  } = options;
  if (!window)
    return reactive(initialValue);
  const state = reactive(initialValue);
  function getRawParams() {
    if (mode === "history") {
      return window.location.search || "";
    } else if (mode === "hash") {
      const hash = window.location.hash || "";
      const index = hash.indexOf("?");
      return index > 0 ? hash.slice(index) : "";
    } else {
      return (window.location.hash || "").replace(/^#/, "");
    }
  }
  function constructQuery(params) {
    const stringified = params.toString();
    if (mode === "history")
      return `${stringified ? `?${stringified}` : ""}${location.hash || ""}`;
    if (mode === "hash-params")
      return `${location.search || ""}${stringified ? `#${stringified}` : ""}`;
    const hash = window.location.hash || "#";
    const index = hash.indexOf("?");
    if (index > 0)
      return `${hash.slice(0, index)}${stringified ? `?${stringified}` : ""}`;
    return `${hash}${stringified ? `?${stringified}` : ""}`;
  }
  function read() {
    return new URLSearchParams(getRawParams());
  }
  function updateState(params) {
    const unusedKeys = new Set(Object.keys(state));
    for (const key of params.keys()) {
      const paramsForKey = params.getAll(key);
      state[key] = paramsForKey.length > 1 ? paramsForKey : params.get(key) || "";
      unusedKeys.delete(key);
    }
    Array.from(unusedKeys).forEach((key) => delete state[key]);
  }
  const { pause, resume } = pausableWatch(state, () => {
    const params = new URLSearchParams("");
    Object.keys(state).forEach((key) => {
      const mapEntry = state[key];
      if (Array.isArray(mapEntry))
        mapEntry.forEach((value) => params.append(key, value));
      else if (removeNullishValues && mapEntry == null)
        params.delete(key);
      else if (removeFalsyValues && !mapEntry)
        params.delete(key);
      else
        params.set(key, mapEntry);
    });
    write(params);
  }, { deep: true });
  function write(params, shouldUpdate) {
    pause();
    if (shouldUpdate)
      updateState(params);
    window.history.replaceState({}, "", window.location.pathname + constructQuery(params));
    resume();
  }
  function onChanged() {
    write(read(), true);
  }
  useEventListener(window, "popstate", onChanged, false);
  if (mode !== "history")
    useEventListener(window, "hashchange", onChanged, false);
  updateState(read());
  return state;
}

function useUserMedia(options = {}) {
  var _a, _b, _c;
  const enabled = ref((_a = options.enabled) != null ? _a : false);
  const autoSwitch = ref((_b = options.autoSwitch) != null ? _b : true);
  const videoDeviceId = ref(options.videoDeviceId);
  const audioDeviceId = ref(options.audioDeviceId);
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_c = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _c.getUserMedia);
  const stream = shallowRef();
  function getDeviceOptions(device) {
    if (device.value === "none" || device.value === false)
      return false;
    if (device.value == null)
      return true;
    return {
      deviceId: device.value
    };
  }
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: getDeviceOptions(videoDeviceId),
      audio: getDeviceOptions(audioDeviceId)
    });
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  async function restart() {
    _stop();
    return await start();
  }
  watch(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  watch([videoDeviceId, audioDeviceId], () => {
    if (autoSwitch.value && stream.value)
      restart();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    restart,
    videoDeviceId,
    audioDeviceId,
    enabled,
    autoSwitch
  };
}

function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    passive = false,
    eventName,
    deep = false
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm));
  let event = eventName;
  if (!key) {
    if (isVue2) {
      const modelOptions = (_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$options) == null ? void 0 : _c.model;
      key = (modelOptions == null ? void 0 : modelOptions.value) || "value";
      if (!eventName)
        event = (modelOptions == null ? void 0 : modelOptions.event) || "input";
    } else {
      key = "modelValue";
    }
  }
  event = eventName || event || `update:${key}`;
  if (passive) {
    const proxy = ref(props[key]);
    watch(() => props[key], (v) => proxy.value = v);
    watch(proxy, (v) => {
      if (v !== props[key] || deep)
        _emit(event, v);
    }, {
      deep
    });
    return proxy;
  } else {
    return computed({
      get() {
        return props[key];
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}

function useVModels(props, emit, options = {}) {
  const ret = {};
  for (const key in props)
    ret[key] = useVModel(props, key, emit, options);
  return ret;
}

function useVibrate(options) {
  const {
    pattern = [],
    interval = 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = typeof navigator !== "undefined" && "vibrate" in navigator;
  const patternRef = ref(pattern);
  let intervalControls;
  const vibrate = (pattern2 = patternRef.value) => {
    if (isSupported)
      navigator.vibrate(pattern2);
  };
  const stop = () => {
    if (isSupported)
      navigator.vibrate(0);
    intervalControls == null ? void 0 : intervalControls.pause();
  };
  if (interval > 0) {
    intervalControls = useIntervalFn(vibrate, interval, {
      immediate: false,
      immediateCallback: false
    });
  }
  return {
    isSupported,
    pattern,
    intervalControls,
    vibrate,
    stop
  };
}

function useVirtualList(list, options) {
  const containerRef = ref();
  const size = useElementSize(containerRef);
  const currentList = ref([]);
  const source = shallowRef(list);
  const state = ref({ start: 0, end: 10 });
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = (containerHeight) => {
    if (typeof itemHeight === "number")
      return Math.ceil(containerHeight / itemHeight);
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= containerHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };
  const getOffset = (scrollTop) => {
    if (typeof itemHeight === "number")
      return Math.floor(scrollTop / itemHeight) + 1;
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
  const calculateRange = () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(element.scrollTop);
      const viewCapacity = getViewCapacity(element.clientHeight);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
        data: ele,
        index: index + state.value.start
      }));
    }
  };
  watch([size.width, size.height, list], () => {
    calculateRange();
  });
  const totalHeight = computed(() => {
    if (typeof itemHeight === "number")
      return source.value.length * itemHeight;
    return source.value.reduce((sum, _, index) => sum + itemHeight(index), 0);
  });
  const getDistanceTop = (index) => {
    if (typeof itemHeight === "number") {
      const height2 = index * itemHeight;
      return height2;
    }
    const height = source.value.slice(0, index).reduce((sum, _, i) => sum + itemHeight(i), 0);
    return height;
  };
  const scrollTo = (index) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };
  const offsetTop = computed(() => getDistanceTop(state.value.start));
  const wrapperProps = computed(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  const containerStyle = { overflowY: "auto" };
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps
  };
}

const useWakeLock = (options = {}) => {
  const {
    navigator = defaultNavigator,
    document = defaultDocument
  } = options;
  let wakeLock;
  const isSupported = navigator && "wakeLock" in navigator;
  const isActive = ref(false);
  async function onVisibilityChange() {
    if (!isSupported || !wakeLock)
      return;
    if (document && document.visibilityState === "visible")
      wakeLock = await navigator.wakeLock.request("screen");
    isActive.value = !wakeLock.released;
  }
  if (document)
    useEventListener(document, "visibilitychange", onVisibilityChange, { passive: true });
  async function request(type) {
    if (!isSupported)
      return;
    wakeLock = await navigator.wakeLock.request(type);
    isActive.value = !wakeLock.released;
  }
  async function release() {
    if (!isSupported || !wakeLock)
      return;
    await wakeLock.release();
    isActive.value = !wakeLock.released;
    wakeLock = null;
  }
  return {
    isSupported,
    isActive,
    request,
    release
  };
};

const useWebNotification = (defaultOptions = {}) => {
  const {
    window = defaultWindow
  } = defaultOptions;
  const isSupported = !!window && "Notification" in window;
  const notification = ref(null);
  const requestPermission = async () => {
    if (!isSupported)
      return;
    if ("permission" in Notification && Notification.permission !== "denied")
      await Notification.requestPermission();
  };
  const onClick = createEventHook();
  const onShow = createEventHook();
  const onError = createEventHook();
  const onClose = createEventHook();
  const show = async (overrides) => {
    if (!isSupported)
      return;
    await requestPermission();
    const options = Object.assign({}, defaultOptions, overrides);
    notification.value = new Notification(options.title || "", options);
    notification.value.onclick = (event) => onClick.trigger(event);
    notification.value.onshow = (event) => onShow.trigger(event);
    notification.value.onerror = (event) => onError.trigger(event);
    notification.value.onclose = (event) => onClose.trigger(event);
    return notification.value;
  };
  const close = () => {
    if (notification.value)
      notification.value.close();
    notification.value = null;
  };
  tryOnMounted(async () => {
    if (isSupported)
      await requestPermission();
  });
  tryOnScopeDispose(close);
  if (isSupported && window) {
    const document = window.document;
    useEventListener(document, "visibilitychange", (e) => {
      e.preventDefault();
      if (document.visibilityState === "visible") {
        close();
      }
    });
  }
  return {
    isSupported,
    notification,
    show,
    close,
    onClick,
    onShow,
    onError,
    onClose
  };
};

function resolveNestedOptions(options) {
  if (options === true)
    return {};
  return options;
}
function useWebSocket(url, options = {}) {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    immediate = true,
    autoClose = true,
    protocols = []
  } = options;
  const data = ref(null);
  const status = ref("CONNECTING");
  const wsRef = ref();
  let heartbeatPause;
  let heartbeatResume;
  let explicitlyClosed = false;
  let retried = 0;
  let bufferedData = [];
  const close = (code = 1e3, reason) => {
    if (!wsRef.value)
      return;
    explicitlyClosed = true;
    heartbeatPause == null ? void 0 : heartbeatPause();
    wsRef.value.close(code, reason);
  };
  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === "OPEN") {
      for (const buffer of bufferedData)
        wsRef.value.send(buffer);
      bufferedData = [];
    }
  };
  const send = (data2, useBuffer = true) => {
    if (!wsRef.value || status.value !== "OPEN") {
      if (useBuffer)
        bufferedData.push(data2);
      return false;
    }
    _sendBuffer();
    wsRef.value.send(data2);
    return true;
  };
  const _init = () => {
    const ws = new WebSocket(url, protocols);
    wsRef.value = ws;
    status.value = "CONNECTING";
    explicitlyClosed = false;
    ws.onopen = () => {
      status.value = "OPEN";
      onConnected == null ? void 0 : onConnected(ws);
      heartbeatResume == null ? void 0 : heartbeatResume();
      _sendBuffer();
    };
    ws.onclose = (ev) => {
      status.value = "CLOSED";
      wsRef.value = void 0;
      onDisconnected == null ? void 0 : onDisconnected(ws, ev);
      if (!explicitlyClosed && options.autoReconnect) {
        const {
          retries = -1,
          delay = 1e3,
          onFailed
        } = resolveNestedOptions(options.autoReconnect);
        retried += 1;
        if (typeof retries === "number" && (retries < 0 || retried < retries))
          setTimeout(_init, delay);
        else if (typeof retries === "function" && retries())
          setTimeout(_init, delay);
        else
          onFailed == null ? void 0 : onFailed();
      }
    };
    ws.onerror = (e) => {
      onError == null ? void 0 : onError(ws, e);
    };
    ws.onmessage = (e) => {
      data.value = e.data;
      onMessage == null ? void 0 : onMessage(ws, e);
    };
  };
  if (options.heartbeat) {
    const {
      message = "ping",
      interval = 1e3
    } = resolveNestedOptions(options.heartbeat);
    const { pause, resume } = useIntervalFn(() => send(message, false), interval, { immediate: false });
    heartbeatPause = pause;
    heartbeatResume = resume;
  }
  if (immediate)
    _init();
  if (autoClose) {
    useEventListener(window, "beforeunload", () => close());
    tryOnScopeDispose(close);
  }
  const open = () => {
    close();
    retried = 0;
    _init();
  };
  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef
  };
}

function useWebWorker(url, workerOptions, options = {}) {
  const {
    window = defaultWindow
  } = options;
  const data = ref(null);
  const worker = shallowRef();
  const post = function post2(val) {
    if (!worker.value)
      return;
    worker.value.postMessage(val);
  };
  const terminate = function terminate2() {
    if (!worker.value)
      return;
    worker.value.terminate();
  };
  if (window) {
    worker.value = new Worker(url, workerOptions);
    worker.value.onmessage = (e) => {
      data.value = e.data;
    };
    tryOnScopeDispose(() => {
      if (worker.value)
        worker.value.terminate();
    });
  }
  return {
    data,
    post,
    terminate,
    worker
  };
}

const jobRunner = (userFunc) => (e) => {
  const userFuncArgs = e.data[0];
  return Promise.resolve(userFunc.apply(void 0, userFuncArgs)).then((result) => {
    postMessage(["SUCCESS", result]);
  }).catch((error) => {
    postMessage(["ERROR", error]);
  });
};

const depsParser = (deps) => {
  if (deps.length === 0)
    return "";
  const depsString = deps.map((dep) => `'${dep}'`).toString();
  return `importScripts(${depsString})`;
};

const createWorkerBlobUrl = (fn, deps) => {
  const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`;
  const blob = new Blob([blobCode], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  return url;
};

const useWebWorkerFn = (fn, options = {}) => {
  const {
    dependencies = [],
    timeout,
    window = defaultWindow
  } = options;
  const worker = ref();
  const workerStatus = ref("PENDING");
  const promise = ref({});
  const timeoutId = ref();
  const workerTerminate = (status = "PENDING") => {
    if (worker.value && worker.value._url && window) {
      worker.value.terminate();
      URL.revokeObjectURL(worker.value._url);
      promise.value = {};
      worker.value = void 0;
      window.clearTimeout(timeoutId.value);
      workerStatus.value = status;
    }
  };
  workerTerminate();
  tryOnScopeDispose(workerTerminate);
  const generateWorker = () => {
    const blobUrl = createWorkerBlobUrl(fn, dependencies);
    const newWorker = new Worker(blobUrl);
    newWorker._url = blobUrl;
    newWorker.onmessage = (e) => {
      const { resolve = () => {
      }, reject = () => {
      } } = promise.value;
      const [status, result] = e.data;
      switch (status) {
        case "SUCCESS":
          resolve(result);
          workerTerminate(status);
          break;
        default:
          reject(result);
          workerTerminate("ERROR");
          break;
      }
    };
    newWorker.onerror = (e) => {
      const { reject = () => {
      } } = promise.value;
      reject(e);
      workerTerminate("ERROR");
    };
    if (timeout) {
      timeoutId.value = setTimeout(() => workerTerminate("TIMEOUT_EXPIRED"), timeout);
    }
    return newWorker;
  };
  const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
    promise.value = {
      resolve,
      reject
    };
    worker.value && worker.value.postMessage([[...fnArgs]]);
    workerStatus.value = "RUNNING";
  });
  const workerFn = (...fnArgs) => {
    if (workerStatus.value === "RUNNING") {
      console.error("[useWebWorkerFn] You can only run one instance of the worker at a time.");
      return Promise.reject();
    }
    worker.value = generateWorker();
    return callWorker(...fnArgs);
  };
  return {
    workerFn,
    workerStatus,
    workerTerminate
  };
};

function useWindowFocus({ window = defaultWindow } = {}) {
  if (!window)
    return ref(false);
  const focused = ref(window.document.hasFocus());
  useEventListener(window, "blur", () => {
    focused.value = false;
  });
  useEventListener(window, "focus", () => {
    focused.value = true;
  });
  return focused;
}

function useWindowScroll({ window = defaultWindow } = {}) {
  if (!window) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x = ref(window.pageXOffset);
  const y = ref(window.pageYOffset);
  useEventListener("scroll", () => {
    x.value = window.pageXOffset;
    y.value = window.pageYOffset;
  }, {
    capture: false,
    passive: true
  });
  return { x, y };
}

function useWindowSize({ window = defaultWindow, initialWidth = Infinity, initialHeight = Infinity } = {}) {
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window) {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  return { width, height };
}



;// CONCATENATED MODULE: ./node_modules/element-plus/es/components/badge/src/badge.mjs



const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
});


//# sourceMappingURL=badge.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/_virtual/plugin-vue_export-helper.mjs
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};


//# sourceMappingURL=plugin-vue_export-helper.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/hooks/use-namespace/index.mjs



const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const globalConfig = useGlobalConfig("namespace");
  const namespace = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => globalConfig.value || defaultNamespace);
  const b = (blockSuffix = "") => _bem((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(namespace), block, blockSuffix, "", "");
  const e = (element) => element ? _bem((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(namespace), block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(namespace), block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(namespace), block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(namespace), block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(namespace), block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(namespace), block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
  };
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/components/badge/src/badge2.mjs








const badge2_hoisted_1 = ["textContent"];
const __default__ = {
  name: "ElBadge"
};
const _sfc_main = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  ...__default__,
  props: badgeProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("badge");
    const content = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
      if (props.isDot)
        return "";
      if (shared_isNumber(props.value) && shared_isNumber(props.max)) {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    expose({
      content
    });
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(ns).b())
      }, [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default"),
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Transition, {
          name: `${(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(ns).namespace.value}-zoom-in-center`
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [
            (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("sup", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)([
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(ns).e("content"),
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(ns).em("content", _ctx.type),
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(ns).is("fixed", !!_ctx.$slots.default),
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(ns).is("dot", _ctx.isDot)
              ]),
              textContent: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(content))
            }, null, 10, badge2_hoisted_1), [
              [external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, !_ctx.hidden && ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(content) || (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(content) === "0" || _ctx.isDot)]
            ])
          ]),
          _: 1
        }, 8, ["name"])
      ], 2);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);


//# sourceMappingURL=badge2.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/utils/vue/install.mjs


const withInstall = (main, extra) => {
  ;
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;
      main[key] = comp;
    }
  }
  return main;
};
const withInstallFunction = (fn, name) => {
  ;
  fn.install = (app) => {
    ;
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
const withNoopInstall = (component) => {
  ;
  component.install = NOOP;
  return component;
};


//# sourceMappingURL=install.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/components/badge/index.mjs





const ElBadge = withInstall(Badge);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/components/icon/src/icon.mjs



const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});


//# sourceMappingURL=icon.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/utils/types.mjs






const isUndefined = (val) => val === void 0;
const isEmpty = (val) => !val && val !== 0 || isArray(val) && val.length === 0 || isObject(val) && !Object.keys(val).length;
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isPropAbsent = (prop) => {
  return isNil(prop);
};


//# sourceMappingURL=types.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/utils/vue/style.mjs





const SCOPE = "utils/vue/style";
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (shared_esm_bundler_isString(value)) {
    return value;
  } else if (shared_isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
  debugWarn(SCOPE, "binding value must be a string or number");
}


//# sourceMappingURL=style.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/components/icon/src/icon2.mjs









const icon2_default_ = {
  name: "ElIcon",
  inheritAttrs: false
};
const icon2_sfc_main = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  ...icon2_default_,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("i", (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(ns).b(),
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.unref)(style)
      }, _ctx.$attrs), [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(icon2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);


//# sourceMappingURL=icon2.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/components/icon/index.mjs





const ElIcon = withInstall(Icon);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/@element-plus/icons-vue/dist/es/_virtual/plugin-vue_export-helper.mjs
var plugin_vue_export_helper_export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};



;// CONCATENATED MODULE: ./node_modules/@element-plus/icons-vue/dist/es/close.mjs



const close_sfc_main = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "Close"
});
const close_hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const close_hoisted_2 = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1);
const close_hoisted_3 = [
  close_hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", close_hoisted_1, close_hoisted_3);
}
var close_close = /* @__PURE__ */ plugin_vue_export_helper_export_sfc(close_sfc_main, [["render", _sfc_render]]);



;// CONCATENATED MODULE: ./node_modules/@element-plus/icons-vue/dist/es/success-filled.mjs



const success_filled_sfc_main = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "SuccessFilled"
});
const success_filled_hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const success_filled_hoisted_2 = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1);
const success_filled_hoisted_3 = [
  success_filled_hoisted_2
];
function success_filled_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", success_filled_hoisted_1, success_filled_hoisted_3);
}
var successFilled = /* @__PURE__ */ plugin_vue_export_helper_export_sfc(success_filled_sfc_main, [["render", success_filled_sfc_render]]);



;// CONCATENATED MODULE: ./node_modules/@element-plus/icons-vue/dist/es/info-filled.mjs



const info_filled_sfc_main = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "InfoFilled"
});
const info_filled_hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const info_filled_hoisted_2 = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1);
const info_filled_hoisted_3 = [
  info_filled_hoisted_2
];
function info_filled_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", info_filled_hoisted_1, info_filled_hoisted_3);
}
var infoFilled = /* @__PURE__ */ plugin_vue_export_helper_export_sfc(info_filled_sfc_main, [["render", info_filled_sfc_render]]);



;// CONCATENATED MODULE: ./node_modules/@element-plus/icons-vue/dist/es/warning-filled.mjs



const warning_filled_sfc_main = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "WarningFilled"
});
const warning_filled_hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const warning_filled_hoisted_2 = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1);
const warning_filled_hoisted_3 = [
  warning_filled_hoisted_2
];
function warning_filled_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", warning_filled_hoisted_1, warning_filled_hoisted_3);
}
var warningFilled = /* @__PURE__ */ plugin_vue_export_helper_export_sfc(warning_filled_sfc_main, [["render", warning_filled_sfc_render]]);



;// CONCATENATED MODULE: ./node_modules/@element-plus/icons-vue/dist/es/circle-close-filled.mjs



const circle_close_filled_sfc_main = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "CircleCloseFilled"
});
const circle_close_filled_hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const circle_close_filled_hoisted_2 = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1);
const circle_close_filled_hoisted_3 = [
  circle_close_filled_hoisted_2
];
function circle_close_filled_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", circle_close_filled_hoisted_1, circle_close_filled_hoisted_3);
}
var circleCloseFilled = /* @__PURE__ */ plugin_vue_export_helper_export_sfc(circle_close_filled_sfc_main, [["render", circle_close_filled_sfc_render]]);



;// CONCATENATED MODULE: ./node_modules/@element-plus/icons-vue/dist/es/loading.mjs



const loading_sfc_main = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "Loading"
});
const loading_hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const loading_hoisted_2 = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1);
const loading_hoisted_3 = [
  loading_hoisted_2
];
function loading_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", loading_hoisted_1, loading_hoisted_3);
}
var loading = /* @__PURE__ */ plugin_vue_export_helper_export_sfc(loading_sfc_main, [["render", loading_sfc_render]]);



;// CONCATENATED MODULE: ./node_modules/@element-plus/icons-vue/dist/es/circle-check.mjs



const circle_check_sfc_main = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "CircleCheck"
});
const circle_check_hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const circle_check_hoisted_2 = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const circle_check_hoisted_3 = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1);
const circle_check_hoisted_4 = [
  circle_check_hoisted_2,
  circle_check_hoisted_3
];
function circle_check_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", circle_check_hoisted_1, circle_check_hoisted_4);
}
var circleCheck = /* @__PURE__ */ plugin_vue_export_helper_export_sfc(circle_check_sfc_main, [["render", circle_check_sfc_render]]);



;// CONCATENATED MODULE: ./node_modules/@element-plus/icons-vue/dist/es/circle-close.mjs



const circle_close_sfc_main = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "CircleClose"
});
const circle_close_hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const circle_close_hoisted_2 = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1);
const circle_close_hoisted_3 = /* @__PURE__ */ (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1);
const circle_close_hoisted_4 = [
  circle_close_hoisted_2,
  circle_close_hoisted_3
];
function circle_close_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", circle_close_hoisted_1, circle_close_hoisted_4);
}
var circleClose = /* @__PURE__ */ plugin_vue_export_helper_export_sfc(circle_close_sfc_main, [["render", circle_close_sfc_render]]);



;// CONCATENATED MODULE: ./node_modules/element-plus/es/utils/vue/icon.mjs



const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const CloseComponents = {
  Close: close_close
};
const TypeComponents = {
  Close: close_close,
  SuccessFilled: successFilled,
  InfoFilled: infoFilled,
  WarningFilled: warningFilled,
  CircleCloseFilled: circleCloseFilled
};
const TypeComponentsMap = {
  success: successFilled,
  warning: warningFilled,
  error: circleCloseFilled,
  info: infoFilled
};
const ValidateComponentsMap = {
  validating: loading,
  success: circleCheck,
  error: circleClose
};


//# sourceMappingURL=icon.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/components/message/src/message.mjs




const messageTypes = ["success", "info", "warning", "error"];
const messageProps = buildProps({
  customClass: {
    type: String,
    default: ""
  },
  center: {
    type: Boolean,
    default: false
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3e3
  },
  icon: {
    type: iconPropType,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  onClose: {
    type: definePropType(Function),
    required: false
  },
  showClose: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    values: messageTypes,
    default: "info"
  },
  offset: {
    type: Number,
    default: 20
  },
  zIndex: {
    type: Number,
    default: 0
  },
  grouping: {
    type: Boolean,
    default: false
  },
  repeatNum: {
    type: Number,
    default: 1
  }
});
const messageEmits = {
  destroy: () => true
};


//# sourceMappingURL=message.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/constants/aria.mjs
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};


//# sourceMappingURL=aria.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/components/message/src/message2.mjs













const message2_sfc_main = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "ElMessage",
  components: {
    ElBadge: ElBadge,
    ElIcon: ElIcon,
    ...TypeComponents
  },
  props: messageProps,
  emits: messageEmits,
  setup(props) {
    const ns = useNamespace("message");
    const visible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
    const badgeType = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(props.type ? props.type === "error" ? "danger" : props.type : "info");
    let stopTimer = void 0;
    const typeClass = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
      const type = props.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const iconComponent = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
      return props.icon || TypeComponentsMap[props.type] || "";
    });
    const customStyle = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => ({
      top: `${props.offset}px`,
      zIndex: props.zIndex
    }));
    function startTimer() {
      if (props.duration > 0) {
        ;
        ({ stop: stopTimer } = shared_useTimeoutFn(() => {
          if (visible.value)
            close();
        }, props.duration));
      }
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close() {
      visible.value = false;
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        if (visible.value) {
          close();
        }
      } else {
        startTimer();
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
      startTimer();
      visible.value = true;
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(document, "keydown", keydown);
    return {
      ns,
      typeClass,
      iconComponent,
      customStyle,
      visible,
      badgeType,
      close,
      clearTimer,
      startTimer
    };
  }
});
const message2_hoisted_1 = ["id"];
const message2_hoisted_2 = ["innerHTML"];
function message2_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_badge = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-badge");
  const _component_el_icon = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-icon");
  const _component_close = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("close");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Transition, {
    name: _ctx.ns.b("fade"),
    onBeforeLeave: _ctx.onClose,
    onAfterLeave: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("destroy"))
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
        id: _ctx.id,
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)([
          _ctx.ns.b(),
          { [_ctx.ns.m(_ctx.type)]: _ctx.type && !_ctx.icon },
          _ctx.ns.is("center", _ctx.center),
          _ctx.ns.is("closable", _ctx.showClose),
          _ctx.customClass
        ]),
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)(_ctx.customStyle),
        role: "alert",
        onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.clearTimer && _ctx.clearTimer(...args)),
        onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.startTimer && _ctx.startTimer(...args))
      }, [
        _ctx.repeatNum > 1 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_el_badge, {
          key: 0,
          value: _ctx.repeatNum,
          type: _ctx.badgeType,
          class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(_ctx.ns.e("badge"))
        }, null, 8, ["value", "type", "class"])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("v-if", true),
        _ctx.iconComponent ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_el_icon, {
          key: 1,
          class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)([_ctx.ns.e("icon"), _ctx.typeClass])
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [
            ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveDynamicComponent)(_ctx.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("v-if", true),
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default", {}, () => [
          !_ctx.dangerouslyUseHTMLString ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("p", {
            key: 0,
            class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(_ctx.ns.e("content"))
          }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(_ctx.message), 3)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, { key: 1 }, [
            (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)(" Caution here, message could've been compromised, never use user's input as message "),
            (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("p", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(_ctx.ns.e("content")),
              innerHTML: _ctx.message
            }, null, 10, message2_hoisted_2)
          ], 2112))
        ]),
        _ctx.showClose ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_el_icon, {
          key: 2,
          class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(_ctx.ns.e("closeBtn")),
          onClick: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)(_ctx.close, ["stop"])
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [
            (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_close)
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("v-if", true)
      ], 46, message2_hoisted_1), [
        [external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, _ctx.visible]
      ])
    ]),
    _: 3
  }, 8, ["name", "onBeforeLeave"]);
}
var MessageConstructor = /* @__PURE__ */ _export_sfc(message2_sfc_main, [["render", message2_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);


//# sourceMappingURL=message2.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/hooks/use-z-index/index.mjs



const zIndex = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(0);
const useZIndex = () => {
  const initialZIndex = useGlobalConfig("zIndex", 2e3);
  const currentZIndex = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/components/message/src/message-method.mjs












const instances = [];
let seed = 1;
const message = function(options = {}, context) {
  if (!shared_isClient)
    return { close: () => void 0 };
  if (shared_isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => void 0 };
  }
  if (!(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.isVNode)(options) && shared_esm_bundler_isObject(options) && options.grouping && !(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.isVNode)(options.message) && instances.length) {
    const tempVm = instances.find((item) => {
      var _a, _b, _c;
      return `${(_b = (_a = item.vm.props) == null ? void 0 : _a.message) != null ? _b : ""}` === `${(_c = options.message) != null ? _c : ""}`;
    });
    if (tempVm) {
      tempVm.vm.component.props.repeatNum += 1;
      tempVm.vm.component.props.type = (options == null ? void 0 : options.type) || "info";
      return {
        close: () => vm.component.proxy.visible = false
      };
    }
  }
  if (shared_esm_bundler_isString(options) || (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.isVNode)(options)) {
    options = { message: options };
  }
  let verticalOffset = options.offset || 20;
  instances.forEach(({ vm: vm2 }) => {
    var _a;
    verticalOffset += (((_a = vm2.el) == null ? void 0 : _a.offsetHeight) || 0) + 16;
  });
  verticalOffset += 16;
  const { nextZIndex } = useZIndex();
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const props = {
    zIndex: nextZIndex(),
    ...options,
    offset: verticalOffset,
    id,
    onClose: () => {
      message_method_close(id, userOnClose);
    }
  };
  let appendTo = document.body;
  if (isElement(options.appendTo)) {
    appendTo = options.appendTo;
  } else if (shared_esm_bundler_isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo);
  }
  if (!isElement(appendTo)) {
    debugWarn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body.");
    appendTo = document.body;
  }
  const container = document.createElement("div");
  container.className = `container_${id}`;
  const messageContent = props.message;
  const vm = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(MessageConstructor, props, shared_esm_bundler_isFunction(messageContent) ? { default: messageContent } : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.isVNode)(messageContent) ? { default: () => messageContent } : null);
  vm.appContext = context || message._context;
  vm.props.onDestroy = () => {
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.render)(null, container);
  };
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.render)(vm, container);
  instances.push({ vm });
  appendTo.appendChild(container.firstElementChild);
  return {
    close: () => vm.component.proxy.visible = false
  };
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    if (shared_esm_bundler_isString(options) || (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.isVNode)(options)) {
      options = {
        message: options
      };
    }
    return message({
      ...options,
      type
    }, appContext);
  };
});
function message_method_close(id, userOnClose) {
  const idx = instances.findIndex(({ vm: vm2 }) => id === vm2.component.props.id);
  if (idx === -1)
    return;
  const { vm } = instances[idx];
  if (!vm)
    return;
  userOnClose == null ? void 0 : userOnClose(vm);
  const removedHeight = vm.el.offsetHeight;
  instances.splice(idx, 1);
  const len = instances.length;
  if (len < 1)
    return;
  for (let i = idx; i < len; i++) {
    const pos = Number.parseInt(instances[i].vm.el.style["top"], 10) - removedHeight - 16;
    instances[i].vm.component.props.offset = pos;
  }
}
function closeAll() {
  var _a;
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component;
    (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.close();
  }
}
message.closeAll = closeAll;
message._context = null;


//# sourceMappingURL=message-method.mjs.map

;// CONCATENATED MODULE: ./node_modules/element-plus/es/components/message/index.mjs





const ElMessage = withInstallFunction(message, "$message");


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/exif-js/exif.js
var exif = __webpack_require__(918);
;// CONCATENATED MODULE: ./node_modules/ios-photo-repair/dist/module.js



const $5b02762f359a5b4d$var$getURLBase64 = function(url) {
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function() {
            if (this.status === 200) {
                let blob = this.response;
                let fileReader = new FileReader();
                fileReader.onloadend = function(e) {
                    let result = e.target.result;
                    resolve(result);
                };
                fileReader.readAsDataURL(blob);
            }
        };
        xhr.onerror = function(err) {
            reject(err);
        };
        xhr.send();
    });
};
const $5b02762f359a5b4d$var$getOri = function(file) {
    return new Promise((resolve)=>{
        (0,exif.getData)(file, function() {
            let orientation = (0,exif.getTag)(this, "Orientation");
            resolve(orientation);
        });
    });
};
const $5b02762f359a5b4d$var$imgToCanvas = function(img, orientation) {
    const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d'), targetWidth = img.targetWidth || img.width, targetHeight = img.targetHeight || img.height;
    if (orientation === 6) {
        canvas.width = targetHeight;
        canvas.height = targetWidth;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(Math.PI / 180 * 90);
        ctx.drawImage(img, -targetWidth / 2, -targetHeight / 2, canvas.height, canvas.width);
    } else {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    return new Promise((resolve)=>{
        resolve(canvas);
    });
};
const $5b02762f359a5b4d$export$333f7af172343a1 = function(selector) {
    const fixImg = function(img) {
        if (!img.dataset.iosfixed) $5b02762f359a5b4d$var$getOri(img).then((orientation)=>{
            if (orientation == 6) $5b02762f359a5b4d$var$imgToCanvas(img, orientation).then((canvas1)=>{
                try {
                    img.src = canvas1.toDataURL();
                    img.dataset.iosfixed = true;
                } catch (e) {
                    $5b02762f359a5b4d$var$getURLBase64(img.src).then((base64)=>{
                        img.onload = function() {
                            if (!img.dataset.iosfixed) $5b02762f359a5b4d$var$imgToCanvas(img, orientation).then((canvas)=>{
                                img.src = canvas.toDataURL();
                                img.dataset.iosfixed = true;
                            });
                        };
                        img.src = base64;
                    });
                }
            });
        });
    };
    let imgs = document.querySelectorAll(selector);
    if (imgs.length) for(let i = 0; i < imgs.length; i++){
        let img = imgs[i];
        if (img.tagName.toLowerCase() === 'img') {
            img.crossOrigin = "Anonymous";
            if (img.complete) fixImg(img);
            else img.onload = function() {
                fixImg(img);
            };
        }
    }
    else console.log('fixer WARN no files:' + selector);
};
const $5b02762f359a5b4d$var$computeSize = function(originWidth, originHeight, maxWidth, maxHeight) {
    let targetWidth = originWidth, targetHeight = originHeight;
    const setWidth = function() {
        targetWidth = maxWidth;
        targetHeight = Math.round(maxWidth * (originHeight / originWidth));
    }, setHeight = function() {
        targetHeight = maxHeight;
        targetWidth = Math.round(maxHeight * (originWidth / originHeight));
    };
    if (maxWidth && maxHeight) //限定区间
    {
        if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) // 更宽
            setWidth();
            else // 更高
            setHeight();
        }
    } else if (maxWidth) //限定宽度
    setWidth();
    else if (maxHeight) //限定高度
    setHeight();
    return {
        width: targetWidth,
        height: targetHeight
    };
};
const $5b02762f359a5b4d$export$9fe3fb24d050ce98 = function(file, option) {
    const opt = Object.assign({
        maxWidth: null,
        maxHeight: null,
        ratio: 2,
        outType: 'base64' // base64 | blob
    }, option || {
    });
    return new Promise((resolve, reject)=>{
        if (file.type.indexOf('image/') === 0) $5b02762f359a5b4d$var$getOri(file).then((orientation)=>{
            let oReader = new FileReader();
            oReader.onload = function(e) {
                let base64 = e.target.result;
                let img = document.createElement('img');
                img.onload = function() {
                    if (opt.maxWidth || opt.maxHeight) {
                        let compressSize;
                        if (orientation === 6) {
                            compressSize = $5b02762f359a5b4d$var$computeSize(img.height, img.width, opt.maxWidth, opt.maxHeight);
                            img.targetWidth = compressSize.height;
                            img.targetHeight = compressSize.width;
                        } else {
                            compressSize = $5b02762f359a5b4d$var$computeSize(img.width, img.height, opt.maxWidth, opt.maxHeight);
                            img.targetWidth = compressSize.width;
                            img.targetHeight = compressSize.height;
                        }
                    }
                    $5b02762f359a5b4d$var$imgToCanvas(img, orientation).then((canvas)=>{
                        if (opt.outType === 'blob') canvas.toBlob(resolve, 'image/jpeg', opt.ratio);
                        else resolve(canvas.toDataURL('image/jpeg', opt.ratio));
                    });
                };
                img.src = base64;
            };
            oReader.readAsDataURL(file);
        }).catch((err)=>{
            reject(err);
        });
        else reject('非图片文件不支持压缩');
    });
};



//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/cropperjs/dist/cropper.js
var cropper = __webpack_require__(129);
var cropper_default = /*#__PURE__*/__webpack_require__.n(cropper);
// EXTERNAL MODULE: ./node_modules/cropperjs/dist/cropper.css
var dist_cropper = __webpack_require__(604);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uploader.vue?vue&type=script&lang=js




let cropperInstance; // 调试开关

const DEBUG = "production" === "development"; // 图片压缩成jpg格式

const fixJpgFileName = function (fileName) {
  if (fileName.match(/\.jpg|\.jpeg$/)) {
    return fileName;
  }

  return fileName + ".jpg";
}; // 文件类型集合


const FileTypeMap = {
  "t-image": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"],
  "t-video": [".mp4", ".rmvb", ".avi", ".mov", ".3gp", ".webm"],
  "t-audio": [".wav", ".mp3", ".ogg", ".acc"],
  "t-word": [".docx", ".doc"],
  "t-excel": [".xlsx", ".xls"],
  "t-ppt": [".ppt", ".pptx"],
  "t-document": [".pdf", "t-word", "t-excel", "t-ppt"],
  "t-zip": [".zip", ".rar"]
};
/* harmony default export */ const uploadervue_type_script_lang_js = ({
  props: {
    modelValue: {
      type: Array,
      required: false,

      default() {
        return [];
      }

    },
    triggerId: {
      // 配合实现富文本插件上传功能
      type: String,
      required: false,
      default: "upload_image_trigger" + parseInt(Math.random() * 1e8)
    },
    limitSize: {
      // 文件尺寸限制
      type: Number,
      required: false,

      default() {
        return 100 * 1024 * 1024;
      }

    },
    imgCompress: {
      // 开启图片压缩
      type: Boolean,
      required: false,

      default() {
        return true;
      }

    },
    imgCompressOption: {
      // 图片压缩配置
      type: Object,
      required: false,

      default() {
        return {
          maxWidth: 1000,
          maxHeight: 1000
        };
      }

    },
    imgCrop: {
      // 开启图片剪裁
      type: Boolean,
      required: false,

      default() {
        return false;
      }

    },
    imgCropOption: {
      // 图片剪裁配置
      type: Object,
      required: false,

      default() {
        return {
          ratio: 1,
          minWidth: 0,
          minHeight: 0,
          maxWidth: 1000,
          maxHeight: 1000
        };
      }

    },
    uploadMethod: {
      // 自定义上传方法，参数（file/blob, fileName）
      type: Function,
      required: false
    },
    responseTransfer: {
      // 接口返回数据 与 fileList 数据格式转换函数
      type: Function,
      required: false,

      default(response) {
        return response;
      }

    }
  },

  data() {
    return {
      dialogVisible: false,
      cropResult: null,
      fileListFinnal: [],
      controller: null,
      globalOption: {}
    };
  },

  computed: {
    acceptFinnal() {
      if (this.$attrs.accept && this.$attrs.accept.indexOf("t-") !== -1) {
        const typeArray = this.$attrs.accept.split(",");
        let result = [];
        typeArray.forEach(type => {
          result = result.concat(this.getExtByType(type));
        });
        return result.join(",");
      } else {
        return this.$attrs.accept || "*";
      }
    },

    propsFinnal() {
      const getDefaultValue = key => {
        if (Object.keys(this.globalOption).indexOf(key) !== -1) {
          return this.globalOption[key];
        }

        return this.$props[key];
      };

      let result = {};
      Object.keys(this.$props).forEach(prop => {
        result[prop] = getDefaultValue(prop);
      });
      return result;
    }

  },
  watch: {
    modelValue: {
      handler(newValue) {
        this.fileListFinnal = this.$attrs.fileList || newValue || [];

        if (this.$refs.myupload) {
          this.$refs.myupload.uploadFiles = newValue.filter(ef => {
            return newValue.findIndex(f => f.uid === ef.uid) !== -1;
          });
        }
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    getExtByType(type) {
      const quickType = Object.assign({}, FileTypeMap, this.globalOption.quickType || {});

      if (type && Array.isArray(quickType[type])) {
        let classList = [];
        let extList = [];
        quickType[type].forEach(e => {
          if (e.indexOf("t-") === 0) {
            classList.push(e);
          } else {
            extList.push(e);
          }
        });

        if (classList.length) {
          classList.forEach(classType => {
            extList = extList.concat(this.getExtByType(classType));
          });
        }

        return extList;
      } else if (type && type.split) {
        return [type.toLowerCase()];
      }
    },

    handleBeforeUpload: function (file) {
      // 尺寸校验
      if (file.size > this.propsFinnal.limitSize) {
        ElMessage({
          message: "文件大小超出限制",
          type: "warning"
        });
        return false;
      } // 格式校验


      if (this.acceptFinnal !== "*" && this.acceptFinnal.indexOf(file.name.substring(file.name.lastIndexOf(".")).toLowerCase()) === -1) {
        ElMessage({
          message: "文件格式不正确",
          type: "warning"
        });
        return false;
      }

      if (typeof this.$attrs["before-upload"] === "function") {
        return this.$attrs["before-upload"](file);
      } else if (this.globalOption && typeof this.globalOption.beforeUpload === "function") {
        return this.globalOption.beforeUpload(file);
      } else {
        return true;
      }
    },
    handleonExceed: function (file, fileList) {
      if (typeof this.$attrs["on-exceed"] === "function") {
        this.$attrs["on-exceed"](file, fileList);
      } else if (this.globalOption && typeof this.globalOption.onExceed === "function") {
        this.globalOption.onExceed(file, fileList);
      }
    },
    handleChange: function (file, fileList) {
      const doneFiles = fileList.filter(e => e.status === "success");

      if (doneFiles.length === fileList.length) {
        this.$emit("update:modelValue", doneFiles.map(e => {
          let data = e.response ? this.propsFinnal.responseTransfer(e.response) : e; // 扩展字段

          data.uid = e.uid;
          data.status = e.status;
          return data;
        }));
      }

      if (typeof this.$attrs["on-change"] === "function") {
        this.$attrs["on-change"](file, fileList);
      }
    },

    handleProgress(e) {
      if (typeof this.$attrs["on-progress"] === "function") {
        if (e.total > 0) {
          e.percent = e.loaded / e.total * 100;
        }

        this.$attrs["on-progress"](e);
      }
    },

    handleRemove: function (file, fileList) {
      this.$emit("update:modelValue", fileList.map(e => {
        let data = e.response ? this.propsFinnal.responseTransfer(e.response) : e;
        data.uid = e.uid;
        return data;
      }));

      if (typeof this.$attrs["on-remove"] === "function") {
        this.$attrs["on-remove"](file, fileList);
      }
    },
    customUpload: async function (params) {
      if (!this.globalOption && !this.globalOption.uploadMethod && !this.propsFinnal.uploadMethod) {
        return console.warn("Uploader: The required configuration [uploadMethod] is missing!");
      }

      const theUploadRequest = this.propsFinnal.uploadMethod || this.globalOption.uploadMethod;

      if (typeof theUploadRequest !== "function") {
        return console.warn("Uploader: [uploadMethod] must be a Function!");
      }

      const uploadedFileType = params.file.type;
      DEBUG && console.log("uploadedFileType", uploadedFileType);
      let formDataFileObj = params.file;
      let formDataFileName = params.file.name;

      if (uploadedFileType.indexOf("image/") === 0) {
        if (this.propsFinnal.imgCrop) {
          // 图片剪裁
          this.cropResult = null;
          this.dialogVisible = true;
          const imgBlob = await new Promise(resolve => {
            let oReader = new FileReader();

            oReader.onload = e => {
              let base64 = e.target.result;
              let img = this.$refs.CropperImg;
              img.src = base64; //

              if (cropperInstance) {
                cropperInstance.destroy();
              }

              cropperInstance = new (cropper_default())(img, {
                viewMode: 1,
                dragMode: "none",
                movable: false,
                zoomOnTouch: false,
                zoomOnWheel: false,
                toggleDragModeOnDblclick: false,
                aspectRatio: this.propsFinnal.imgCropOption.ratio
              });
            };

            oReader.readAsDataURL(params.file);
            this.$watch("cropResult", resolve);
          });

          if (imgBlob) {
            DEBUG && console.log("imgCrop", imgBlob);
            formDataFileObj = imgBlob;
            formDataFileName = fixJpgFileName(formDataFileName);
            this.cropperMethod("close");
          }
        } else if (this.propsFinnal.imgCompress) {
          // 图片压缩
          const imgBlob = await $5b02762f359a5b4d$export$9fe3fb24d050ce98(params.file, Object.assign({}, this.propsFinnal.imgCompressOption, {
            outType: "blob"
          }));
          DEBUG && console.log("imgCompress", imgBlob);
          formDataFileObj = imgBlob;
          formDataFileName = fixJpgFileName(formDataFileName);
        }
      } // 上传


      DEBUG && console.log("upload params", formDataFileName, formDataFileObj);
      this.controller = new AbortController();
      return theUploadRequest(formDataFileObj, formDataFileName, {
        onUploadProgress: this.handleProgress,
        signal: this.controller.signal
      }).then(res => {
        return res.data;
      });
    },

    cropperMethod(action) {
      // 剪裁相关处理方法
      switch (action) {
        case "save":
          cropperInstance.getCroppedCanvas({
            minWidth: this.propsFinnal.imgCropOption.minWidth,
            minHeight: this.propsFinnal.imgCropOption.minHeight,
            maxWidth: this.propsFinnal.imgCropOption.maxWidth || 1000,
            maxHeight: this.propsFinnal.imgCropOption.maxHeight || 1000,
            imageSmoothingQuality: "medium"
          }).toBlob(blob => {
            this.cropResult = blob;
          }, "image/jpeg");
          break;

        case "close":
          this.dialogVisible = false;

          if (cropperInstance) {
            cropperInstance.destroy();
          }

          if (!this.cropResult) {
            const newValue = [].concat(this.modelValue);
            newValue.pop();
            this.$emit("update:modelValue", newValue);
          }

          break;

        case "rotateLeft":
          cropperInstance.rotate(-90);
          break;

        case "rotateRight":
          cropperInstance.rotate(90);
          break;

        case "scaleX":
          cropperInstance.scaleX(-1);
          break;

        case "scaleY":
          cropperInstance.scaleY(-1);
          break;

        case "reset":
          cropperInstance.reset();
          break;

        default:
          console.warn("cropperMethod 参数错误: ", action);
      }
    },

    clearFiles() {
      // el-upload 方法
      this.$refs.myupload.clearFiles();
    },

    abort() {
      this.controller.abort();
    },

    submit() {
      // el-upload 方法
      this.$refs.myupload.submit();
    }

  },

  created() {
    this.globalOption = this.$UploaderOption || {};
  }

});
;// CONCATENATED MODULE: ./src/components/uploader.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/uploader.vue?vue&type=style&index=0&id=4bedf15c&scoped=true&lang=css
var uploadervue_type_style_index_0_id_4bedf15c_scoped_true_lang_css = __webpack_require__(895);
;// CONCATENATED MODULE: ./src/components/uploader.vue?vue&type=style&index=0&id=4bedf15c&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/uploader.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(uploadervue_type_script_lang_js, [['render',render],['__scopeId',"data-v-4bedf15c"]])

/* harmony default export */ const uploader = (__exports__);
;// CONCATENATED MODULE: ./src/index.js
/**
 * @cutting-mat/uploader
 * 
 * */

/* harmony default export */ const src_0 = ({
  install: function (app, option) {
    app.config.globalProperties.$UploaderOption = option || {};
    app.component('uploader', uploader);
  }
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (src_0);


})();

module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=index.common.js.map