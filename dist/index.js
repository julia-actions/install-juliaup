/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2756:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
const start_here = __importStar(__nccwpck_require__(5869));
start_here.main_function_run_me();
//# sourceMappingURL=entrypoint.js.map

/***/ }),

/***/ 6107:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// npm packages that are part of the GitHub Actions toolkit:
// See dynamic imports below
// await import('@actions/core');
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.get_juliaup_channel_input = get_juliaup_channel_input;
exports.get_juliaup_version_input = get_juliaup_version_input;
exports.isNonEmptyString = isNonEmptyString;
async function get_juliaup_channel_input() {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { getInput: core_getInput } = await Promise.all(/* import() */[__nccwpck_require__.e(955), __nccwpck_require__.e(58)]).then(__nccwpck_require__.bind(__nccwpck_require__, 6058));
    const input_name = 'channel';
    const original_input = core_getInput(input_name);
    const trimmed_input = original_input.trim();
    if (trimmed_input != original_input) {
        throw new Error(`The ${input_name} input is not allowed to begin or end with whitespace: ${original_input}`);
    }
    if (!isNonEmptyString(trimmed_input)) {
        throw new Error(`You must specify a value for the ${input_name} input`);
    }
    return trimmed_input;
}
async function get_juliaup_version_input() {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { getInput: core_getInput } = await Promise.all(/* import() */[__nccwpck_require__.e(955), __nccwpck_require__.e(58)]).then(__nccwpck_require__.bind(__nccwpck_require__, 6058));
    const input_name = 'internal-juliaup-version';
    const original_input = core_getInput(input_name);
    const trimmed_input = original_input.trim();
    if (trimmed_input != original_input) {
        throw new Error(`The ${input_name} input is not allowed to begin or end with whitespace: ${original_input}`);
    }
    if (!isNonEmptyString(trimmed_input)) {
        throw new Error(`You must specify a value for the ${input_name} input`);
    }
    return trimmed_input;
}
function isNonEmptyString(str) {
    const result = str && str.length > 0;
    return result;
}
//# sourceMappingURL=inputs.js.map

/***/ }),

/***/ 5073:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// npm packages that are part of the GitHub Actions toolkit:
// See dynamic imports below
// await import('@actions/exec');
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.install_desired_juliaup_channel = install_desired_juliaup_channel;
// Our own source code files
const inputs = __importStar(__nccwpck_require__(6107));
const platform = __importStar(__nccwpck_require__(3993));
async function install_desired_juliaup_channel(info) {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { exec: exec_exec } = await __nccwpck_require__.e(/* import() */ 955).then(__nccwpck_require__.bind(__nccwpck_require__, 1955));
    // Install the Julia desired version, and set it as the default.
    const juliaup_channel = await inputs.get_juliaup_channel_input();
    const juliaup = platform.get_juliaup(info);
    await exec_exec(juliaup, ['add', `${juliaup_channel}`]);
    await exec_exec(juliaup, ['update', `${juliaup_channel}`]);
    await exec_exec(juliaup, ['default', `${juliaup_channel}`]);
    return;
}
//# sourceMappingURL=julia.js.map

/***/ }),

