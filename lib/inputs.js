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
exports.isNonEmptyString = exports.get_juliaup_version_input = exports.get_julia_version_input = void 0;
// npm packages that are part of the GitHub Actions toolkit
const core = __importStar(require("@actions/core"));
function get_julia_version_input() {
    const input_name = 'julia-version';
    const original_version_input = core.getInput(input_name);
    const version = original_version_input.trim();
    if (version != original_version_input) {
        throw new Error(`The ${input_name} input is not allowed to begin or end with whitespace: ${original_version_input}`);
    }
    if (!isNonEmptyString(version)) {
        throw new Error(`You must specify a value for the ${input_name} input`);
    }
    return version;
}
exports.get_julia_version_input = get_julia_version_input;
function get_juliaup_version_input() {
    const input_name = 'internal-juliaup-version';
    const original_version_input = core.getInput(input_name);
    const version = original_version_input.trim();
    if (version != original_version_input) {
        throw new Error(`The ${input_name} input is not allowed to begin or end with whitespace: ${original_version_input}`);
    }
    if (!isNonEmptyString(version)) {
        throw new Error(`You must specify a value for the ${input_name} input`);
    }
    return version;
}
exports.get_juliaup_version_input = get_juliaup_version_input;
function isNonEmptyString(str) {
    const result = str && str.length > 0;
    return result;
}
exports.isNonEmptyString = isNonEmptyString;
//# sourceMappingURL=inputs.js.map