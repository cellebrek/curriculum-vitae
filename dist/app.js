(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
	"blog": {
		"articles": [
			{
				"id": 0,
				"title": "Freeze your face off",
				"content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus nec odio bibendum dapibus eget ut urna. Donec <strong>venenatis tempus</strong> lectus et tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla dapibus magna, id vulputate nulla. Quisque nec felis lobortis, hendrerit dui vitae, aliquam nisl. Nam ut justo in neque elementum convallis. Curabitur placerat, felis quis tincidunt bibendum, nunc augue suscipit massa, ac iaculis diam metus nec urna. Praesent urna velit, lobortis sit amet lorem sit amet, rhoncus convallis turpis.</p><p>Lorem ipsum dolor sit amet, consectetur <strong>adipisicing</strong> elit. Similique, libero ratione ipsa nesciunt sint et nihil cumque eligendi hic deleniti nam ad ipsam quidem animi culpa voluptas molestiae. Reprehenderit, aperiam?</p>",
				"slider": [
					{
						"src": "assets/media/images/slider-image.jpg",
						"alt": "The Man Who Climbed The Wall",
						"title": "The Man Who Climbed The Wall",
						"label": "CLIENT / AGENCY"
					},
					{
						"src": "assets/media/images/slider-image.jpg",
						"alt": "The Man Who Climbed The Wall",
						"title": "The Man Who Climbed The Wall",
						"label": "CLIENT / AGENCY"
					},
					{
						"src": "assets/media/images/slider-image.jpg",
						"alt": "The Man Who Climbed The Wall",
						"title": "The Man Who Climbed The Wall",
						"label": "CLIENT / AGENCY"
					}
				]
			},
			{
				"id": 1,
				"title": "Just a random article",
				"content": "<p>Lorem ipsum dolor sit amet, consectetur <strong>adipisicing</strong> elit. Similique, libero ratione ipsa nesciunt sint et nihil cumque eligendi hic deleniti nam ad ipsam quidem animi culpa voluptas molestiae. Reprehenderit, aperiam?</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus nec odio bibendum dapibus eget ut urna. Donec <strong>venenatis tempus</strong> lectus et tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla dapibus magna, id vulputate nulla. Quisque nec felis lobortis, hendrerit dui vitae, aliquam nisl. Nam ut justo in neque elementum convallis. Curabitur placerat, felis quis tincidunt bibendum, nunc augue suscipit massa, ac iaculis diam metus nec urna. Praesent urna velit, lobortis sit amet lorem sit amet, rhoncus convallis turpis.</p>",
				"gallery": [
					{
						"thumb": "assets/media/images/gallery/1.jpg",
						"full": "assets/media/images/gallery/1-large.jpg"
					},
					{
						"thumb": "assets/media/images/gallery/2.jpg",
						"full": "assets/media/images/gallery/2-large.jpg"
					},
					{
						"thumb": "assets/media/images/gallery/3.jpg",
						"full": "assets/media/images/gallery/3-large.jpg"
					},
					{
						"thumb": "assets/media/images/gallery/4.jpg",
						"full": "assets/media/images/gallery/4-large.jpg"
					},
					{
						"thumb": "assets/media/images/gallery/5.jpg",
						"full": "assets/media/images/gallery/5-large.jpg"
					},
					{
						"thumb": "assets/media/images/gallery/6.jpg",
						"full": "assets/media/images/gallery/6-large.jpg"
					},
				]
			}
		]
	},
	"footer": {
		"widgets": [
			{
				"type": "classical",
				"title": "Location",
				"content": "<p>48 Beak Street<br>London<br>W1F 9RL</p>"
			},
			{
				"type": "classical",
				"title": "Contact",
				"content": "<span>Sam Matthews</span><br><span>CEO</span><br><a href=\"mailto:hello@neverbland.com\">e: hello@neverbland.com</a>"
			},
			{
				"type": "form",
				"title": "Newsletter",
				"elements": [
					{
						"type": "email"
					},
					{
						"type": "button",
						"value": "Submit"
					}
				]
			},
			{
				"type": "list",
				"title": "Navigation",
				"elements": ["Home", "Work", "Directors", "News", "About", "Contact"]
			}
		]
	}
}
},{}],2:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;

var _import = require('./handlebars/base');

var base = _interopRequireWildcard(_import);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _SafeString = require('./handlebars/safe-string');

var _SafeString2 = _interopRequireWildcard(_SafeString);

var _Exception = require('./handlebars/exception');

var _Exception2 = _interopRequireWildcard(_Exception);