/***/ 1352:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// npm packages that are part of the GitHub Actions toolkit:
// See dynamic imports below
// await import('@actions/core');
// await import('@actions/tool-cache');
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ensure_juliaup_is_installed = ensure_juliaup_is_installed;
// Other npm packages
const retry = __nccwpck_require__(5195);
// Our own source code files
const inputs = __importStar(__nccwpck_require__(6107));
const platform = __importStar(__nccwpck_require__(3993));
async function ensure_juliaup_is_installed() {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { info: core_info, addPath: core_addPath } = await Promise.all(/* import() */[__nccwpck_require__.e(955), __nccwpck_require__.e(58)]).then(__nccwpck_require__.bind(__nccwpck_require__, 6058));
    const { find: tc_find, cacheDir: tc_cacheDir } = await Promise.all(/* import() */[__nccwpck_require__.e(955), __nccwpck_require__.e(58), __nccwpck_require__.e(805)]).then(__nccwpck_require__.bind(__nccwpck_require__, 9805));
    // 1. Determine which version of Juliaup to use.
    const juliaup_version = await _get_latest_juliaup_version();
    let juliaup_dir;
    // 2. Search the toolcache to see if the desired version of Juliaup already exists.
    const arch = process.arch;
    const tool_name = 'juliaup';
    juliaup_dir = tc_find(tool_name, juliaup_version, arch);
    // await _install_juliaup()
    // 3. If it wasn't found in the toolcache, we have to download it ourselves.
    if (!juliaup_dir) {
        // Download and extract Juliaup to a temp directory:
        const extracted_download_path = await download_and_extract_juliaup_to_temp_dir(juliaup_version);
        // Copy Juliaup from the temp directory to the toolcache:
        juliaup_dir = await tc_cacheDir(extracted_download_path, tool_name, juliaup_version, arch);
        core_info(`Added Juliaup to the toolcache: ${juliaup_dir}`);
    }
    else {
        // If we found the desired version of Juliaup in the toolcache,
        // then we use that.
        core_info(`Using existing tool-cached version of Juliaup: ${juliaup_dir}`);
    }
    // 4. Add Juliaup (and thus also Julialauncher) to the PATH.
    await core_addPath(juliaup_dir);
    const info_object = {
        juliaup_dir
    };
    return info_object;
}
// TODO: if the user passes `latest` get the correct value automatically:
async function _get_latest_juliaup_version() {
    const version = await inputs.get_juliaup_version_input();
    return version;
}
// This function downloads and extracts Juliaup to a temp directory.
// It does NOT add Juliaup to the toolcache.
async function download_and_extract_juliaup_to_temp_dir(juliaup_version) {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { info: core_info } = await Promise.all(/* import() */[__nccwpck_require__.e(955), __nccwpck_require__.e(58)]).then(__nccwpck_require__.bind(__nccwpck_require__, 6058));
    const { downloadTool: tc_downloadTool, extractTar: tc_extractTar } = await Promise.all(/* import() */[__nccwpck_require__.e(955), __nccwpck_require__.e(58), __nccwpck_require__.e(805)]).then(__nccwpck_require__.bind(__nccwpck_require__, 9805));
    // 1. Construct the Juliaup tarball download URL.
    const tarball_download_url = await _construct_juliaup_tarball_download_url(juliaup_version);
    core_info(`Attempting to download Juliaup from: ${tarball_download_url}`);
    // 2. Download the Juliaup tarball (from the above URL) to a temp directory.
    // Taken from: https://github.com/julia-actions/setup-julia/blob/e9d953d306cac42c94058f27c6564ec50d97d913/src/installer.ts#L216-L225
    //
    // Occasionally the connection is reset for unknown reasons.
    // In those cases, retry the download.
    const tarball_download_path = await retry(async (bail) => {
        return await tc_downloadTool(tarball_download_url);
    }, {
        retries: 5,
        onRetry: (err) => {
            core_info(`Download of ${tarball_download_url} failed, trying again. Error: ${err}`);
        }
    });
    // 3. Extract the downloaded Juliaup tarball to a temp directory.
    // Extract the Juliaup tarball to a temp directory:
    const extracted_download_path = await tc_extractTar(tarball_download_path);
    return extracted_download_path;
}
async function _construct_juliaup_tarball_download_url(juliaup_version) {
    const triplet = platform.get_platform_triplet();
    const url = `https://github.com/JuliaLang/juliaup/releases/download/v${juliaup_version}/juliaup-${juliaup_version}-${triplet}-portable.tar.gz`;
    return url;
}
//# sourceMappingURL=juliaup.js.map

/***/ }),

