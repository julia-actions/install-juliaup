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
exports.install_desired_julia_version = void 0;
// npm packages that are part of the GitHub Actions toolkit
// import * as core from '@actions/core'
const exec = __importStar(require("@actions/exec"));
// Our own source code files
const inputs = __importStar(require("./inputs"));
const platform = __importStar(require("./platform"));
async function install_desired_julia_version(info) {
    // Install the Julia desired version, and set it as the default.
    const julia_version = inputs.get_julia_version_input();
    const juliaup = platform.get_juliaup(info);
    await exec.exec(juliaup, ['add', `${julia_version}`]);
    await exec.exec(juliaup, ['default', `${julia_version}`]);
    return;
}
exports.install_desired_julia_version = install_desired_julia_version;
//# sourceMappingURL=julia.js.map