var _import2 = require('./handlebars/utils');

var Utils = _interopRequireWildcard(_import2);

var _import3 = require('./handlebars/runtime');

var runtime = _interopRequireWildcard(_import3);

var _noConflict = require('./handlebars/no-conflict');

var _noConflict2 = _interopRequireWildcard(_noConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _SafeString2['default'];
  hb.Exception = _Exception2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_noConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];
},{"./handlebars/base":3,"./handlebars/exception":4,"./handlebars/no-conflict":5,"./handlebars/runtime":6,"./handlebars/safe-string":7,"./handlebars/utils":8}],3:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
exports.createFrame = createFrame;

var _import = require('./utils');

var Utils = _interopRequireWildcard(_import);

var _Exception = require('./exception');

var _Exception2 = _interopRequireWildcard(_Exception);

var VERSION = '3.0.1';
exports.VERSION = VERSION;
var COMPILER_REVISION = 6;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var isArray = Utils.isArray,
    isFunction = Utils.isFunction,
    toString = Utils.toString,
    objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials) {
  this.helpers = helpers || {};
  this.partials = partials || {};

  registerDefaultHelpers(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: logger,
  log: log,

  registerHelper: function registerHelper(name, fn) {
    if (toString.call(name) === objectType) {
      if (fn) {
        throw new _Exception2['default']('Arg not supported with multiple helpers');
      }
      Utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (toString.call(name) === objectType) {
      Utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _Exception2['default']('Attempting to register a partial as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  }
};

function registerDefaultHelpers(instance) {
  instance.registerHelper('helperMissing', function () {
    if (arguments.length === 1) {
      // A missing field in a {{foo}} constuct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _Exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });

  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });

  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _Exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: Utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (isArray(context)) {
        for (var j = context.length; i < j; i++) {
          execIteration(i, i, i === context.length - 1);
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });

  instance.registerHelper('if', function (conditional, options) {
    if (isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || Utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });

  instance.registerHelper('with', function (context, options) {
    if (isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!Utils.isEmpty(context)) {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
        options = { data: data };
      }

      return fn(context, options);
    } else {
      return options.inverse(this);
    }
  });

  instance.registerHelper('log', function (message, options) {
    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
    instance.log(level, message);
  });

  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
}

var logger = {
  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

  // State enum
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  level: 1,

  // Can be overridden in the host environment
  log: function log(level, message) {
    if (typeof console !== 'undefined' && logger.level <= level) {
      var method = logger.methodMap[level];
      (console[method] || console.log).call(console, message); // eslint-disable-line no-console
    }
  }
};

exports.logger = logger;
var log = logger.log;

exports.log = log;

function createFrame(object) {
  var frame = Utils.extend({}, object);
  frame._parent = object;
  return frame;
}

/* [args, ]options */
},{"./exception":4,"./utils":8}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  if (loc) {
    this.lineNumber = line;
    this.column = column;
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];
},{}],5:[function(require,module,exports){
(function (global){
'use strict';

exports.__esModule = true;
/*global window */

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
  };
};

module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;
exports.checkRevision = checkRevision;

// TODO: Remove this line and break up compilePartial

exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;

var _import = require('./utils');

var Utils = _interopRequireWildcard(_import);

var _Exception = require('./exception');

var _Exception2 = _interopRequireWildcard(_Exception);

var _COMPILER_REVISION$REVISION_CHANGES$createFrame = require('./base');

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[currentRevision],
          compilerVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[compilerRevision];
      throw new _Exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _Exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _Exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _Exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _Exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _Exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      return templateSpec[i];
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      depths = options.depths ? [context].concat(options.depths) : [context];
    }

    return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _Exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _Exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments[1] === undefined ? {} : arguments[1];

    return fn.call(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), depths && [context].concat(depths));
  }
  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    partial = options.partials[options.name];
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  options.partial = true;

  if (partial === undefined) {
    throw new _Exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data) : {};
    data.root = context;
  }
  return data;
}
},{"./base":3,"./exception":4,"./utils":8}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// Build out our basic SafeString type
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];
},{}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.extend = extend;

// Older IE versions do not directly support indexOf so we must implement our own, sadly.
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#x27;',
  '`': '&#x60;'
};