/***/ 3993:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.get_juliaup = get_juliaup;
exports.get_julialauncher = get_julialauncher;
exports.get_platform_triplet = get_platform_triplet;
// Built into NodeJS
const os = __importStar(__nccwpck_require__(857));
const path = __importStar(__nccwpck_require__(6928));
function get_juliaup(info) {
    if (os.platform() === 'win32') {
        var juliaup_exename = 'juliaup.exe';
    }
    else {
        var juliaup_exename = 'juliaup';
    }
    const juliaup = path.join(info.juliaup_dir, juliaup_exename);
    return juliaup;
}
function get_julialauncher(info) {
    if (os.platform() === 'win32') {
        var julialauncher_exename = 'julia.exe';
    }
    else {
        var julialauncher_exename = 'julia';
    }
    const julia = path.join(info.juliaup_dir, julialauncher_exename);
    return julia;
}
function get_platform_triplet() {
    const operating_system = os.platform();
    const arch = process.arch;
    if (operating_system === 'win32') {
        if (arch === 'x64') {
            var triplet = 'x86_64-pc-windows-gnu';
        }
        else {
            throw new Error(`We do not support the \"${arch}\" arch on the \"${operating_system}\" OS`);
        }
    }
    else if (operating_system === 'linux') {
        if (arch === 'x64') {
            var triplet = 'x86_64-unknown-linux-musl';
        }
        else if (arch === 'arm64') {
            var triplet = 'aarch64-unknown-linux-musl';
        }
        else {
            throw new Error(`We do not support the \"${arch}\" arch on the \"${operating_system}\" OS`);
        }
    }
    else if (operating_system === 'darwin') {
        if (arch === 'x64') {
            var triplet = 'x86_64-apple-darwin';
        }
        else if (arch === 'arm64') {
            var triplet = 'aarch64-apple-darwin';
        }
        else {
            throw new Error(`We do not support the \"${arch}\" arch on the \"${operating_system}\" OS`);
        }
    }
    else {
        throw new Error(`Unknown operating system: ${operating_system}`);
    }
    return triplet;
}
//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 5869:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// npm packages that are part of the GitHub Actions toolkit:
// See dynamic imports below
// await import('@actions/core');
// await import('@actions/exec');
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main_function_run_me = main_function_run_me;
// Other npm packages
// Built into NodeJS
// Our own source code files
const inputs = __importStar(__nccwpck_require__(6107));
const julia = __importStar(__nccwpck_require__(5073));
const juliaup = __importStar(__nccwpck_require__(1352));
const platform = __importStar(__nccwpck_require__(3993));
async function main_function_run_me() {
    // Step 1: Make sure all required inputs are provided.
    await inputs.get_juliaup_channel_input();
    await inputs.get_juliaup_version_input();
    // Step 2: Ensure that Juliaup is installed.
    const info = await juliaup.ensure_juliaup_is_installed();
    // Step 3: Print the path of `juliaup`:
    await print_debugging_juliaup_path(info);
    // Step 4: Install the Julia desired version, and set it as the default.
    await julia.install_desired_juliaup_channel(info);
    // Step 5: Print the path of `julia` (julialauncher):
    await print_debugging_julialauncher_path(info);
    return;
}
async function print_debugging_juliaup_path(info_object) {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { info: core_info } = await Promise.all(/* import() */[__nccwpck_require__.e(955), __nccwpck_require__.e(58)]).then(__nccwpck_require__.bind(__nccwpck_require__, 6058));
    const { exec: exec_exec } = await __nccwpck_require__.e(/* import() */ 955).then(__nccwpck_require__.bind(__nccwpck_require__, 1955));
    const juliaup = platform.get_juliaup(info_object);
    core_info(`juliaup: ${juliaup}`);
    await exec_exec(juliaup, ['--version']);
    return;
}
async function print_debugging_julialauncher_path(info_object) {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { info: core_info } = await Promise.all(/* import() */[__nccwpck_require__.e(955), __nccwpck_require__.e(58)]).then(__nccwpck_require__.bind(__nccwpck_require__, 6058));
    const { exec: exec_exec } = await __nccwpck_require__.e(/* import() */ 955).then(__nccwpck_require__.bind(__nccwpck_require__, 1955));
    const julia = platform.get_julialauncher(info_object);
    core_info(`julia: ${julia}`);
    await exec_exec(julia, ['--version']);
    return;
}
//# sourceMappingURL=start_here.js.map

/***/ }),

/***/ 5195:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Packages
var retrier = __nccwpck_require__(5546);

function retry(fn, opts) {
  function run(resolve, reject) {
    var options = opts || {};
    var op;

    // Default `randomize` to true
    if (!('randomize' in options)) {
      options.randomize = true;
    }

    op = retrier.operation(options);

    // We allow the user to abort retrying
    // this makes sense in the cases where
    // knowledge is obtained that retrying
    // would be futile (e.g.: auth errors)

    function bail(err) {
      reject(err || new Error('Aborted'));
    }

    function onError(err, num) {
      if (err.bail) {
        bail(err);
        return;
      }

      if (!op.retry(err)) {
        reject(op.mainError());
      } else if (options.onRetry) {
        options.onRetry(err, num);
      }
    }

    function runAttempt(num) {
      var val;

      try {
        val = fn(bail, num);
      } catch (err) {
        onError(err, num);
        return;
      }

      Promise.resolve(val)
        .then(resolve)
        .catch(function catchIt(err) {
          onError(err, num);
        });
    }

    op.attempt(runAttempt);
  }

  return new Promise(run);
}

