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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main_function_run_me = void 0;
// npm packages that are part of the GitHub Actions toolkit
const core = __importStar(require("@actions/core"));
const exec = __importStar(require("@actions/exec"));
// Built into NodeJS
// import * as os from 'os'
// import * as path from 'path'
// Our own source code files
const inputs = __importStar(require("./inputs"));
const julia = __importStar(require("./julia"));
const juliaup = __importStar(require("./juliaup"));
const platform = __importStar(require("./platform"));
async function main_function_run_me() {
    // Step 1: Make sure all required inputs are provided.
    inputs.get_julia_version_input();
    inputs.get_juliaup_version_input();
    // Step 2: Ensure that Juliaup is installed.
    const info = await juliaup.ensure_juliaup_is_installed();
    // Step 3: Print the path of `juliaup`:
    await print_debugging_juliaup_path(info);
    // Step 4: Install the Julia desired version, and set it as the default.
    await julia.install_desired_julia_version(info);
    // Step 5: Print the path of `julia` (julialauncher):
    await print_debugging_julialauncher_path(info);
    return;
}
exports.main_function_run_me = main_function_run_me;
async function print_debugging_juliaup_path(info) {
    const juliaup = platform.get_juliaup(info);
    console.log(`juliaup: ${juliaup}`); // TODO: delete this line
    core.info(`juliaup: ${juliaup}`);
    await exec.exec(juliaup, ['--version']);
    return;
}
async function print_debugging_julialauncher_path(info) {
    const julia = platform.get_julialauncher(info);
    console.log(`julia: ${julia}`); // TODO: delete this line
    core.info(`julia: ${julia}`);
    await exec.exec(julia, ['--version']);
    return;
}
//# sourceMappingURL=start_here.js.map