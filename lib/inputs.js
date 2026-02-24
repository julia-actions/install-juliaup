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
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_juliaup_channel_input = get_juliaup_channel_input;
exports.get_juliaup_version_input = get_juliaup_version_input;
exports.get_github_token_input = get_github_token_input;
exports.isNonEmptyString = isNonEmptyString;
// npm packages that are part of the GitHub Actions toolkit
const core = __importStar(require("@actions/core"));
function get_juliaup_channel_input() {
    const input_name = 'channel';
    const original_input = core.getInput(input_name);
    const trimmed_input = original_input.trim();
    if (trimmed_input != original_input) {
        throw new Error(`The ${input_name} input is not allowed to begin or end with whitespace: ${original_input}`);
    }
    if (!isNonEmptyString(trimmed_input)) {
        throw new Error(`You must specify a value for the ${input_name} input`);
    }
    return trimmed_input;
}
function get_juliaup_version_input() {
    const input_name = 'juliaup-version';
    const original_input = core.getInput(input_name);
    const trimmed_input = original_input.trim();
    if (trimmed_input != original_input) {
        throw new Error(`The ${input_name} input is not allowed to begin or end with whitespace: ${original_input}`);
    }
    if (!isNonEmptyString(trimmed_input)) {
        throw new Error(`You must specify a value for the ${input_name} input`);
    }
    return trimmed_input;
}
function get_github_token_input() {
    const input_name = 'token';
    const original_input = core.getInput(input_name);
    const trimmed_input = original_input.trim();
    if (trimmed_input != original_input) {
        throw new Error(`The ${input_name} input is not allowed to begin or end with whitespace: ${original_input}`);
    }
    if (!isNonEmptyString(trimmed_input)) {
        throw new Error(`You trimmed_input specify a value for the ${input_name} input`);
    }
    return trimmed_input;
}
function isNonEmptyString(str) {
    const result = str && str.length > 0;
    return result;
}
//# sourceMappingURL=inputs.js.map