module.exports = retry;


/***/ }),

/***/ 5546:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(7084);

/***/ }),

/***/ 7084:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

var RetryOperation = __nccwpck_require__(9538);

exports.operation = function(options) {
  var timeouts = exports.timeouts(options);
  return new RetryOperation(timeouts, {
      forever: options && (options.forever || options.retries === Infinity),
      unref: options && options.unref,
      maxRetryTime: options && options.maxRetryTime
  });
};

exports.timeouts = function(options) {
  if (options instanceof Array) {
    return [].concat(options);
  }

  var opts = {
    retries: 10,
    factor: 2,
    minTimeout: 1 * 1000,
    maxTimeout: Infinity,
    randomize: false
  };
  for (var key in options) {
    opts[key] = options[key];
  }

  if (opts.minTimeout > opts.maxTimeout) {
    throw new Error('minTimeout is greater than maxTimeout');
  }

  var timeouts = [];
  for (var i = 0; i < opts.retries; i++) {
    timeouts.push(this.createTimeout(i, opts));
  }

  if (options && options.forever && !timeouts.length) {
    timeouts.push(this.createTimeout(i, opts));
  }

  // sort the array numerically ascending
  timeouts.sort(function(a,b) {
    return a - b;
  });

  return timeouts;
};

exports.createTimeout = function(attempt, opts) {
  var random = (opts.randomize)
    ? (Math.random() + 1)
    : 1;

  var timeout = Math.round(random * Math.max(opts.minTimeout, 1) * Math.pow(opts.factor, attempt));
  timeout = Math.min(timeout, opts.maxTimeout);

  return timeout;
};

exports.wrap = function(obj, options, methods) {
  if (options instanceof Array) {
    methods = options;
    options = null;
  }

  if (!methods) {
    methods = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function') {
        methods.push(key);
      }
    }
  }

  for (var i = 0; i < methods.length; i++) {
    var method   = methods[i];
    var original = obj[method];

    obj[method] = function retryWrapper(original) {
      var op       = exports.operation(options);
      var args     = Array.prototype.slice.call(arguments, 1);
      var callback = args.pop();

      args.push(function(err) {
        if (op.retry(err)) {
          return;
        }
        if (err) {
          arguments[0] = op.mainError();
        }
        callback.apply(this, arguments);
      });

      op.attempt(function() {
        original.apply(obj, args);
      });
    }.bind(obj, original);
    obj[method].options = options;
  }
};


/***/ }),

