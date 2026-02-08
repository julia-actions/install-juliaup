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
Object.defineProperty(exports, "__esModule", { value: true });
exports.install_desired_juliaup_channel = install_desired_juliaup_channel;
// Our own source code files
const inputs = __importStar(require("./inputs"));
const platform = __importStar(require("./platform"));
async function install_desired_juliaup_channel(info) {
    // Dynamic imports:
    // npm packages that are part of the GitHub Actions toolkit
    const { exec: exec_exec } = await import('@actions/exec');
    // Install the Julia desired version, and set it as the default.
    const juliaup_channel = inputs.get_juliaup_channel_input();
    const juliaup = platform.get_juliaup(info);
    await exec_exec(juliaup, ['add', `${juliaup_channel}`]);
    await exec_exec(juliaup, ['update', `${juliaup_channel}`]);
    await exec_exec(juliaup, ['default', `${juliaup_channel}`]);
    return;
}
//# sourceMappingURL=julia.js.map