var badChars = /[&<>"'`]/g,
    possible = /[&<>"'`]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/*eslint-disable func-style, no-var */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
var isFunction;
exports.isFunction = isFunction;
/*eslint-enable func-style, no-var */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};exports.isArray = isArray;

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
},{}],9:[function(require,module,exports){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = require('./dist/cjs/handlebars.runtime')['default'];

},{"./dist/cjs/handlebars.runtime":2}],10:[function(require,module,exports){
module.exports = require("handlebars/runtime")["default"];

},{"handlebars/runtime":9}],11:[function(require,module,exports){
// Vendors
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var MainModule = require('./modules/main/module');

// app bootstrap
var App = new Marionette.Application();

App.module('main', MainModule);
App.start();
Backbone.history.start();


module.exports = App;

},{"./modules/main/module":13,"backbone":"backbone","backbone.marionette":"backbone.marionette","jquery":"jquery"}],12:[function(require,module,exports){
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var ResumeView = require('./views/resume/resume');

var Datas = require('../../../datas.json');

module.exports = Marionette.Controller.extend({
    indexAction: function() {
    	this.resumeAction();
    },
    resumeAction: function() {
        this.options.regions.resume.show(new ResumeView());
    }

});

},{"../../../datas.json":1,"./views/resume/resume":18,"backbone":"backbone","backbone.marionette":"backbone.marionette"}],13:[function(require,module,exports){
var Controller = require('./controller');
var Router = require('./router');
var Marionette = require('backbone.marionette');

var LayoutView = require('./views/layout/layout');

module.exports = Marionette.Module.extend({

    initialize: function(){

    },

    onStart: function(){

        var layoutView = new LayoutView();

        this.addInitializer(function(){
            this.app.addRegions({
                appContainer: 'body'
            });

            this.app.appContainer.show(layoutView);
        });

        this.addInitializer(function(){
            this.controller = new Controller({
                module: this,
                regions: this.app.appContainer.currentView
            });

            this.router = new Router({
                controller: this.controller
            });
        });

        this.addFinalizer(function(){
            this.controller.destroy();
        });

    }

});

},{"./controller":12,"./router":14,"./views/layout/layout":16,"backbone.marionette":"backbone.marionette"}],14:[function(require,module,exports){
var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({

    // extend AppRouter to tell the controller
    // when the router is ok
    constructor: function(options) {
        Marionette.AppRouter.prototype.constructor.call(this, options);
        this._getController().triggerMethod('start');
    },

    appRoutes: {
    	'': 'indexAction',
        'resume': 'resumeAction',
    }

});

},{"backbone.marionette":"backbone.marionette"}],15:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div data-resume></div>\n";
},"useData":true});

},{"hbsfy/runtime":10}],16:[function(require,module,exports){
var LayoutTemplate = require('./layout.hbs');
var Marionette = require('backbone.marionette');

module.exports = Marionette.LayoutView.extend({
	template: LayoutTemplate,
	tagName: 'main',
	className: 'l-main',
	ui: {

	},
	regions: {
        resume: '[data-resume]'
	},
	initialize: function(){
	},
	onShow: function(){
	}
});

},{"./layout.hbs":15,"backbone.marionette":"backbone.marionette"}],17:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"l-resume__wrapper\">\n	<div class=\"l-resume__title\">\n		<h1>Natan Kerbellec</h1>\n		<h2>Front End Web Developer</h2>\n	</div>\n\n	<!-- PERSONAL INFORMATION -->\n	<div class=\"l-resume__category\">\n		<ul class=\"l-resume__category-list\">\n			<h3>PERSONAL INFORMATION</h3>\n		</ul>\n\n		<ul class=\"l-resume__detail-list l-resume__detail-list--personal\">\n			<h3>PERSONAL INFORMATION</h3>\n			<li>\n				<div class=\"l-resume__float-detail\">Telephone</div>\n				<p>Mobile: (+33) 601851670</p>\n			</li>\n			<li>\n				<div class=\"l-resume__float-detail\">E-mail</div>\n				<p>n.kerbellec@gmail.com</p>\n			</li>\n			<li>\n				<div class=\"l-resume__float-detail\">Nationality</div>\n				<p>French</p>\n			</li>\n			<li>\n				<div class=\"l-resume__float-detail\">Date of birth</div>\n				<p>15 June 1987</p>\n			</li>\n			<li>\n				<div class=\"l-resume__float-detail\">Gender</div>\n				<p>Male</p>\n			</li>\n			<li>\n				<div class=\"l-resume__float-detail\">Driving License</div>\n				<p>Category B</p>\n			</li>\n			<li>\n				<div class=\"l-resume__float-detail\">Personal Website</div>\n				<p><a href=\"http://www.natankerbellec.com\" target=\"_blank\">www.natankerbellec.com</a></p>\n			</li>\n		</ul>\n	</div>\n\n	<!-- SKILLS & COMPETENCIES -->\n	<div class=\"l-resume__category\">\n		<ul class=\"l-resume__category-list\">\n			<h3>SKILLS & COMPETENCIES</h3>\n		</ul>\n\n		<ul class=\"l-resume__detail-list\">\n			<h3>SKILLS & COMPETENCIES</h3>\n			<li>\n				<div class=\"l-resume__float-detail\">Personal Skills</div>\n				<p>• Responsible, rigorous and self-discipline.</p>\n				<p>• Good analytical and problem-solving abilities.</p>\n			</li>\n			<li>\n				<div class=\"l-resume__float-detail\">Computer Skills</div>\n				<p>• HTML, CSS, Stylus, Javascript, jQuery</p>\n			</li>\n			<li>\n				<div class=\"l-resume__float-detail\">Applications</div>\n				<p>• Adobe Illustrator / Photoshop, IDE</p>\n			</li>\n	   </ul>\n	</div>\n\n	<!-- WORK EXPERIENCE -->\n	<div class=\"l-resume__category\">\n		<ul class=\"l-resume__category-list\">\n			<h3>WORK EXPERIENCE</h3>\n		</ul>\n\n		<ul class=\"l-resume__detail-list\">\n			<li>\n				<h3>WORK EXPERIENCE</h3>\n				<div class=\"l-resume__float-detail\">Position<br>Activities</div>\n				<div class=\"l-resume__date\">2011 - Today</div>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n			</li>\n			<li>\n				<h3>WORK EXPERIENCE</h3>\n				<div class=\"l-resume__float-detail\">Position<br>Activities</div>\n				<div class=\"l-resume__date\">2011 - Today</div>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n			</li>\n		</ul>\n	</div>\n\n	<!-- EDUCATION & TRAINING -->\n	<div class=\"l-resume__category\">\n		<ul class=\"l-resume__category-list\">\n			<h3>EDUCATION & TRAINING</h3>\n		</ul>\n\n		<ul class=\"l-resume__detail-list\">\n			<li>\n				<h3>EDUCATION & TRAINING</h3>\n				<div class=\"l-resume__float-detail\">Position<br>Activities</div>\n				<div class=\"l-resume__date\">2011 - Today</div>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n			</li>\n			<li>\n				<h3>EDUCATION & TRAINING</h3>\n				<div class=\"l-resume__float-detail\">Position<br>Activities</div>\n				<div class=\"l-resume__date\">2011 - Today</div>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n				<p>Founder & Owner of “cloudnine” studio, Freelancer</p>\n			</li>\n		</ul>\n	</div>\n\n	<!-- LANGUAGES -->\n	<div class=\"l-resume__category\">\n		<ul class=\"l-resume__category-list\">\n			<h3>LANGUAGES</h3>\n		</ul>\n\n		<ul class=\"l-resume__detail-list\">\n			<li>\n				<h3>LANGUAGES</h3>\n				<div class=\"l-resume__float-detail\">Native Language</div>\n				<p>French</p>\n			</li>\n			<li>\n				<div class=\"l-resume__float-detail\">Other language(s)</div>\n				<p>English</p>\n			</li>\n		</ul>\n	</div>\n\n	<!-- LANGUAGES -->\n	<div class=\"l-resume__category\">\n		<ul class=\"l-resume__category-list\">\n			<h3>HOBBIES</h3>\n		</ul>\n\n		<ul class=\"l-resume__detail-list\">\n			<li>\n				<h3>HOBBIES</h3>\n				<div class=\"l-resume__float-detail\">Photography</div>\n				<p><a href=\"http://www.cellebrek.com\" target=\"_blank\">www.cellebrek.com</a></p>\n			</li>\n			<li>\n				<div class=\"l-resume__float-detail\">Bicycle</div>\n				<p><a href=\"http://www.rennesfixedgear.com\" target=\"_blank\">www.rennesfixedgear.com</a></p>\n			</li>\n		</ul>\n	</div>\n</div>\n";
},"useData":true});

},{"hbsfy/runtime":10}],18:[function(require,module,exports){
var ResumeTemplate = require('./resume.hbs');
var Marionette = require('backbone.marionette');

module.exports = Marionette.LayoutView.extend({
	template: ResumeTemplate,
	className: 'l-resume',
	initialize: function(){
	},
	onShow: function(){
	}
});

},{"./resume.hbs":17,"backbone.marionette":"backbone.marionette"}]},{},[11]);