/***/ 9538:
/***/ ((module) => {

function RetryOperation(timeouts, options) {
  // Compatibility for the old (timeouts, retryForever) signature
  if (typeof options === 'boolean') {
    options = { forever: options };
  }

  this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
  this._timeouts = timeouts;
  this._options = options || {};
  this._maxRetryTime = options && options.maxRetryTime || Infinity;
  this._fn = null;
  this._errors = [];
  this._attempts = 1;
  this._operationTimeout = null;
  this._operationTimeoutCb = null;
  this._timeout = null;
  this._operationStart = null;
  this._timer = null;

  if (this._options.forever) {
    this._cachedTimeouts = this._timeouts.slice(0);
  }
}
module.exports = RetryOperation;

RetryOperation.prototype.reset = function() {
  this._attempts = 1;
  this._timeouts = this._originalTimeouts.slice(0);
}

RetryOperation.prototype.stop = function() {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }
  if (this._timer) {
    clearTimeout(this._timer);
  }

  this._timeouts       = [];
  this._cachedTimeouts = null;
};

RetryOperation.prototype.retry = function(err) {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  if (!err) {
    return false;
  }
  var currentTime = new Date().getTime();
  if (err && currentTime - this._operationStart >= this._maxRetryTime) {
    this._errors.push(err);
    this._errors.unshift(new Error('RetryOperation timeout occurred'));
    return false;
  }

  this._errors.push(err);

  var timeout = this._timeouts.shift();
  if (timeout === undefined) {
    if (this._cachedTimeouts) {
      // retry forever, only keep last error
      this._errors.splice(0, this._errors.length - 1);
      timeout = this._cachedTimeouts.slice(-1);
    } else {
      return false;
    }
  }

  var self = this;
  this._timer = setTimeout(function() {
    self._attempts++;

    if (self._operationTimeoutCb) {
      self._timeout = setTimeout(function() {
        self._operationTimeoutCb(self._attempts);
      }, self._operationTimeout);

      if (self._options.unref) {
          self._timeout.unref();
      }
    }

    self._fn(self._attempts);
  }, timeout);

  if (this._options.unref) {
      this._timer.unref();
  }

  return true;
};

RetryOperation.prototype.attempt = function(fn, timeoutOps) {
  this._fn = fn;

  if (timeoutOps) {
    if (timeoutOps.timeout) {
      this._operationTimeout = timeoutOps.timeout;
    }
    if (timeoutOps.cb) {
      this._operationTimeoutCb = timeoutOps.cb;
    }
  }

  var self = this;
  if (this._operationTimeoutCb) {
    this._timeout = setTimeout(function() {
      self._operationTimeoutCb();
    }, self._operationTimeout);
  }

  this._operationStart = new Date().getTime();

  this._fn(this._attempts);
};

RetryOperation.prototype.try = function(fn) {
  console.log('Using RetryOperation.try() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = function(fn) {
  console.log('Using RetryOperation.start() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = RetryOperation.prototype.try;

RetryOperation.prototype.errors = function() {
  return this._errors;
};

RetryOperation.prototype.attempts = function() {
  return this._attempts;
};

RetryOperation.prototype.mainError = function() {
  if (this._errors.length === 0) {
    return null;
  }

  var counts = {};
  var mainError = null;
  var mainErrorCount = 0;

  for (var i = 0; i < this._errors.length; i++) {
    var error = this._errors[i];
    var message = error.message;
    var count = (counts[message] || 0) + 1;

    counts[message] = count;

    if (count >= mainErrorCount) {
      mainError = error;
      mainErrorCount = count;
    }
  }

  return mainError;
};


/***/ }),

/***/ 2613:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 5317:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6982:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 4434:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 9896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8611:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 9278:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 4589:
/***/ ((module) => {

"use strict";
module.exports = require("node:assert");

/***/ }),

/***/ 6698:
/***/ ((module) => {

"use strict";
module.exports = require("node:async_hooks");

/***/ }),

/***/ 4573:
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ 7540:
/***/ ((module) => {

"use strict";
module.exports = require("node:console");

/***/ }),

/***/ 7598:
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ 3053:
/***/ ((module) => {

"use strict";
module.exports = require("node:diagnostics_channel");

/***/ }),

/***/ 610:
/***/ ((module) => {

"use strict";
module.exports = require("node:dns");

/***/ }),

/***/ 8474:
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ 7067:
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ 2467:
/***/ ((module) => {

"use strict";
module.exports = require("node:http2");

/***/ }),

/***/ 7030:
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ 643:
/***/ ((module) => {

"use strict";
module.exports = require("node:perf_hooks");

/***/ }),

/***/ 1792:
/***/ ((module) => {

"use strict";
module.exports = require("node:querystring");

/***/ }),

/***/ 7075:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ 1692:
/***/ ((module) => {

"use strict";
module.exports = require("node:tls");

/***/ }),

/***/ 3136:
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ 7975:
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ 3429:
/***/ ((module) => {

"use strict";
module.exports = require("node:util/types");

/***/ }),

/***/ 5919:
/***/ ((module) => {

"use strict";
module.exports = require("node:worker_threads");

/***/ }),

/***/ 8522:
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 6928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2203:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 3193:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 3557:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 4756:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 9023:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nccwpck_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__nccwpck_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__nccwpck_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__nccwpck_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__nccwpck_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__nccwpck_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__nccwpck_require__.f).reduce((promises, key) => {
/******/ 				__nccwpck_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__nccwpck_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			792: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__nccwpck_require__.o(moreModules, moduleId)) {
/******/ 					__nccwpck_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__nccwpck_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__nccwpck_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __nccwpck_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(2756);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;