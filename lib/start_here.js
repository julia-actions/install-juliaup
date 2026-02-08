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
Object.defineProperty(exports, "__esModule", { value: true });
exports.main_function_run_me = main_function_run_me;
// Other npm packages
// Built into NodeJS
// Our own source code files
const inputs = __importStar(require("./inputs"));
const julia = __importStar(require("./julia"));
const juliaup = __importStar(require("./juliaup"));
const platform = __importStar(require("./platform"));
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
    const { info: core_info } = await import('@actions/core');
    const { exec: exec_exec } = await import('@actions/exec');
    const juliaup = platform.get_juliaup(info_object);
    core_info(`juliaup: ${juliaup}`);
    await exec_exec(juliaup, ['--version']);
    return;
}
async function print_debugging_julialauncher_path(info_object) {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { info: core_info } = await import('@actions/core');
    const { exec: exec_exec } = await import('@actions/exec');
    const julia = platform.get_julialauncher(info_object);
    core_info(`julia: ${julia}`);
    await exec_exec(julia, ['--version']);
    return;
}
//# sourceMappingURL=start_here.js.map